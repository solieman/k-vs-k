var React = require('react');
var DefaultLayout = require("../main");

class ProfileSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 'coconut'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    this.setState({value: event.target.value});
    console.log(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.history.push('/about');
    alert('Your favorite flavor is: ' + this);
  }
  
  handleClick(event) {
      console.log('handleClick');
      
    event.preventDefault();
    this.props.history.push('/about');
    alert('Your favorite flavor is: ' + this);
  }

  render() {
    return (
        <DefaultLayout>
            <form action="./profile" method="post">
                First name: <input type="text" name="fname"/>
                Last name: <input type="text" name="lname"/>
                <input type="submit" value="Submit" />
            </form>
        </DefaultLayout>
    );
  }
}

module.exports = ProfileSearch;