const oColors = require("color-name");

exports.getNamedColorRgbValuesHandler = async (event) => {
  if (event.httpMethod !== "GET") {
    throw new Error(
      `getMethod only accept GET method, you tried: ${event.httpMethod}`
    );
  }

  // All log statements are written to CloudWatch
  console.info("received:", event);

  const sColorName = event.pathParameters.name;
  let response = null;
  if (oColors[sColorName]) {
    response = {
      statusCode: 200,
      body: JSON.stringify(oColors[sColorName]),
    };
  } else {
    response = {
      statusCode: 400,
      body: JSON.stringify(`${sColorName} is not a named color.`),
    };
  }

  // All log statements are written to CloudWatch
  console.info(
    `response from: ${event.path} statusCode: ${response.statusCode} body: ${response.body}`
  );
  return response;
};
