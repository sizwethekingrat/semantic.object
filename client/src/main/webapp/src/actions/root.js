
export const LOAD_INITIAL_DOMAIN = 'LOAD_INITIAL_DOMAIN';

export const getDomain = () => (dispatch, getState) => {
    // Here you would normally get the data from the server. We're simulating
    // that by dispatching an async action (that you would dispatch when you
    // succesfully got the data back)

    const domain = import("../assets/test/domain");

    // You could reformat the data in the right format as well:


    dispatch({
        type: LOAD_INITIAL_DOMAIN,
        domain: domain
    });
};