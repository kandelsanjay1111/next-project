import * as Yup from 'yup';

const contactValidationSchema=Yup.object({
    name:Yup.string().required('Name field is required'),
    email:Yup.string().email('Invalid email address').required('Email is required'),
    channel: Yup.string().required('Channel is required')
  });

export {contactValidationSchema};