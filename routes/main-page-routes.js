module.exports = function(app){
    
    app.get('/', function (req, res, next) {
        res.render('home', {
            showTitle: true,
     
            // Override `foo` helper only for this rendering. 
            helpers: {
                title: function () { return 'Hello Man!'; }
            }
        });
    });
    
    app.get('/about', function(req, res){
       res.render('layouts/about', {
            showTitle: true,
     
            // Override `foo` helper only for this rendering. 
            helpers: {
                title: function () { return 'Login Man!'; }
            }
        });
    });
    
}