const requestCaller = (req: Request): Promise<any> => {
    return fetch(req).then(async (resp) => {
        if (resp.status === 200 || resp.status === 201) {
            const json = await resp.json();
            return Promise.resolve(json);
        }
    }).catch((err) => {
        return Promise.reject(err);
    });
};

const get = async (url: string, headers?: any): Promise<any> => {
    const request = new Request(url, {
        headers,
        method: 'GET'
    });
    return requestCaller(request);
};

const post = async (url: string, body: any, headers?: any): Promise<any> => {
    const request = new Request(url, {
        headers,
        body,
        method: 'POST'
    });
    return requestCaller(request);
};

const put = async (url: string, body?: any, headers?: any): Promise<any> => {
    const request = new Request(url, {
        headers,
        body,
        method: 'PUT'
    });
    return requestCaller(request);
};

const del = async (url: string, body?: any, headers?: any): Promise<any> => {
    const request = new Request(url, {
        headers,
        body,
        method: 'DELETE'
    });
    return requestCaller(request);
};

export default class RequestUtils {
    baseUrl: string = '';
    headers: any = {};

    constructor(baseUrl: string, interceptor: Function) {
        this.baseUrl = baseUrl;
        interceptor(this.headers);
    }

    get = (url: string, headers?: any) => {
        let headerConfig = Object.assign({}, headers, this.headers);
        return get(this.baseUrl + url, headerConfig);
    };

    post = (url: string, body: any, headers?: any) => {
        let headerConfig = Object.assign({}, headers, this.headers);
        return post(this.baseUrl + url, body, headerConfig);
    };

    put = (url: string, body: any, headers?: any) => {
        let headerConfig = Object.assign({}, headers, this.headers);
        return put(this.baseUrl + url, body, headerConfig);
    };

    delete = (url: string, body: any, headers?: any) => {
        let headerConfig = Object.assign({}, headers, this.headers);
        return del(this.baseUrl + url, body, headerConfig);
    }
}
