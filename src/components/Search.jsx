import React, { Component } from 'react';

class Search extends Component {
    render() {
        return (
              <div className="col-md-6">
                <div className="form-row">
                  <div className="col">
                    <input type="text" className="form-control" placeholder="search" />
                  </div>
                  <div className="col">
                    <input type="button" className="form-control btn btn-primary" defaultValue="Search" />
                  </div>
                </div>
              </div> 

        )
    }
}

export default Search