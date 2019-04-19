import LocalServer from "../utils/LocalServer"
export const _askAxios = async function ({url, methods = "get", data = {}}) {
    return new LocalServer(url).getLocal();
    // return await axios({
    //         method: methods,
    //         url: url,
    //         data: data,
    //         timeout: 60000,
    //         responseType: 'json'
    //     }
    // )
};
