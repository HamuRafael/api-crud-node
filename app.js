import { openDB } from './configDB.js';
import { createTable} from './Controler/Pessoa.js';

import express from 'express';
const app = express();
createTable();
app.get('/', (req,res)=>{
    res.send("ola mundoo");
});

app.post('/pessoa',(req,res)=>{
    console.log(req)
    res.json({
        "statusCode" : 200
        

    })

})
app.listen(3000, ()=>console.log('api running'));
