import * as fs from 'fs';
import {useRouter} from 'next/router';

export default function handler(req, res) {
    const router=useRouter();
    fs.readFile(".././test/data/blog.json",(error,data)=>{
        console.log(typeof(data))
        res.status(200).json(data)
    })
  }