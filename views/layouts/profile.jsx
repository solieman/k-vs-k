var React = require('react');
var createReactClass = require('create-react-class');

var DefaultLayout = require("./main");

var ProfileLayout = createReactClass({
    render: function(props){
        return (
            <DefaultLayout >
                <div className="div">
                    <h1>This is {this.props.username} Profile</h1>
                    <h4>Score: {this.props.scores}</h4>
                    
                </div>
            </DefaultLayout>
        );
    }
});


module.exports = ProfileLayout;
