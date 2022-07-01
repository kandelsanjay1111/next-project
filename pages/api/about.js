import * as fs from 'fs';
import {db,app} from '../firebase';
import {collection,query,orderBy, onSnapshot} from '@firebase/firestore'

export default function handler(req, res) {
    
    const collectionRef=collection(db,'about');
    
    const q = query(collectionRef);
    

    onSnapshot(q,(snapShot)=>{
        
        let about=snapShot.docs.map((doc)=>{
            return {...doc.data(),id:doc.id};
        }); 
        
        // console.log(blog[0]);
        res.status(200).json(about[0]);
    });

    // fs.readFile(".././test/data/about.json",(error,data)=>{
    //     res.status(200).json(data)
    // });
};
