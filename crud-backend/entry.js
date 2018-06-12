var express=require('express');
var mongoose=require('mongoose');
var bodyparser=require('body-parser');
var cors=require('cors');

var app=express();

const route=require('./route/routes');
mongoose.connect('mongodb://localhost:27017/shoppinglist',{
    useMongoClient:true
}
);

mongoose.connection.on('connected',()=>{
    console.log('mongo db connected at port 27017');
});

mongoose.connection.on('error',(err)=>{
    console.log(err);
});

const PORT=3123;
app.use(cors());
app.use(bodyparser.json());

app.use('/api',route);

app.listen(PORT,()=>{

    console.log('server has been started at port'+PORT);
});

app.get('/',(req,res)=>{
    res.send('ganesh ban');
});