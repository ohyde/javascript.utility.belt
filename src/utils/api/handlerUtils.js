// Built for AWS Lambda Function Event Object

const methodGET = R.propEq('method', 'GET');
const methodPOST = R.propEq('method', 'POST');
const methodPUT = R.propEq('method', 'PUT');
const methodDELETE = R.propEq('method', 'DELETE');

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