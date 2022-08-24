import * as Yup from 'yup';

const validationSchema=Yup.object({
    username:Yup.string().required('Username is required').email('Enter valid email'),
    password:Yup.string().required('Password is required')
});

const initialAuthValues={
    username:"",
    password:""
}

export {initialAuthValues,validationSchema}