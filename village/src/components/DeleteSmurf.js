import React, { Component } from 'react';
import axios from 'axios';

class DeleteSmurf extends Component {
    constructor(props) {
      super(props);
      this.state = {
        name: '',
        age: '',
        height: ''
      };
    }

    handleInputChange = e => {
        this.setState({ [e.target.name]: e.target.value });
      };

      deleteSmurf = id => {
        axios
          .delete(`http://localhost:3333/smurfs/${id}`)
          .then(res => this.setState({ smurfs: res.data }))
          .catch(err => console.log(err));
    }
  

render() {
    return (
      <div className="SmurfForm">
        <form onSubmit={this.deleteSmurf}>
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
          />
          
          <button type="submit">Delete from the village</button>
        </form>
      </div>
    );
  }
}


export default DeleteSmurf;