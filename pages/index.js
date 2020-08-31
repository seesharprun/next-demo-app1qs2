require("linqjs")
import Locations from "./data.json"
import Layout from "../components/layout";
import Jumbotron from "../components/jumbotron";

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
        {locations.map((l) => (
            <div className="card text-white bg-dark" key={l.id}>
                <div className="card-body">
                    <h5 className="card-title text-center">
                        {l.name}
                    </h5>
                    <div className="card-text my-2">
                        {getBlock(l.parkingIncluded, 'fa-car', 'Parking included', 'No parking available')}                            
                        {getBlock(l.conferenceRoomsIncluded, 'fa-suitcase', 'Conference rooms available', 'No conference rooms')}
                        {getBlock(l.receptionIncluded, 'fa-phone', 'Reception services provided', 'No reception services')}
                        {getBlock(l.publicAccess, 'fa-building', 'Public access available', 'No public access')}
                    </div>
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
        {indicator ? (
            <i class="fa fa-check text-success fa-2x col-sm-2 text-center" aria-hidden="true" />
        ) : (
            <span class="col-sm-2"></span> 
        )}
        <span class="col-sm-8 text-center">
            {indicator ? success : failure}
        </span>
    </div>;

export const getStaticProps = async (context) =>
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