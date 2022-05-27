import * as fs from 'fs';

export default function handler(req, res) {
if(req.method=="POST"){
    console.log(req.body);
    let user_data=JSON.stringify(req.body);
    fs.writeFile('.././test/data/test.json',user_data,()=>{})
    res.status(200).json(req.body);
}
else{
    res.status(200).json(['get request']);
}
}