var React = require('react');
var createReactClass = require('create-react-class');

var DefaultLayout = require("./layouts/main");


var AboutLayout = createReactClass({
    getDefaultProps: function() {
        return {
          name: 'About'
        };
    },
      
    getInitialState: function() {
        return {
            count: this.props.initialCount,
            message: 'Hello!'
        };
    },
    
    handleClick: function() {
        this.props.initialCount++;
        alert(this.state.message);
    },
    
    render: function(props){
        return (
            <DefaultLayout >
                <div className="div">
                <h1>This is {this.props.username} Screen</h1>
                    <ul className="list-unstyled">
                        It Is About!
                    </ul>
                </div>
                <button onClick={this.handleClick}>
                    Say hello
                </button>
            </DefaultLayout>
        );
    }
});


module.exports = AboutLayout;
