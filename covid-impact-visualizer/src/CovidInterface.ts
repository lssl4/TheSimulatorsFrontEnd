interface CovidDataInterface {
    confirmedCases : number;
    recoveredCases : number;
    activeCases : number;
    deaths : number;
    city? : string;
    state? : string;
    country : string;
    latitude: number;
    longitude : number;
    date : number;
}

export default CovidDataInterface