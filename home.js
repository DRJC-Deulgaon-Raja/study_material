const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 5050;
const home = fs.readFileSync("home.html");
const study_material = fs.readFileSync("study_material.html");
const contact = fs.readFileSync("contact.html");
const department = fs.readFileSync("department.html");
const mathmatics = fs.readFileSync("mathmatics.html")
const biology = fs.readFileSync("biology.html")
const chemistry = fs.readFileSync("chemistry.html")
const physic = fs.readFileSync("physic.html")

const server = http.createServer((req, res) => {
    console.log(req.url);
    url = req.url;

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  if(url=='/'){
      res.end(home);
  }
  else if(url=='/home'){
    res.end(home);
  }
  else if(url=='/study_material'){
    res.end(study_material);
  }
  else if(url=='/contact'){
    res.end(contact);
  }
  else if(url=='/department'){
    res.end(department);
  }
  else if(url=='/mathmatics'){
    res.end(mathmatics);
  }
  else if(url=='/biology'){
    res.end(biology);
  }
  else if(url=='/physic'){
    res.end(physic);
  }
  else if(url=='/chemistry'){
    res.end(chemistry);
  }
  else{
      res.end("<h1>404 not found</h1>");
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});