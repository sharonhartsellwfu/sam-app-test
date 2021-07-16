const oCuteAnimals = require("cute-animals");

const doodad = require("/opt/nodejs/helpers");
console.log(doodad);

const oDate = new Date();
const oDaysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

exports.getDayOfWeekHandler = async (event) => {
  if (event.httpMethod !== "GET") {
    throw new Error(
      `getMethod only accept GET method, you tried: ${event.httpMethod}`
    );
  }

  console.info("received:", event);

  const iDay = oDate.getDay();
  const sDay = oDaysOfWeek[iDay];
  const sAnimal = oCuteAnimals();

  const response = {
    statusCode: 200,
    body: JSON.stringify(`Today is ${sDay}. Happy ${sAnimal} Day!`),
  };

  // All log statements are written to CloudWatch
  console.info(
    `response from: ${event.path} statusCode: ${response.statusCode} body: ${response.body}`
  );
  return response;
};
