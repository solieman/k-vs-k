module.exports = function(app){
    
    app.get('/search', function(req, res){
        console.log('/search');
        
        res.render('layouts/search/search', {
            showTitle: true,
            global: true,
            username: "Player: "+ req.params.id,
            scores: 100
        });
    });
    
    app.get('/search/:id', function(req, res, next){
        console.log('/search:id');
        
        res.redirect('../profile');
        
        // res.render('layouts/profile', {
        //     showTitle: true,
        //     global: true,
        //     username: "Player: "+ req.params.id,
        //     scores: 100
        // });
    });
};