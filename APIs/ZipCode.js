class ZipCode {

    constructor(request){
this.request = request ; 

    }

    async GetMethodAPIs (countrycode , PostalCode , TCNum)
    {
    const GetMethod = await this.request.get(`/${countrycode}/${PostalCode}`);
    const Response = await GetMethod.json();
    console.log(`Status Code is of ${TCNum} : ` + GetMethod.status());
    }

}

module.exports = {ZipCode};