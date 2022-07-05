import {db,app} from '../firebase';
import {doc,getDoc,updateDoc} from 'firebase/firestore';

export default function handler(req, res) {

    const url=req.url;
    const url_params=url.split('/');
    const id=url_params[url_params.length-1];
    // console.log(id);
    const collectionRef=doc(db,'blog',id);
    if(req.method=="GET")
    {
        const data=getDoc(collectionRef);
        data.then((item)=>{
          let blog={...item.data(),id:item.id};
          res.status(200).json(blog);
        })
        .catch((error)=>{
          // console.log(error);
          res.status(404).json({error:"no data found"});
        }); 
    }
    else{
      // delete req.body.id;
      const blog=JSON.parse(req.body);
      updateDoc(collectionRef,blog)
      .then(()=>{
        res.status(200).json({success:"edited successfully"});
      });
    }
    
    }