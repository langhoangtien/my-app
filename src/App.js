import React, { Component } from 'react';

class App extends Component {
	render() {
		return (
			<div className="container">
			<h3 className="text-center">Task managemant</h3>
			<div className="row">
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
				<button className="btn btn-primary">Save</button>
				<button className="btn btn-warning">Cancel</button>
			  </div>	
			  <div className="col-md-8">
				<button className="btn btn-primary">
				  Add task
				</button>
				<div className="row">
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
				  <div className="col-md-6">
					<div className="form-group">
					  <select className="form-control">
						<option value={1}>A-Z</option>
						<option value={0}>Z-A</option>
					  </select>
					</div>
				  </div>
				</div>
				<div className="row">
				  <div className="col-md-12">	
					<table className="table">
					  <thead>
						<tr>
						  <th scope="col">STT</th>
						  <th scope="col">Name</th>
						  <th scope="col">Status</th>
						  <th scope="col">Action</th>
						</tr>
					  </thead>
					  <tbody>
						<tr>
						  <th scope="row">1</th>
						  <td>Mark</td>
						  <td>Otto</td>
						  <td><button className="btn btn-primary">Edit</button><button className="btn btn-danger">Delete</button></td>
						</tr>
						<tr>
						  <th scope="row">2</th>
						  <td>Jacob</td>
						  <td>Thornton</td>
						  <td><button className="btn btn-primary">Edit</button><button className="btn btn-danger">Delete</button></td>
						</tr>
						<tr>
						  <th scope="row">3</th>
						  <td>Larry</td>
						  <td>the Bird</td>
						  <td><button className="btn btn-primary">Edit</button><button className="btn btn-danger">Delete</button></td>
						</tr>
					  </tbody>
					</table>
				  </div>
				</div>
			  </div>
			</div>
		  </div>
		)
	}
}


 export default App;