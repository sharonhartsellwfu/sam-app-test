exports.buildResponse = (iStatusCode, mBody) => {
  const response = {
    statusCode: iStatusCode,
    body: JSON.stringify(mBody),
  };
  return response;
};
