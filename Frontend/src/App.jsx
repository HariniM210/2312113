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
      try{
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

}
export default App