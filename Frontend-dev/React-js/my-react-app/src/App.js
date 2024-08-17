import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TaskForm from "./components/TaskForm";
import Task from "./components/Task";

// useContext Hook
const ThemeContext = React.createContext('light');

// This is a function component that created by default when create a project
function App() {
  const [tasks, setTasks] = useState([]);

  // Save data/tasks in the local storage
  useEffect(()=>{
    // Whenever refresh the page, the tasks will be there by using if condition
    if (tasks.length === 0) return;
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);
  useEffect(()=>{
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    setTasks(tasks);
  }, [])
  //

  function addTask(name){
    setTasks(function(prev){
      return [...prev, {name:name, done:false}];
    });
  };

  function removeTask(indexToRemove){
    setTasks(function(prev){
      return prev.filter((taskObject, index) => index !== indexToRemove)
    });
  };

  function updateTaskDone(taskIndex, newDone){
    setTasks(function(prev){
      const newTasks = [...prev];
      newTasks[taskIndex].done = newDone;
      return newTasks;
    })
  }

  const numberComplete = tasks.filter(t => t.done).length;
  const numberTotal = tasks.length;

  function getMessage(){
    const percentage = numberComplete/numberTotal * 100;
    if (percentage === 0){
      return 'Try to do at least one! 🙏';
    }
    if (percentage === 100){
      return 'Nice job for today! ✨';
    }
    return 'Keep it going 💪';
  }

  return (
    <ThemeContext.Provider value="dark">
      <Header/>
      <main>
        <h2 className="title">Tasks To Do</h2>
        <h3>{getMessage()}</h3>
        <label className="total-tasks">{numberComplete}/{numberTotal} Completed</label>
        <TaskForm onAdd={addTask}/>
        {tasks.map((task, index) => (
          <Task {...task}
                onDelete={() => removeTask(index)}
                onToggle={done => updateTaskDone(index, done)}/>
        ))}
      </main>
      <Footer/>
    </ThemeContext.Provider>
  );
}

export default App;
