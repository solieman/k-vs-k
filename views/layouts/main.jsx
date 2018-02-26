var React = require('react');
var createReactClass = require('create-react-class');


var DefaultLayout = createReactClass({
  render: function(){
    return (
        
        <html lang="en">
            <head>
                <meta charSet="utf-8"/>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossOrigin="anonymous"/>
                <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossOrigin="anonymous"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossOrigin="anonymous"></script>
                <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossOrigin="anonymous"></script>

            </head>
            <body>
                <div className="btn-info">
                    <h1>Stay with me... Thanks Mr.Div!</h1>
                    <a href="/"><button className="btn btn-success">Home</button></a>
                    <a href="/leaderboard"><button className="btn btn-success">LeaderBoard</button></a>
                    <a href="/"><button className="btn btn-success">Schedule</button></a>
                    <a href="/about"><button className="btn btn-success">About</button></a>
                    <a href="/"><button className="btn btn-success">Contact Us</button></a>
                </div>
                
                {this.props.children}
            </body>
        </html>
      );
  }
});


module.exports = DefaultLayout;
