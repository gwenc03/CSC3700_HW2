const express = require("express");
const app = express();
app.set( 'view engine', 'pug'); // set engine
app.set( 'views', 'views'); // set views
const adminRoutes = require('./routes/admin')
const surveyRoutes = require("./routes/survey");

const bodyParser = require("body-parser");
const path = require("path");
const http = require("http");

app.use( bodyParser.urlencoded({extended: false})); // middleware for body
app.use( express.static( path.join(__dirname, 'public')));
// app.use( adminRoutes.routes);
app.use( surveyRoutes);

app.get('*', function(req, res){
    // res.status(404).send("<h2> Request not found </h2>")
    //;
    let pt = "Personality Perfect"
    res.render('survey',{
        title: pt
    })

    // res.render( 'survey', {
    //     title:pt,
    //     pageTitle: "Interest Survey",
    //     questions: questions,
    //     from: 'survey'
    // })
    // res.render( 'surveyResults', {
    //     pageTitle: "Interest Survey",
    //     results: results,
    //     from: 'survey'
    // })
})

let port = 3003;
const server = http.createServer(app);
server.listen( port );
console.log( `Listening on http://localhost:${port}`);
