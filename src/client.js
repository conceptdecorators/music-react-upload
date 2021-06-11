import * as contentful from "contentful";
// console.log(process.env.SENDGRID_API_KEY);

export const client = contentful.createClient({
  space: process.env.REACT_APP_SPACE_ID,
  accessToken: process.env.REACT_APP_SPACE_TOKEN,
});

// console.log(process.env);
