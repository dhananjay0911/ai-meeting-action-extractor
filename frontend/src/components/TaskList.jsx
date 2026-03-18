import React,{useState,useEffect} from "react";
import { getTasks } from "../services/api";
import TaskCard from "./TaskCard";
import "./TaskList.css";

function TaskList({transcriptId}){

const [tasks,setTasks] = useState([]);

useEffect(()=>{

loadTasks();

},[transcriptId]);

const loadTasks = async () =>{

const data = await getTasks(transcriptId);

setTasks(data);

};

return(

<div className="task-list">

<h2>📋 Extracted Tasks ({tasks.length})</h2>

<div className="task-grid">

{tasks.map(task=>(
<TaskCard key={task.id} task={task}/>
))}

</div>

</div>
);
}

export default TaskList;