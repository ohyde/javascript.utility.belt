const methodGET = R.compose(R.equals('GET'), R.propOr(null, "method"))
const methodPOST = R.compose(R.equals('POST'), R.propOr(null, "method"))
const methodPUT = R.compose(R.equals('PUT'), R.propOr(null, "method"))
const methodDELETE = R.compose(R.equals('DELETE'), R.propOr(null, "method"))

const resourceBase = R.compose(R.equals('/'), R.propOr(null, "resource"))

// expect an object with resource and method keys e.g. { resource: '/', method: 'GET'}
export const getAPI = R.allPass([methodGET, resourceBase]);
export const postAPI = R.allPass([methodPOST, resourceBase]);
export const putAPI = R.allPass([methodPUT, resourceBase]);
export const deleteAPI = R.allPass([methodDELETE, resourceBase]);