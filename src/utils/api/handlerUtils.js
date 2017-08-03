const methodGET = R.compose(R.equals('GET'), R.propOr(null, "method"))
const methodPOST = R.compose(R.equals('POST'), R.propOr(null, "method"))
const methodPUT = R.compose(R.equals('PUT'), R.propOr(null, "method"))
const methodDELETE = R.compose(R.equals('DELETE'), R.propOr(null, "method"))

export const createResourceTest = (resource) => R.compose(resource, R.propOr(null, "resource"))
const resourceBase = createResourceTest(R.equals('/'));
const resourceHealthcheck = createResourceTest(R.startsWith('/healthcheck'));

// expect an object with resource and method keys e.g. { resource: '/', method: 'GET'g}
export const getAPI = R.allPass([methodGET, resourceBase]);
export const postAPI = R.allPass([methodPOST, resourceBase]);
export const putAPI = R.allPass([methodPUT, resourceBase]);
export const deleteAPI = R.allPass([methodDELETE, resourceBase]);