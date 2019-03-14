import React, { Component } from 'react';

class Task extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: "",
      status: 0
    }
  }
  saveTask =()=>{
    this.props.saveTask(this.state)
  }
  onChange = (event) =>{
    this.setState({
      [event.target.name] : event.target.value,
    })
  }
    render() {
        return (
            <div className="col-md-4">
            <div className="alert alert-info">
              Add task
            </div>
            <div className="form-group">
              <label>Name</label>
              <input onChange={this.onChange} name="name" type="text" className="form-control" />
            </div>
            <div className="form-group">
              <label>Status</label>
              <select onChange={this.onChange} value={this.state.status} name="status" className="form-control">
                <option value={0}>Hide</option>
                <option value={1}>Active</option>
              </select>
            </div>
            <button onClick={this.saveTask} className="btn btn-primary">Save</button>
            <button className="btn btn-warning">Cancel</button>
          </div>
        )
    }
}

export default Task