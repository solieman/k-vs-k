var React = require('react');
var createReactClass = require('create-react-class');

var DefaultLayout = require("./main");


var ActionLink = createReactClass({
  handleClick: function handleClick(e) {
    e.preventDefault();
    console.log('The link was clicked.');
  },

  render: function(props){return (
      <button onClick={this.handleClick}>Delete {this.props.data} Record</button>
    );
    }
    });

var PlayerCard = createReactClass({
    render: function(props){
        return (
                <li className="media">
                    <img className="mr-3" src='/assets/images/logo.png' alt="Generic placeholder image"></img>
                    <div className="media-body">
                        <h5 className="mt-0 mb-1">{this.props.item}</h5>
                        <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                        
                        <ActionLink data={this.props.item}></ActionLink>
                    </div>
                </li>
        );
    }
});

var LeaderboardLayout = createReactClass({
    render: function(props){
        return (
            <DefaultLayout >
                <div className="div">
                <h1>This is {this.props.username} Screen</h1>
                    <ul className="list-unstyled">
                        {this.props.scores.map((item, index) => (
                            <PlayerCard item={item}></PlayerCard>
                        ))}
                    </ul>
                </div>
            </DefaultLayout>
        );
    }
});


module.exports = LeaderboardLayout;
