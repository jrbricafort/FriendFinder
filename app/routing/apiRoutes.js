var friends = require("../data/friends");

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function (req, res) {
        var user = req.body;

        var userScores = [];
        var score = 0
        for (var i = 0; i < user.scores.length; i++) {
            score = parseInt(user.scores[i]);
            userScores.push(score)
        }
        // console.log(userScores)

        var bestMatch = 0;
        var variance = 48;
        var allDifferences = [];

        for (var i = 0; i < friends.length; i++) {
            var difference = 0;
            console.log(userScores.length);
            console.log(friends[i].scores.length);
            for (var j = 0; j < friends[i].scores.length; j++) {
                difference += Math.abs(userScores[j] - friends[i].scores[j]);
                // console.log(friends[i].scores[j])
            }
            console.log("Look at me " + difference)
            allDifferences.push(difference);
        }

        console.log(allDifferences)

        for (var k = 0; k < allDifferences.length; k++) {
            if (allDifferences[k] < variance) {
                variance = allDifferences[k];
            }
        }

        // var indexPosition = 0
        for (var l = 0; l < allDifferences.length; l++) {
            if (variance === allDifferences[l]) {
                indexPosition = l;
            }
        }
        console.log("index position " + indexPosition)

        console.log(variance)

        friends.push(user);

        res.json(friends[indexPosition]);
    });
};