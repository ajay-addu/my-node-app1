const express=require('express');
const app=express();
const port=2025;
app.get("/",(req,res)=>

  {
    res.send("<h1>hello world</h1>");

});
app.listen(port,()=>
{
  console.log('app listeneing to the port ${port}');
}
)
