import { React, Component } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';


class CovidDisplay extends Component {

    render() {
        const COVID_BY_COUNTRY = gql`
        {
            covidDataByCountry {
                confirmed,
                location
            }
        }
        `;
        const { loading, error, data} = useQuery(COVID_BY_COUNTRY);
    
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Sorry an error has occurred </p>;
    
        return data.map(({location, confirmed}) => (
            <div>
                <p>
                    {location} has {confirmed} number of 
                    confirmed cases of COVID-19.
                </p>
            </div>
        ));
    }
    
}

export default CovidDisplay;