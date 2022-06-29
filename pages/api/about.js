import * as fs from 'fs';
import {db,app} from '../firebase';
import {collection,query,orderBy, onSnapshot} from '@firebase/firestore'

export default function handler(req, res) {
    
    const collectionRef=collection(db,'blog');
    
    const q = query(collectionRef,orderBy("title","desc"));
    

    onSnapshot(q,(snapShot)=>{
        
        let blog=snapShot.docs.map((doc)=>{
            return doc.data();
        }); 
        
        // console.log(blog[0]);
        res.status(200).json(blog[0]);
    });

    // fs.readFile(".././test/data/about.json",(error,data)=>{
    //     res.status(200).json(data)
    // });
};
