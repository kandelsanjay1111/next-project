import * as fs from 'fs';

export default function handler(req, res) {
    fs.readFile(".././test/data/blog.json",(error,data)=>{
        console.log(data)
    })
    res.status(200).json({ name: 'John Doe' })
  }