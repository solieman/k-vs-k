var React = require('react');
var createReactClass = require('create-react-class');

var DeleteRecordBtn = createReactClass({
  handleClick: function handleClick(e) {
    e.preventDefault();
    console.log('The link was clicked.');
  },

  render: function(props){return (
          <button className="btn btn-danger" onClick={() => this.props.data = 'new'}>Delete {this.props.data} Record</button>
    );
  }
});


var ShowProfileBtn = createReactClass({
    getInitialState: function() {
        return {message: 'Hello!'};
    },
    handleClick: function handleClick(e) {
        alert(this.state.message);
    },
    render: function(props){return (
            <button className="btn btn-primary" onClick={(e) => this.handleClick(e)}>Show {this.props.data} Profile</button>
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
                        <div className="row btn-group">
                            <DeleteRecordBtn data={this.props.item}></DeleteRecordBtn>
                            <ShowProfileBtn data={this.props.item}></ShowProfileBtn>
                        </div>
                    </div>
                </li>
        );
    }
});

module.exports = PlayerCard;