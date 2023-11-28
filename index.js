const express = require('express');
const app = express();
app.use(express.json());
const port = 3000;

app.get('/', function (req, res) {
    return res.send('Hola Mundo');
});

const users=[{"id":1,'name':'fabian','lastname':'Vargas'},
{"id":2,'name':'camilo','lastname':'Lovera'}]

app.get('/users',function(req,res){
    res.status(201);
   res.send(users);
});

app.put('/users/:id',function(req,res){
    const index=req.params.id;
    users[index]=req.body
    res.status(201)
    return res.send(users[index])

});

app.post('/users',function(req,res){
    console.log(req.body);
    users.push(req.body);
    res.status(201);
    return res.send("Usuario Registrado")
});


app.delete('/users/:id',function(req,res){
    const index= req.params.id;
    users.splice(index,1);
    return res.send(users);
});

//app.get('/users/:id', function (req,res)  {
  //  const index=req.params.id;// index,0,1,2
//return res.send(users[index])
//});


app.listen(port, function () {
    console.log(`The app is running`);
});