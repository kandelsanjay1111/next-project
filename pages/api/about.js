import * as fs from 'fs';
import {db,app} from '../firebase';
import {collection,query,orderBy, onSnapshot} from '@firebase/firestore'
import { Query } from 'react-query';

export default function handler(req, res) {
    const collectionRef=collection(db,'blog');
    
    const q = query(collectionRef,orderBy("title","desc"));
    
    const data=onSnapshot(q,(snapShot)=>{
        // console.log(snapShot);
        snapShot.docs.map((doc)=>{
            console.log(doc.data().title);
        });
    });

    fs.readFile(".././test/data/about.json",(error,data)=>{
        res.status(200).json(data)
    })
}