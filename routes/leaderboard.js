module.exports = function(app){
    var GlobaleScores = ["A","B","C","D"];
    
    app.get('/leaderboard', function(req, res){
        console.log('/leaderboard');
        res.render('layouts/leaderboard', {
            showTitle: true,
            global: true,
            username: "Global",
            scores:GlobaleScores
        });
    });
    
    app.get('/leaderboard/:username', function(req, res){
        console.log('/leaderboard/user');
        
        res.render('layouts/leaderboard', {
            showTitle: true,
            username: req.params.username,
            scores: [1,2,3,4,5,6,7]
        });
    });
};