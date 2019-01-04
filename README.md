# jpatruno-Interview-Test
Test for JR MERN Developer Position

The goal of this application is to successfully create a Javascript(Node.js) application that is capable of making 
both GET and POST requests to and from a test server. The first step was to install the necessary dependencies. These included
Express.js, Node.js, Axios, and Request. Upon entering the command 'npm start', the application begins its operations by sending an Axios
GET request to the server for the necessary data. This includes the problem ID, the mathematical operation that needs to be conducted on the two values given, 
and finally the two integers making up the problem that need to be manipulated in the given mathematical operation. The data is then returned and can be viewed
in the Terminal. Upon calculating the correct answer to the problem, I then instruct my application to send an Axios POST request to the server. This includes
the ID of the problem that was given to me along with the correct answer. The data is posted and then a value of 200, 400, or 500 is successfully
returned to me in the Terminal to determine a successful post, an incorrect or undefined post, or the ID cannot be found. 
