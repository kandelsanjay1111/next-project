// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Console } from 'console';
import * as fs from 'fs';
import {doc,updateDoc} from 'firebase/firestore';
import {db,app} from '../../firebase';

export default function handler(req, res) {

  // console.log(req);

  let about="";

    if(req.method=="POST")
  {
     const body=req.body;
     about=JSON.parse(body);
    //  console.log(about.title);
  }

  const docRef=doc(db,'about',about.id);
  updateDoc(docRef,about)
  .then(()=>{
    res.status(200).json({status:"success"});
  });


  // console.log(docRef);
  
  // fs.writeFile('.././test/data/about.json',about,(err)=>{console.log(err)});
  // res.status(200).json({status:"success"});
}
