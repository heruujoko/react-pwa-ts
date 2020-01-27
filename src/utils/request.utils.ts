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

export const get = async (url: string, headers?: any): Promise<any> => {
    const request = new Request(url, {
        headers,
        method: 'GET'
    });
    return requestCaller(request);
};

export const post = async (url: string, body: any, headers?: any): Promise<any> => {
    const request = new Request(url, {
        headers,
        body,
        method: 'POST'
    });
    return requestCaller(request);
};

export const put = async (url: string, body?: any, headers?: any): Promise<any> => {
    const request = new Request(url, {
        headers,
        body,
        method: 'PUT'
    });
    return requestCaller(request);
};

export const del = async (url: string, body?: any, headers?: any): Promise<any> => {
    const request = new Request(url, {
        headers,
        body,
        method: 'DELETE'
    });
    return requestCaller(request);
};

export default {
    get,
    post,
    put,
    del
}
