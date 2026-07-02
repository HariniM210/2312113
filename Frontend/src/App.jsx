import {useEffect,useState} from "react"
import axios from "axios"
import "./App.css"
 
function App(){
  const [notification,setNotification]=usestate([]);
  const [id,setId]=useState("");
  const [type,setType]=useState("");
  const [message,setMessage]=useState("");
  const [timestamp,setTimestamp]=useState("");
  const [editId,setEditId]=useState(null);
  useEffect(()=>{
    getNotifications()},[])
    async function getNotification(){
      const response=await axios.get("http://localhost/3000/notifications")
    }

}
export default App