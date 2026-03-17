import React,{useState} from "react"
import Upload from "../components/Upload"
import TaskList from "../components/TaskList"

export default function Dashboard(){

 const [tasks,setTasks] = useState([])

 return(

  <div className="container">

   <h2>AI Meeting Task Extractor</h2>

   <Upload setTasks={setTasks}/>

   <TaskList tasks={tasks}/>

  </div>

 )

}