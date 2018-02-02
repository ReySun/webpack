import * as React from 'react';
import { renderToString, renderToStaticMarkup } from 'react-dom/server'
import * as path from 'path';

import * as express from 'express';
const app = express();
const port: number = 3433;

import { App } from '../src/App';
import { StaticRouter as Router } from 'react-router-dom';
import html_template from './template';

app.get(/\/all|\/active|\/completed/, function(req, res){
    const context: any = {}

    var html: any = renderToStaticMarkup(
        <Router location={req.url} context={context}>
            <App />
        </Router>
    )

    if (context.url) {
        res.writeHead(302, {
            Location: context.url
        })
        res.end()

    } else {
        res.write(html_template(html))
        res.end()
    }
})
app.use(express.static(path.resolve(__dirname + '/../build')))
app.listen(port,function(){
    console.log('server is listening on http://localhost:' + port)
})