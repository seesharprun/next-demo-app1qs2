require("linqjs")
import Layout from "../../components/layout";
import Locations from "../data.json"

const Index = ({ location }) =>
    <Layout>
        <section className="container text-white bg-dark py-3">
            <div className="row">
                <img src={'/img/' + location.image} className="col-sm-6" alt={location.name} />
                {getDetails(location)}
            </div>
            {getTable(location)}
        </section>
    </Layout>;

const getTable = (location) =>
    <table className="table table-bordered table-sm table-striped bg-secondary text-dark">
        <thead>
            <tr>
                <th scope="col">
                    Room
                </th>
                <th scope="col">
                    Monthly Rate
                </th>
                <th scope="col">
                    Seats
                </th>
                <th scope="col">
                    Private Washroom
                </th>
                <th scope="col">
                    Phone
                </th>
                <th scope="col">
                    Windows
                </th>
                <th scope="col">
                    Corner
                </th>
            </tr>
        </thead>
        <tbody>            
            {location.rooms.map((room) => (
                <tr>
                    <th scope="row">
                        {room.description}
                    </th>
                    <td>
                        {Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(room.monthlyRate)}
                    </td>
                    <td>
                        {room.seats}
                    </td>
                    <td>
                        {room.privateFacilities ? getCheck() : ( <></> )}
                    </td>
                    <td>
                        {room.phoneIncluded ? getCheck() : ( <></> )}
                    </td>
                    <td>
                        {room.windows ? getCheck() : ( <></> )}
                    </td>
                    <td>
                        {room.corner ? getCheck() : ( <></> )}
                    </td>
                </tr>
            ))}
        </tbody>
    </table>;

const getDetails = (location) =>
    <div className="col-sm-6">
        <h4 className="display-4 text-white">
            {location.name}
        </h4>
        <p className="text-muted">
            {location.mailingAddress}
        </p>
        <div className="my-2">
            {getBlock(location.parkingIncluded, 'fa-car', 'Parking included', 'No parking available')}                            
            {getBlock(location.conferenceRoomsIncluded, 'fa-suitcase', 'Conference rooms available', 'No conference rooms')}
            {getBlock(location.receptionIncluded, 'fa-phone', 'Reception services provided', 'No reception services')}
            {getBlock(location.publicAccess, 'fa-building', 'Public access available', 'No public access')}
        </div>
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
    const { id } = context.params;
    return {
        props: {
            location: [...Locations]
            .where(l => l.id === id)
            .first()
        }
    };
}

export default Index