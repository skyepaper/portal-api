const express = require("express")
const mongoose=require('mongoose')

const http = require("http")
const { Server } = require("socket.io")
const cors = require("cors")

const app=express()


app.use(express.json({ limit: '9000kb' }))
//app.use(express.json());
app.use(cors())

server = require('http').createServer(app)

mongoose.connect('mongodb+srv://borismirevbm:2YacEBc3qgz4OiLJ@aquarium.6ud9dig.mongodb.net/portal?retryWrites=true&w=majority', {
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>console.log('Connected to DB'))
  .catch(console.error)

  const Project = require('./models/Project')
  const Message = require('./models/Message')

  const io = new Server(server, {
    cors: {
      origin: "*",
      //"http://localhost:3000",
      methods: ["GET", "POST"],
    },
    'force new connection': true 
  });
  server.listen(3002)


app.get('/projects', cors(), async(req,res)=>{  

    const projects = await Project.find()
    res.json(projects)
});

app.post('/project/new', async (req,res)=>{

    const project = new Project({
      name: req.body.name,
      images: req.body.images
    });
    project.save()
    res.json(project)
});

app.delete('/project/delete/:id', async (req,res)=>{
  const result=await Project.findByIdAndDelete(req.params.id);
  res.json(result);
})

app.put('/project/save/:id', async (req,res)=>{

  const project=await Project.findByIdAndUpdate(req.params.id);
  if(project) {
    project.gold= req.body.gold;
  }
  
    project.save();
    res.json(project);
});

app.get('/messages', cors(), async(req,res)=>{  

  const messages = await Message.find()
  res.json(messages)
});

app.post('/message/new', async (req,res)=>{

  const message = new Message({
    name: req.body.name,
    message: req.body.message
  });
  message.save()
  res.json(message)
});

app.delete('/message/delete/:id', async (req,res)=>{
  const result=await Message.findByIdAndDelete(req.params.id);
  res.json(result);
})

