class ServiceApi {
    BASE_URL = 'https://swapi.dev/api'

    request = async (method, url, data={}) => {
        const res = await fetch(`${this.BASE_URL}${url}`, {
            method,
            data
        })
        if (!res.ok) {
            const err = new Error(res.statusText);
            err.res = res;
            throw err;
        }

        return await res.json()
    }

    getPersons = async () =>  {
        const json = await this.request('GET','/people')
        return json.results
    }

}

export default ServiceApi;