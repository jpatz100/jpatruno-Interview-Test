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

  axios.post('https://interview.adpeai.com/api/v1/submit-task', {  //Axios is Posting data to the server via POST request.
    id: '665ac57c-9e00-4142-b5d6-645f9bdb3d5a',  //The ID received from the GET request
    result: 2526947609486846,    //The answer to the problem that was given. 
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });