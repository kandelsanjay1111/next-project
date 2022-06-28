// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Console } from 'console';
import * as fs from 'fs';

export default function handler(req, res) {
  console.log(req.method);
  // let about="";
  let about={
    title:'demo title',
    content:'content demo'
  };
  about=JSON.stringify(about);
  if(req.method=="POST")
  {
     about=req.body;
  }
  
  fs.writeFile('.././test/data/about.json',about,(err)=>{console.log(err)});
  res.status(200).json({status:"success"});
}
