const http = require('http');


const server = http.createServer( (req, res)=>{

    console.log("Log generated by Index File from Node App");
    res.write("Welcome to NODE App - New Changes");
    res.end();

}  );

server.listen(8002);