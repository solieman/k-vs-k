var React = require('react');
var createReactClass = require('create-react-class');

var DefaultLayout = require("./layouts/main");

var IndexLayout = createReactClass({
  render: function(){
    return (
      <DefaultLayout >
        <div>
            <h1>Now we are using React</h1>
            <a href="./leaderboard">
              <button>LeaderBoard</button>
            </a>
        </div>
      </DefaultLayout>
      );
  }
});


module.exports = IndexLayout;
