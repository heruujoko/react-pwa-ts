import RequestUtils from "../utils/request.utils";
const BASE_URL = 'https://jsonplaceholder.typicode.com';

const instance = new RequestUtils(BASE_URL, (header: any) => {
    header['Authorization'] = 'my-secure-token';
});

export default instance;
