import express from 'express';
import cors from 'cors'


const app = express();
app.use(cors())
const port = process.env.PORT || 3000;

let currentUrlNgrok= null;

app.use(express.json());


app.post('/api/ngrok',(req, res) =>{

    const {url} = req.body;
    if(!url) 
        return res.status(400).json({error:"Pas d'URL fournie"});
    currentUrlNgrok = url
    res.json({success : true});        
});

app.get('/api/ngrok',(req,res)=>{
    if(!currentUrlNgrok) 
        return res.status(404).json({error:"Aucune URL enregistrée"})
    res.json({url:currentUrlNgrok})

});

app.listen(port,()=>{
    console.log(`🚀 Serveur passerelle prêt sur le port ${port}`);
});