import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import TodoItems from './components/TodoItems.js';
import checkAll from './arrow-down.svg';
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

class App extends Component {
  constructor(){
    super();
    this.state = {
      // newItem: '',
      tasksList: [
      {title: "Do the first important things", isComplete: true},
      {title: "Do the second", isComplete: true},
      {title: "And do the third thing", isComplete: false}
    ]}
    // this.onItemClicked = this.onItemClicked.bind(this);
    this.onKeyUp = this.onKeyUp.bind(this);
    // this.onChange = this.onChange.bind(this);
    // this.onClearItem = this.onClearItem.bind(this);
  };


  onItemClicked(item) {
    return (event)=> {
      const isComplete = item.isComplete;
      const {tasksList} = this.state;
      const index = tasksList.indexOf(item);
      this.setState({
        tasksList : [
          ...tasksList.slice(0, index),
          {
            ...item,
            isComplete: !isComplete
          },
          ...tasksList.slice(index + 1)
        ]
      })
    }
  }
  
  onKeyUp(event){
    if(event.keyCode === 13){ //key code cua Enter
      let text = event.target.value;
      if(!text || text.trim()===''){
        return;
      }
      this.setState({
        tasksList: [
          ...this.state.tasksList,
          {title: text, isComplete: false}
        ]
      })
      event.target.value ='';
    }
  }

  // onChange(event) {
  //   this.setState({
  //     newItem: event.target.value
  //   })
  // }

  onClearItem(item){
    return (event) => {
      const {tasksList} = this.state;
      const index = tasksList.indexOf(item);
      this.setState({
        tasksList : [
          ...tasksList.slice(0, index),
          ...tasksList.slice(index + 1)
        ]
      })
    }
  }

  render() {
    const { tasksList} = this.state;
    return (
      <div className = "App">
        <div className = "Header">
          <img src = {checkAll} alt= "checkAll"/>
          <input type = "text" placeholder= "Add a new task" 
            onKeyUp={this.onKeyUp}
            // value = {newItem}
            // onChange = {this.onChange}
            ></input>
        </div>
        {
          tasksList.length && tasksList.map((task, index) => 
            <TodoItems 
              key={index} 
              id={index + 1} 
              task={task} 
              onClick = {this.onItemClicked(task)}
              onClear = {this.onClearItem(task)}
             /> )
        }
      </div>
    )
  }
}

export default App;
