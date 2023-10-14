const express = require('express');
const router = express.Router();
const path = require('path');

let questions =[];
let results = [];


router.get(  '/home', (req, res, next) => {
    console.log("---------------------------")
    //res.sendFile( ( path.join(__dirname, '../views', 'showProducts.html')));
    res.render( 'survey', {
    title:"Personality Perfect",
    pageTitle: "Interest Survey",
    questions: questions,
    from: 'survey'
    })
});

router.post(  '/home', (req, res, next) => {
    // console.log( req );
    console.log("----flag")
    let t = req.body.q;
    questions.push( {questions:t})
    res.redirect('/home')
    // res.send(`Made it to post title:${t}`);
});

router.get(  '/homeResults', (req, res, next) => {
    console.log("---------------------------")
    //res.sendFile( ( path.join(__dirname, '../views', 'showProducts.html')));
    res.render( 'surveyResults', {
    pageTitle: "Interest Survey",
    results: results,
    from: 'survey'
    })
});

router.post(  '/homeResults', (req, res, next) => {
    // console.log( req );
    console.log("----flag")
    let d = req.body.desc;
    results.push( {desc:d})
    res.redirect('/homeResults')
    // res.send(`Made it to post title:${t}`);
});

router.get(  '/about', (req, res, next) => {
    console.log("-----------about------------")
    //res.sendFile( ( path.join(__dirname, '../views', 'showProducts.html')));
    res.render( 'about', {
        from: 'about'
    })
});

router.get(  '/blah', (req, res, next) => {
    console.log("-----------blah------------")
    //res.sendFile( ( path.join(__dirname, '../views', 'showProducts.html')));
    res.render( 'notFound', {
        from: 'notFound'
    })
});

module.exports = router;
