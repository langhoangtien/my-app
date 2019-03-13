import React, { Component } from 'react';
import Task from './components/Task.jsx';
import List from './components/List.jsx';

class App extends Component {
	constructor(props){
		super(props)
		this.state = {
			taskHide: true,
		}
	}

	toggleTask = () => {
		this.setState({taskHide: !this.state.taskHide})
	}
	saveTask(state){
		alert(state)
	}
	deleteTask(id){

			console.log(id)
		// let newTask = this.state.tasks.map((task)=>{
		// 	return task
		// })
		// this.setState({tasks: newTask })
	}
	render() {
		return (
			<div className="container">
			<h3 className="text-center">Task managemant</h3>
			<div className="row">
			{this.state.taskHide ? "": <Task saveTask={(state)=>{this.saveTask(state)}} />  }	
				<List deleteTask={(id)=>{this.deleteTask(id)}} tasks={this.state.tasks} toggleTask={this.toggleTask} taskHide={this.state.taskHide}/>
			</div>
		  </div>
		)
	}
}


 export default App;