function handleJSONResponse(response) {
  return response.json()
    .then((json) => {
      if (response.ok) {
        return json;
      }
      return Promise.reject(Object.assign({}, json, {
        status: response.status,
        statusText: response.statusText,
      }));
    });
}

function handleResponse(response) {
  const contentType = response.headers.get('content-type');
  if (contentType.includes('application/json')) {
    return handleJSONResponse(response);
  }
  throw new Error(`Sorry, content-type ${contentType} not supported`);
}

export default function fetchGet(url, paramObj, func, funcError) {
  let paramArr = [];
  Object.keys(paramObj).forEach(function (key) {
    paramArr.push(`${key}=${paramObj[key]}`);
  });

  fetch(`${url}?${paramArr.join('&')}`, {
    method: 'get',
  }).then(handleResponse)
    .then((data) => {
      func(data);
    })
    .catch((error) => {
      funcError(error);
    });
}