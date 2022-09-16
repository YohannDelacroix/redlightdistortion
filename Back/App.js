const express = require('express');
const app = express();


app.use((req,res,next) => {
    res.setHeader('Access-Control-Allow-Origin',
    '*');
    res.setHeader('Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods',
    'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });
  

app.use(express.json())

const start = Date.now();

app.get('/newsletter', (req,res,next) => {
    console.log("Requete : " , Date.now()-start)
    const newsletter = [
        {
            email: "yohann.delacroix@hotmail.fr",
            name: "Yohann",
            city: "Domats",
            seen: false
        },
        {
            email: "yohann.delacroix@hotmail.fr",
            name: "Yohann",
            city: "Domats",
            seen: false
        },
        {
            email: "yohann.delacroix@hotmail.fr",
            name: "Yohann",
            city: "Domats",
            seen: true
        }
    ];
    res.status(200).json(newsletter);
})

module.exports = app;

