const { response } = require("express");
const { request } = require("http");

app.get('/',(request,response)=>{
    response.send('<h1>Servidor con express</h1>')
})

app.get('/api/users',(request, response)=>{
    response.json(user)
})

const Port= process.env.Port || 3001;
app.listen(Port,()=>{
    console.log("El servidor esta corriendo en el puerto" ,$(Port))
})