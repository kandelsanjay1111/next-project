import * as fs from 'fs';

export default function handler(req, res) {
    fs.readFile(".././test/data/about.json",(error,data)=>{
        res.status(200).json(data)
    })
  }