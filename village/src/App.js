import React, { Component } from 'react';
//initial commit
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }

  componentDidMount() {
    this.getSmurfs();
  }
  getSmurfs = () => {
    axios
      .get('http://localhost:3333/smurfs')
      .then(res => this.setState({smurfs: res.data} ))
      .catch(err => console.log(err))
  }
  
  deleteSmurf = id => {
    axios
      .delete(`http://localhost:3333/smurfs/${id}`)
      .then(res => this.setState({ smurfs: res.data }))
      .catch(err => console.log(err));
}

updateSmurf = (id, info) => {
  axios
    .put(`http://localhost:3333/smurfs/${id}`, info)
    .then(res => this.setState({ smurfs: res.data }))
    .catch(err => console.log(err));
}

  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="App">
        <SmurfForm />
        <Smurfs smurfs={this.state.smurfs} />
      </div>
    );
  }
}

export default App;
