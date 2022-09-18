const Express = require('express');
const BodyParser = require('body-parser');
const ejs = require('ejs')

const app = Express();
app.use(Express.static(__dirname+"/public"));
app.use(BodyParser.urlencoded({extended:true}))
app.set('view engine','ejs');

app.get("/",(req,res) => {
    // db.ref("Visitors").once('value',snapshot => {
    //     if(snapshot.exists()){
    //         db.ref("Visitors").update({count:snapshot.val().count+1})
    //     }else{
    //         db.ref("Visitors").update({count:0})
    //     }
    // })
    res.render('index');
})

app.get("/play",(req,res) => {
    res.render('playground');
})


app.listen(process.env.PORT||1234,()=>{
    console.log("Listening on port 1234");
})