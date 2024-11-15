const express = require('express')
const cors = require('cors')
const app = express()
const port = 5000
const {marked} = require('marked');
app.use(express.json());
app.use(cors())


app.post('/markdown',(req,res)=>{
    const inputText = req.body.text
    // console.log("in server",inputText);
    const htmlCode = marked(inputText);
    // res.send(htmlCode)
    res.json({ html: htmlCode });
});

app.listen(port,()=>{
    console.log("server is listening on port: "+ port)
})