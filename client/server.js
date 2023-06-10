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
            target: `http://${process.env.NEXT_PUBLIC_HOST}:${process.env.NEXT_PUBLIC_SERVER_PORT}`,
            changeOrigin: true
        }))
    }
    server.all("*", (req, res)=>{
        return handle(req,res);
    })
    server.listen(3000, (err)=>{
        if(err) throw err;
        console.log(`Next js running via proxy. Ready on - http://${process.env.NEXT_PUBLIC_HOST}:\"${process.env.NEXT_PUBLIC_SERVER_PORT}\"`);
        console.log(process.env);
    })
}).catch(err=>{
    console.log("Proxy app error - ",err);
});