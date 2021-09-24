var express = require('express');
var router = express.Router();

//for reading files
const fs = require('fs')
const path = require('path');

//games
var games = require('../games/games');

/* returns game requested in url  */
router.get('/:id', (req, res) => {

    const game = req.params.id

    //Output the book to console for debugging
    console.log("Sending game " + game + "...");

    //get array game
    const data = games.getGame(game)

    res.send(data);

})

module.exports = router;