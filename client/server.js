const express = require('express');
const next = require('next');
const { createProxyMiddleware } = require("http-proxy-middleware");

const dev = process.env.NODE_ENV !== 'production';

const app = next({dev});

const handle = app.getRequestHandler();

app.prepare().then(()=>{
    const server = express();
    // Apply proxy in dev mode
    if(dev){
        server.use('/api', createProxyMiddleware({
            target: 'http://localhost:8000',
            changeOrigin: true
        }))
    }
    server.all("*", (req, res)=>{
        return handle(req,res);
    })
    server.listen(3000, (err)=>{
        if(err) throw err;
        console.log("Next js running via proxy. Ready on - http://localhost:\"8000\"");
        console.log(process.env);
    })
}).catch(err=>{
    console.log("Proxy app error - ",err);
});