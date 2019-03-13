import React, { Component } from 'react';
import Control from './Control';
import TaskItem from './TaskItem';

class List extends Component {
    constructor(props){
        super(props)
        this.state = {
            tasks: [{
				id: 1,
				name: "Task 1",
				status: 1
			},{
				id: 2,
				name: "Task 2",
				status: 1
			},{
				id: 3,
				name: "Task 3",
				status: 1
			},]
        }

    }
  
    deleteTask (id){
        let newTask = {id:4,name:"mi",staus: 0}
        this.setState({tasks: newTask })
    }
    render() {
        const tasks = this.state.tasks.map((task,index)=>{
            return <TaskItem deleteItem={this.deleteTask} key={index} task ={task}/>
        })
        return (
            
            <div className={this.props.taskHide? "col-md-12":"col-md-8"}>
            <button onClick={this.props.toggleTask} className="btn btn-primary">
              Add task
            </button>
            <Control/>
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
                    {tasks}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )
    }
}

export default List