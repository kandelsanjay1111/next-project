import {db,app} from '../firebase';
import {collection,getDocs,addDoc} from 'firebase/firestore';

export default function handler(req, res) {

    const collectionRef=collection(db,'blog');

    if (req.method=="POST")
    {
        const blog=JSON.parse(req.body);
        const collectionRef=collection(db,"blog");
        addDoc(collectionRef,blog);
        res.status(200).json({'success':'Record successfully added'});
    }

    else
    {
        getDocs(collectionRef)
        .then((data)=>{
            let blog=data.docs.map((item)=>{
                // console.log(item.id);
                return {...item.data(),id:item.id};
            });
            res.status(200).json(blog);
        });
    }

    

  }