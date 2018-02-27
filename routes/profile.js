module.exports = function(app){
    
    app.get('/profile', function(req, res){
        console.log('/profile');
        console.log(req.body);
        res.render('layouts/profile', {
            showTitle: true,
            global: true,
            username: false,
            scores: 100
        });
    });
    
    app.get('/profile/:id', function(req, res){
        console.log('/profile/:id');
        console.log(req.body);
        res.render('layouts/profile', {
            showTitle: true,
            global: true,
            username: "Player: "+ req.params.id,
            scores: 100
        });
    });
};