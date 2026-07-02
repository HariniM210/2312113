import {useEffect,useState} from "react";
import axios from "axios";

function App(){
  const [notifications,setNotifications]=useState([]);
  const [id,setId]=useState("");
  const [type,setType]=useState("");
  const [message,setMessage]=useState("");
  const [timestamp,setTimestamp]=useState("");
  const [editId,setEditId]=useState(null);
  useEffect(()=>{
    getNotification();
  },[])
    async function getNotification(){
      try{
      const response=await axios.get("http://localhost:3000/notifications")
      console.log(response.data);
      setNotifications(response.data);
      }
      catch(error){
        console.log(error);
      }
    }
    async function addNotification(){
      const newNotification={
        id,
        Type,
        Message,
        timestamp:Number(timestamp)
      }
      try{
        await axios.post("http://localhost:3000/notifications",newNotification);
        getNotification();
        clearform();
      }
      catch(error){
        console.log(error);
      }
    }
    async function deletenotification(id){
      try{
        await axios.delete(`http://localhost:3000/notifications/${id}`);
        getNotification();
        clearform();
      }
      catch(error){
        console.log(error)
      }
    }
    async function updateNotification(){
      const updatedNotification={
        id,
        Type,
        Message,
        timestamp:Number(timestamp)
      }
      try{
        await axios.put(`http://localhost:3000/notifications/${editId}`,updatedNotification);
        getNotification();
        setEditId(null);
        clearform();
      }
      catch(error){
        console.log(error)
      }
    }
    function editNotification(){
      setId(notifications.id);
      setType(notifications.type);
      setMessage(notifications.message);
      setTimestamp(notifications.timestamp);
    }
    function clearform(){
      setId("");
      setType("");
      setMessage("");
      setTimestamp("");
      setEditId(null);
    }
    return (
      <div className="container">
        <input type="text"
                placeholder="id"
                value={id}
                onChange={(e)=>setId(e.target.value)}/>
                <br></br>
                <input type="text"
                placeholder="Type"
                value={type}
                onChange={(e)=>setType(e.target.value)}/>
                <br></br>
                <input type="text"
                placeholder="Message"
                value={message}
                onChange={(e)=>setMessage(e.target.value)}/>
                <br></br>
                <input type="number"
                placeholder="Timestamp"
                value={timestamp}
                onChange={(e)=>setTimestamp(e.target.value)}/>
                <br></br>
                 {
          editId ?
          <button onClick={updateNotification}>Update Notification</button>
          :
          <button onClick={addNotification}> Add Notification</button>
        } 
        {      
            notifications.map((notification)=>(
            <div className="card" key={notification.id}>
              <h1>Notifications Platform</h1>
              <h2>notification Id ${notification.id}</h2>
               <p>Type {notification.type}</p>
               <p>Message {notification.message}</p>
                <p> Timestamp {notification.timestamp}</p>
               <button onClick={()=>deletenotification(notification.id)}>Delete</button>
                <br></br>
                <button onClick={()=>editNotification(notification)}>Edit</button>
                </div>
            ))
            }
        </div>
    );

}
export default App