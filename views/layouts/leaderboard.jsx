var React = require('react');
var createReactClass = require('create-react-class');

var DefaultLayout = require("./main");
var PlayerCard = require("./components/player_card");

var LeaderboardLayout = createReactClass({
    render: function(props){
        return (
            <DefaultLayout >
                <div className="div">
                <h1>This is {this.props.username} Screen</h1>
                    <ul className="list-unstyled">
                        {this.props.scores.map((item, index) => (
                            <PlayerCard item={item} key={index}></PlayerCard>
                        ))}
                    </ul>
                </div>
            </DefaultLayout>
        );
    }
});


module.exports = LeaderboardLayout;
