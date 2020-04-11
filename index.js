//require is the same as import or include in other languages
//you can use http as you would any other object
//it is good practice to have modules and variables having the same name (like http in this example)
//http is a built in package that lets us perform actions on the createServer
//createServer is a built-in method of the http package, accepts a function as a parameter.
//function provided to createServer is a callback function, its called when createServer function is compleated
//When this callback function is called, it will be provided the request (req) and a response (res) object in the function. we can do whatever we want with these requests and responses in the body of the function.
//server.listen is telling it which local host to run this app on.
//This console log will appear in the terminal, not in the chrome console.

const http = require('http');
const server = http.createServer((req,res) => {

  if(req.url === '/about'){
    res.end('The about page');
  }
  else if (req.url === '/contact'){
    res.end('The contact page');
  }
  else if (req.url === '/'){
    res.end('The home page');
  }
  else {
    res.writeHead(404);
    res.end('page not found');
  }
});

server.listen(3000);
