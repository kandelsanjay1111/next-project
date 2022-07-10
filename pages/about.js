import React,{useState} from 'react'
import useSwr from 'swr'
const fetcher = (...args) => fetch(...args).then(res => res.json());
import styles from '../styles/Blog.module.css'
import styles1 from '../styles/contact.module.css'
import * as Yup from 'yup';
import Link from 'next/link';
import 'react-quill/dist/quill.snow.css'
import {useQuery,useMutation,useQueryClient} from 'react-query';
import {useFormik} from 'formik'
import {db} from './firebase'
import dynamic from 'next/dynamic'

const modules = {
  toolbar: [
    [{ header: '1' }, { header: '2' }, { font: [] }],
    [{ size: [] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [
      { list: 'ordered' },
      { list: 'bullet' },
      { indent: '-1' },
      { indent: '+1' },
    ],
    ['link', 'image', 'video'],
    ['clean'],
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  },
};

const formats = [
  'header',
  'font',
  'size',
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'list',
  'bullet',
  'indent',
  'link',
  'image',
  'video',
];


const fetchData=async()=>{
  const res=await fetch('http://localhost:3000/api/about');
  return await res.json();
}

const uploadData=async(values)=>{
  // console.log((values.title));
  const options={
    method:'POST',
    body:JSON.stringify(values),
  }
  const res=await fetch('http://localhost:3000/api/about/hello',options);
  return res.json();
 }

const validationSchema=Yup.object({
  title:Yup.string().required('Name field is required'),
  content: Yup.string().required('Channel is required')
});


export default function about(props) {
  const QuillNoSSRWrapper = dynamic(import('react-quill'), {	
    ssr: false,
    loading: () => <p>Loading ...</p>,
    });

  const [edit,setEdit]=useState(false);

  const {data,isError,isLoading,refetch}=useQuery('posts',fetchData);


  const {mutate}=useMutation(uploadData,{
    onSuccess:()=>{
      refetch();
    },
    onError:(err)=>{
        console.log('hello error occured')
    }
  });
  const initalvalues={
    title:"",
    content:"",
    id:""
  };
  const formik=useFormik({
    initialValues:data || initalvalues,
    enableReinitialize:true,
    onSubmit:async(values)=>{
      // console.log(values);
      mutate(values);
    },
    validationSchema:validationSchema
  });

  if(isLoading) return <div>Loading...</div>
  if(isError) return <div>Error in data fetching</div>
  return (
    <main className={styles.main}>
        <div className={styles.blog_content}>
            <h3 className={styles.blog_title}>{data.title}</h3>
            <p>{data.content}</p>
        </div>  
        <form onSubmit={formik.handleSubmit} method="post">

          <label className={styles1.label} htmlFor="first">Title</label>
          <input className={styles1.form_field} type="text" id="name" name="title" onChange={formik.handleChange} value={formik.values.title}/>

          <label className={styles1.label} htmlFor="content">Content</label>
          {/* <QuillNoSSRWrapper className={styles1.form_field}  id="content"  modules={modules} formats={formats} theme="snow" name="content" onChange={formik.handleChange} value={formik.values.content}/> */}
          <textarea className={`${styles1["form_field"]} ${styles1["content"]}`} type="text" id="content" name="content" value={formik.values.content} onChange={formik.handleChange}>{formik.values.content}</textarea>
          <input type="hidden" name="id" id="id" value={formik.values.id} onChange={formik.handleChange}></input>


          <button type="submit">Update About</button>

        </form> 
  </main>
  )
}
