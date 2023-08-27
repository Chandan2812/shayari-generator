

const express = require("express")
const {Configuration,OpenAIApi}=require("openai")
const cors=require("cors")
require("dotenv").config()



const app=express();


app.use(express.json())
app.use(cors())

app.get("/",(req,res)=>{
    res.send('Home')
})

const configuration=new Configuration({
    apiKey:process.env.OPENAIKEY,
})

const openai=new OpenAIApi(configuration)


app.post('/shayari', async (req, res) => {
    try {
       const {prompt}=req.body

       const response=await openai.createCompletion({
            model:"text-davinci-003",
            prompt:`Write a Shayari about ${prompt}.`,
            max_tokens:300,
            temperature:0.7,
       })

       let data=response.data.choices[0].text;
    //    console.log(data)
       res.status(200).send({data:data})
    } catch (error) {
        console.log(error)
        res.send({msg:error})
    }
   
});

app.post('/joke', async (req, res) => {
    try {
       const {prompt}=req.body

       const response=await openai.createCompletion({
            model:"text-davinci-003",
            prompt:`Write a Joke about ${prompt}.`,
            max_tokens:300,
            temperature:0.7,
       })

       let data=response.data.choices[0].text;
    //    console.log(data)
       res.status(200).send({data:data})
    } catch (error) {
        console.log(error)
        res.send({msg:error})
    }
   
});


app.post('/story', async (req, res) => {
    try {
       const {prompt}=req.body

       const response=await openai.createCompletion({
            model:"text-davinci-003",
            prompt:`Write a Story about ${prompt}.`,
            max_tokens:300,
            temperature:0.7,
       })

       let data=response.data.choices[0].text;
    //    console.log(data)
       res.status(200).send({data:data})
    } catch (error) {
        console.log(error)
        res.send({msg:error})
    }
   
});



app.post('/quote', async (req, res) => {
    try {
       const {prompt}=req.body

       const response=await openai.createCompletion({
            model:"text-davinci-003",
            prompt:`Write a Quote about ${prompt}.`,
            max_tokens:300,
            temperature:0.7,
       })

       let data=response.data.choices[0].text;
    //    console.log(data)
       res.status(200).send({data:data})
    } catch (error) {
        console.log(error)
        res.send({msg:error})
    }
   
});




app.listen(process.env.PORT,async()=>{
    console.log("server is running")
})