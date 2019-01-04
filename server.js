const request = require('request');
const axios = require('axios');

axios.get('https://interview.adpeai.com/api/v1/get-task') //Axios is sending a GET request to the server.
  .then(response => {
    console.log(response.data.id); //The requested data is being returned in the forms of an ID, Operation, Left, and Right
    console.log(response.data.operation);
    console.log(response.data.left);
    console.log(response.data.right);
  })
  .catch(error => {
    console.log(error); //Error handler in case the GET request is not successful.
  });

  