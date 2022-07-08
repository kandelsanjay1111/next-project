import React,{useState,useRef} from 'react'
import Image from 'next/image'

const Preview = ({image}) => {
  const [preview,setPreview]=useState('');
  const reader = new FileReader();
  reader.readAsDataURL(image);
  reader.onload=()=>{
    setPreview(reader.result)
  };

  return (
    <>
      <div>
        {
          preview && <Image src={preview} height={200} width={200}/>
        }
        
      </div>
    </>
    
  )
}

export default Preview