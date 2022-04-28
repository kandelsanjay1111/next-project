// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Console } from 'console';
import * as fs from 'fs';

export default function handler(req, res) {
  let allblogs=[];

  fs.readdir(".././test/data",(err,blog)=>{
    // console.log(blog);
    blog.forEach((item)=>{
      // console.log(item);
        fs.readFile(".././test/data/"+item,"utf-8",(error,data)=>{
           allblogs.push(JSON.parse(data));
      })
    })
    console.log(allblogs);
    res.status(200).json({name:'test'})
  })

}
