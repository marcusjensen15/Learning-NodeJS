//require is the same as import or include in other languages
//you can use http as you would any other object
//it is good practice to have modules and variables having the same name (like http in this example)
//http is a built in package that lets us perform actions on the createServer
//createServer is a built-in method of the http package, accepts a function as a parameter.
//function provided to createServer is a callback function, its called when createServer function is compleated
//When this callback function is called, it will be provided the request (req) and a response (res) object in the function. we can do whatever we want with these requests and responses in the body of the function.
//server.listen is telling it which local host to run this app on.
//This console log will appear in the terminal, not in the chrome console.
// need to stop and restart server if changes are made.
// module fs is a file system module that helps us interact with files on the server.
// readFileSync reads the content of each file and returns it. content is stored in variable.
//this function recieves a request, and decides how to respond to it. Its a request handler. (req-request, res-response)
//every Node.js app is like this. there is a single request handler that responds to everything. 

const http = require('http');
const fs = require('fs');
const homePage = fs.readFileSync('index.html');
const aboutPage = fs.readFileSync('about.html');
const contactPage = fs.readFileSync('contact.html');
const notFoundPage = fs.readFileSync('notfound.html');
const server = http.createServer((req,res) => {

  if(req.url === '/about'){
    res.end(aboutPage);
  }
  else if (req.url === '/contact'){
    res.end(contactPage);
  }
  else if (req.url === '/'){
    res.end(homePage);
  }
  else {
    res.writeHead(404);
    res.end(notFoundPage);
  }
});

server.listen(3000);
