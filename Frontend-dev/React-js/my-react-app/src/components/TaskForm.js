import React, { useState } from "react";

export default function TaskForm({onAdd}){
    const [taskName, setTaskName] = useState("");
    function handleSubmit(e){
        e.preventDefault();
        onAdd(taskName);
        setTaskName("");
    }

    return(
        <div className="container">
            <form
                className="todos"
                onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="tname"
                    value={taskName}
                    placeholder="Add New Task"
                    className="task-name"
                    onChange={(e) => {
                        setTaskName(e.target.value);
                    }}
                />
                <button className="add-btn">Add</button>
                <br/>
                <br/>
            </form>
            {/* {taskName} */}
        </div>
    )   
}