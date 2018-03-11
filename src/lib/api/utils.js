
/**
 *
 * @param {*} param0
 */
export const handleResponseSuccess = ({ data }) => data;

/**
 *
 * @param {*} error
 */
export const handleResponseErrors = error =>
    Promise.reject({
        status: error.response ? error.response.status : 500,
        statusText: error.response ? error.response.statusText : 'Server Error',
    });

/**
 * @description modify request config each time
 *
 * @param {*} config
 */
export const handleRequestConfig = config => ({
    ...config,
    headers: {
        ...config.headers,
    },
});
