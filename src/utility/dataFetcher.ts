import axios from 'axios';

import { error } from 'Constants/errors';
import { baseURL } from 'Constants/fetchConstants';

const dataFetcher = async (
    endpoint: string,
    customConfig = {}
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
): Promise<any> => {
    const instance = axios.create({
        baseURL,
    });

    const data = instance
        .get(endpoint, customConfig)
        .then((response) => response.data)
        .catch(() => error);

    return data;
};

export default dataFetcher;
