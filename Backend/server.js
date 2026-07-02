const express=require('express')
const cors=require(cors)
const notifications=require('./notifications.json')
const app=express()
app.use(cors())
app.use(express.json())
app.post("/notifications",(req,res)=>{
    const newnotification=req.body
    res.status(201).json({
        message:"Notification Added",
        notification:newnotification

})
})
app.get("/notifications",(req,res)=>{
    res.json(notifications);
})
app.get("/notifications/:id",(req,res)=>{
    const id=Number(req.params.id)
    const notifi=notifications.find(n=>n.id===id)
    if(!notifi){
        res.status(404).json({
            message:"Not Found"
    })
    }
    res.json(notifi);
})
app.put("/notifications/:id",(req,res)=>{
    const id=Number(req.params.id)
    const index=notifications.findIndex(n=>n.id===id)
    if(index===-1){
        res.status(404).json({
            message:"Not Found"
    })
}
        notifications[index]=req.body;
        res.json({
            message:"Notification Added",
            notification:notifications[index]
        });
    });
    app.delete("/notifications/:id",(res,req)=>{
        const id=Number(req.params.id)
        const index=notifications.findIndex(n=>n.id===id)
        if(index==-1){
            res.status(404).json({
                message:"Notification Not Found"
            })
        }
        res.json({
            message:"Notification Deleted"
        });
    });

    const port=3000
    app.listen(port,()=>{
       console.log( `server is running on http://localhost:${port}`)
    });

    
