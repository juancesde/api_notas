const express = require('express');
const app = express();
const port= 3000;

//middleware
app.use(express.json());

//route
app.use(require('./routers/routers'));

app.listen(port,()=>{
    console.log( `corriendo por el puerto ${port} y en localhost`);
})