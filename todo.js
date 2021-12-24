const express=require("express");

const bodyParser=require("body-parser");

let items=["Learn Js","Learn DSA"];
let workItems=[];
const app=express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static("public"));

app.get("/",function(request,response){
    // response.send("Hello");
    let day=new Date;
    
    let options={
        weekday:"long",
        day:"numeric",
        month:"long"
    };

let today=day.toLocaleDateString("en-US", options);
   
    response.render("lists", {listTitle : today, newListItems: items});
});

app.post("/",function(req,res){

    let item= req.body.newItem;
    if(req.body.list==="Work"){
        workItems.push(item);
        res.redirect("/work");
    }else{
        items.push(item);
        res.redirect("/");
    }
   


});
app.get("/work",function(req,res){
    res.render("lists",{listTitle:"Work",newListItems:workItems})
});
app.post("/work",function(req,res){
    let item=req.body.newItem;
    workItems.push(item);

    res.redirect("/work");
})

app.get("/about",function(req,res){
    res.render("about");
})

app.listen(3000,function(){
console.log("Server is running on port 3000");
});
// const express=require("express");
// const ej=require("ejs");
// const app=express();
// app.set("view engine","ejs");

// const bodyParser=require("body-parser");

// app.use(bodyParser.urlencoded({extended:true}));
// app.use(express.static("public"));
// let workItems=[];
// let items=["Learn Js","Learn DSA","Learn COA"];
// app.get("/",function(req,res){
//     let day=new Date;
//     let options={
//         weekday:"long",
//         day:"numeric",
//         month:"long"
//     }
//     let today=day.toLocaleDateString("en-US",options);
//     app.render("lists",{listTitle : today, newListItems: items});


// });
// app.post("/",function(req,res){
//     let item=req.body.newItem;
//     if(req.body.list==="Work"){
//         workItems.push(item);
//         res.redirect("/work");
//     }else{
//         items.push(item);
//         res.redirect("/");
//     }
    
// });
// app.get("/work",function(req,res){
//     res.render("lists",{listTitle:"Work List",newListItems:workItems});
// });
// app.post("/work",function(req,res){
//     let item=req.body.newItem;
//     workItems.push(item);
//     res.redirect("/work");
// });
// app.get("/about",function(req,res){
//     res.render("about");
// });
// app.listen(3000,function(){
//     console.log("Server is running at port 3000");
// });