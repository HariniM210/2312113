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
      try{
      const response=await axios.get("http://localhost/3000/notifications")
      console.log(response.data);
      setNotification(response.data);
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
        Timestamp
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
    async function deletenotification(notificationsid){
      try{
        await axios.delete(`http://localhost:3000/notifications/$(notificationsid)`)
        getNotifications();
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
        Timestamp
      }
      try{
        await axios.put(`http://localhost/3000/notifications/${editId}`,updatedNotification);
        getNotifications();
        setEditId(null);
        clearforms();
      }
      catch(error){
        console.log(error)
      }
    }
    async function editNotification(){
      setId(notifications.id);
      setType(notifications.Type);
      setMessage(notifications.Message);
      setTimestamp(notifications.Timestamp);
    }
    function clearform(){
      setId("");
      setType("");
      setMessage("");
      setTimestamp("");
      setEditId("");
    }
    return (
      <div className="container">
        <input type="text"
                placeholder="id"
                value={id}
                onChange={(e)=>target.value.setId()}/>
                <br></br>
                <input type="text"
                placeholder="Type"
                value={Type}
                onChange={(e)=>target.value.setType()}/>
                <input type="text"
                placeholder="Message"
                value={Message}
                onChange={(e)=>target.value.setMessage()}/>
                <input type="number"
                placeholder="Timestamp"
                value={Timestamp}
                onChange={(e)=>target.value.setTimestamp()}/>
                <br></br>
                 {
          editId ?
          <button onClick={updateNotification}>Update Notification</button>
          :
          <button onClick={addNotification}> Add Notification</button>
          <br></br>
        } 
        {      
            notifications.map((notification)=>(
            <div className="card" key={notification.id}>
              <h1>Notifications Platform</h1>
              <h2>notification Id ${notifications.id}</h2>
               <p>Type {notifications.Type}</p>
               <p>Message {notifications.Message}</p>
                <p> Timestamp {notifications.Timestamp}</p>
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