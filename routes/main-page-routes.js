module.exports = function(app){
    
    app.get('/', function (req, res, next) {
        console.log('/');
        res.render('index', {
            showTitle: true,
     
            // Override `foo` helper only for this rendering. 
            title:'Hello Man!'
        });
    });
    
    app.get('/about', function(req, res){
        console.log('/about');
        res.render('about', {
            showTitle: true,
        
            // Override `foo` helper only for this rendering. 
            title:'About!'
        });
    });
    
    app.get('/admin', function(req, res){
        console.log('/admin');
        res.render('about', {
            showTitle: true,
        
            // Override `foo` helper only for this rendering. 
            title: 'Admin!'
            
        });
    });
    
    app.get('/scedule', function(req, res){
        console.log('/scedule');
        res.render('scedule', {
            showTitle: true,
        
            // Override `foo` helper only for this rendering. 
                title: 'Schedule!'
        });
    });
    
    // app.get('*', function(req, res){
    //     console.log('404');
    //     res.send("This is not the page that you are looking for!!!");
    // });
    
};