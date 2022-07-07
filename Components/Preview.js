import React,{useState} from 'react'
import Image from 'next/image'

const Preview = ({image}) => {
  const [preview,setPreview]=useState('');
  const reader = new FileReader();
  reader.readAsDataURL(image);
  reader.onload=()=>{
    setPreview(reader.result)
  };

  return (
    <Image src={preview}>

    </Image>
  )
}

export default Preview