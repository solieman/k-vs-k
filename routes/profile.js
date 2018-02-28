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
    
    app.post('/profile', function(req, res){
        console.log('/profile - post');
        console.log(req.body);
        console.log(req.body, req.body['fname'] , req.body.lname);
        res.render('layouts/profile', {
            firstName: req.body.fname,
            lastName: req.body.lname,
            username: req.body.fname + ' ' +req.body.lname,
            scores: 0
        });
    });
    
};