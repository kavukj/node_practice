const cluster = require('cluster');
const os = require('os');
const express = require('express');

//We need cpu length to create max number of workers
const cpuLength = os.cpus().length;

const app = express();
 
//If current cluster is the primary cluster, then we need to create workers out of that
if(cluster.isPrimary){
    for(var i = 0; i<cpuLength ; i++) {
        //Create copy of servers
        cluster.fork()
    }
}
else{ //else we need to start the server, that means start the worker that we created.
    app.get('/', (req, res) => {
        return res.send(`Process running on ${process.pid}`)
    })

    app.listen('4000', ()=> {
        console.log('SERVER CONNECTED')
    })
}   