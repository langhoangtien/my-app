import React, { Component } from 'react';
import Control from './Control';
import TaskItem from './TaskItem';

class List extends Component {
    constructor(props){
        super(props)
        this.state = {
            tasks: []
        }

    }
    componentDidMount(){
      if(localStorage.getItem('tasks')){
        let tasks = localStorage.getItem('tasks')
        this.setState({tasks: JSON.parse(tasks) })
      }
      
    }
    static getDerivedStateFromProps(props, state){
      console.log("NextProps:",props)
      console.log("STATE:",state.tasks)
      console.log("NewTask:",props.task)
      if(props.task !== false)
      {
        props.task.id = Math.floor(Math.random() * 10000000)
        state.tasks.push(props.task)
        return {
          tasks: state.tasks
        }
      }
      return null

    }
    onGenerateData = ()=>{
      const tasks =  [{
				id: Math.floor(Math.random() * 10000000),
				name: "Task "+ Math.floor(Math.random() * 100) ,
				status: Math.round((Math.random()))
			},{
				id: Math.floor(Math.random() * 10000000),
				name: "Task "+ Math.floor(Math.random() * 100) ,
				status: Math.round((Math.random()))
			},{
				id: Math.floor(Math.random() * 10000000),
				name: "Task "+ Math.floor(Math.random() * 100) ,
				status: Math.round((Math.random()))
      },]
      this.setState({tasks: tasks })
      localStorage.setItem("tasks",JSON.stringify(tasks))

    }
    deleteTask =  (id)=>{
        let newTask = this.state.tasks.filter(task=>{
            if(task.id !== id)
            return task
        })
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
            <button className="btn btn-info" onClick={this.onGenerateData}>Generate Data</button>
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