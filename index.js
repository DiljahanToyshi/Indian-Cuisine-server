const express = require ('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

const meals = require('./data/meals.json');
const chefs = require('./data/chefs.json');
const chef = require('./data/chef.json');
app.get('/', (req,res)=>{
res.send('Assignment is cooking')
});
app.use(cors())

app.get('/meals',(req,res) =>{
    res.send(meals);
})

app.get('/chefs',(req,res) =>{
    res.send(chefs);
})


app.get('/meals/:id', (req,res) =>{
    const id = req.params.id;
    // console.log(id);
    const selectedmeals = meals.find(m => m.id === id);
    res.send(selectedmeals)
})



app.get('/chefs/:id',(req,res) =>{
    const id = req.params.id;
   
        const chefsNews = chefs.find(m => m.id == id)
        res.send(chefsNews);
})
app.listen(port,() =>{
    console.log(`Assignment api is running on port:${port}`)
})