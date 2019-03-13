import React, { Component } from 'react';

class Sort extends Component {
    render() {
        return (
              <div className="col-md-6">
                <div className="form-group">
                  <select className="form-control">
                    <option value={1}>A-Z</option>
                    <option value={0}>Z-A</option>
                  </select>
                </div>
              </div>  
        )
    }
}

export default Sort