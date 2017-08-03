// Built for AWS Lambda Function Event Object

const methodGET = R.compose(R.equals('GET'), R.propOr(null, "method"))
const methodPOST = R.compose(R.equals('POST'), R.propOr(null, "method"))
const methodPUT = R.compose(R.equals('PUT'), R.propOr(null, "method"))
const methodDELETE = R.compose(R.equals('DELETE'), R.propOr(null, "method"))

const resourceBase = createResourceTest(R.equals('/'));
const resourceHealthcheck = createResourceTest(R.startsWith('/healthcheck'));

export const createResourceTest = (resource) => R.compose(resource, R.propOr(null, "resource"))

// expect an object with resource and method keys e.g. { resource: '/', method: 'GET'g}
export const getAPI = R.allPass([methodGET, resourceBase]);
export const postAPI = R.allPass([methodPOST, resourceBase]);
export const putAPI = R.allPass([methodPUT, resourceBase]);
export const deleteAPI = R.allPass([methodDELETE, resourceBase]);
export const healthcheckGetAPI = R.allPass([methodGET, resourceHealthcheck]);


// Example Usage:
// return R.cond([
// 	[getAPI, getHandler],
// 	[postAPI, createHandler],
// 	[putAPI, updateHandler],
// 	[deleteAPI, deleteHandler],
// 	[healthcheckGetAPI, healthcheckHandler],
// 	[R.T, defaultHandler]
// ])(event);