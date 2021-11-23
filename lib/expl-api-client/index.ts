import axios from "axios";

class ApiClient {
    private _client = axios.create();

    constructor() {
        this._client.defaults.baseURL = "http://localhost:3333"
    }

    async getBase() {
        try {
            const {data} = await this._client.get<User>("/")
            return data;
        } catch(e) {
            console.error(e);
            throw e;
        }
    }
}

const apiClient = new ApiClient()

export {apiClient}
