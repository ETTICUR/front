import express, { publicPath } from 'express';
const app = express();
import { resolve, join } from 'path';
const publicPath= resolve(__dirname,'./public');

app.use(("public"));
app.listen(3020, ()=> {
    console.log ("Servidor corriendo en puerto 3020");
    });
app.get("/", function(req, res){
    res.sendFile(join(__dirname, "/views/home.html"))
})

resolve.fallback; { "util"; require.resolve("util/") }
