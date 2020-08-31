require("linqjs")
import Link from 'next/link'
import Layout from "../components/layout";
import Jumbotron from "../components/jumbotron";
import Locations from "./data.json"

const Index = ({ locations }) =>
    <Layout>
        <Jumbotron />
        <section className="container">
            <div className="card bg-dark">
                <div className="card-body">
                    <h5 className="card-title display-4 text-center">
                        Featured Locations
                    </h5>
                </div>
            </div> 
            {getLocationRow(locations.take(2))} 
            {getLocationRow(locations.skip(2).take(2))}    
        </section>
    </Layout>;

const getLocationRow = (locations) =>
    <div className="card-group">
        {locations.map((location) => (
            <div className="card text-white bg-dark" key={location.id}>
                <div className="card-body">
                    <h5 className="card-title text-center">
                        {location.name}
                    </h5>
                    <div className="card-text my-2">
                        {getBlock(location.parkingIncluded, 'fa-car', 'Parking included', 'No parking available')}                            
                        {getBlock(location.conferenceRoomsIncluded, 'fa-suitcase', 'Conference rooms available', 'No conference rooms')}
                        {getBlock(location.receptionIncluded, 'fa-phone', 'Reception services provided', 'No reception services')}
                        {getBlock(location.publicAccess, 'fa-building', 'Public access available', 'No public access')}
                    </div>
                    <p className="card-text">
                        <small className="text-muted">
                            {location.mailingAddress}
                        </small>
                    </p>
                    <Link href="/locations/[id]" as={`/locations/${location.id}`}>
                        <a className="btn btn-secondary">
                            Learn more
                        </a>
                    </Link>
                </div>
            </div>                    
        ))}
    </div>;       

const getBlock = (indicator, symbol, success, failure) =>
    <div className="row">
        <i className={`fa-stack fa-lg col-sm-2 text-center ${indicator ? '' : 'text-muted'}`}>
            <i className="fa fa-circle fa-stack-2x" />
            <i className={`fa ${symbol} fa-stack-1x text-dark`} />
        </i>
        {indicator ? getCheck() : <span className="col-sm-2"></span>}
        <span className="col-sm-8 text-center">
            {indicator ? success : failure}
        </span>
    </div>;

const getCheck = () =>
    <i className="fa fa-check text-success fa-2x col-sm-2 text-center" aria-hidden="true">        
    </i>;

export const getServerSideProps = async (context) =>
{
    return {
        props: {
            locations: [...Locations]
            .orderBy(l => l.lastRenovationDate)
            .reverse()
            .take(4)
        }
    };
}

export default Index