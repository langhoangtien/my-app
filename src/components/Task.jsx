import React, { Component } from 'react';

class Task extends Component {
    render() {
        return (
            <div className="col-md-4">
            <div className="alert alert-info">
              Add task
            </div>
            <div className="form-group">
              <label>Name</label>
              <input name="name" type="text" className="form-control" />
            </div>
            <div className="form-group">
              <label>Status</label>
              <select name="status" className="form-control">
                <option value={0}>Hide</option>
                <option value={1}>Active</option>
              </select>
            </div>
            <button onClick={this.props.saveTask} className="btn btn-primary">Save</button>
            <button className="btn btn-warning">Cancel</button>
          </div>
        )
    }
}

export default Task