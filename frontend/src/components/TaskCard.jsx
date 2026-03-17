import React,{useState} from "react";
import { updateTask } from "../services/api";
import "./TaskCard.css";

function TaskCard({task}){

const [edit,setEdit] = useState(false);
const [assigned,setAssigned] = useState(task.assigned_to);
const [desc,setDesc] = useState(task.task);
const [deadline,setDeadline] = useState(task.deadline);

const save = async()=>{

await updateTask(task.id,{
assigned_to:assigned,
task:desc,
deadline:deadline
});

setEdit(false);

};

return(

<div className="task-card">

<div className="confidence">
{Math.round(task.confidence*100)}%
</div>

{edit ? (

<>

<input value={assigned} onChange={e=>setAssigned(e.target.value)} />

<textarea value={desc} onChange={e=>setDesc(e.target.value)} />

<input value={deadline || ""} onChange={e=>setDeadline(e.target.value)} />

<button onClick={save}>Save</button>

</>

):(

<>

<h3>👤 {assigned}</h3>

<p>{desc}</p>

<p>📅 {deadline}</p>

<button onClick={()=>setEdit(true)}>Edit</button>

</>

)}

</div>

);

}

export default TaskCard;