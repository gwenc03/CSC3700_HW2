const express = require("express");
const app = express();
app.set( 'view engine', 'pug'); // set engine
app.set( 'views', 'views'); // set views
// const adminRoutes = require('./routes/admin')
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
    // let pt = "Personality Perfect"
    // let subTitle = "Interest Survey"
    // let questions =[
    //     { id: 'q1', q: "Are you naturally observant?", cat: 0},
    //     { id: 'q2', q: "Do you like to work puzzles?", cat: 1},
    //     { id: 'q3', q: "Is Authenticity important to you?", cat: 2},
    //     { id: 'q4', q: "Do you use personal values to make decisions?", cat: 2},
    //     { id: 'q5', q: "Do you find it easy to trust your gut instinct?", cat: 0},
    //     { id: 'q6', q: "Do you know how things work?", cat: 1},
    //     { id: 'q7', q: "Are you a good judge of character?", cat: 0},
    //     { id: 'q8', q: "Do you think you are naturally Curious?", cat: 1},
    //     { id: 'q9', q: "Are you a good judge of character?", cat: 2}
    // ]
    // let results = [
    //     { catId : 0, cat : "Intuitive",  desc : "Intuitives pay attention to their intuition, instinct, and ability to draw meaning from seemingly disconnected facts. They are good at reading between the lines and recognizing connections between random groups of facts. People with this preference are abstract and theoretical."},
    //     { catId : 1, cat : "Analytical", desc : "The Analytical Personality Type People who have the Analytical personality type usually appear to be very intelligent, nerdy or systematical. They normally have little to no emotion and make decisions slowly and with much second thought."},
    //     { catId: 2, cat : "Feeler", desc :  "Feelers tend to be sensitive to what is important to others. They make decisions on what matters to them and their system of values and how the outcome affects the connections between people, often expressing concern for others."}
    // ]
    // const MAX_PTS = 6;


    res.render('notFound',{
        from: 'notFound'
    })

    // res.render('survey',{
    //     // title: pt,
    //     // pageTitle: subTitle,
    //     // questions: questions,
    //     from:'survey'
    // })
    // res.render('surveyResults',{
    //     // title: pt,
    //     // pageTitle: subTitle,
    //     // questions: results,
    //     // maxPts: MAX_PTS,
    //     from:'survey'
    // })
})

let port = 3003;
const server = http.createServer(app);
server.listen( port );
console.log( `Listening on http://localhost:${port}`);
