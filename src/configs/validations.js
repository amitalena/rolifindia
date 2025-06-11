import * as yup from 'yup';

export const loginSchema = yup.object().shape({
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup.string().required('Password is required')
});

export const careerSchema = yup.object().shape({
    name: yup.string().required('Name is required'),
    email: yup.string().email('Invalid email').required('Email is required'),
    mobile: yup.string()
        .matches(/^[0-9]{10,15}$/, 'Invalid phone number')
        .required('Mobile number is required'),
    address: yup.string(),
    message: yup.string(),
    resume: yup.mixed()
        .required('Resume is required')
        .test(
            'fileSize',
            'File too large (max 2MB)',
            value => value && value.size <= 2000000
        )
        .test(
            'fileType',
            'Unsupported file format (PDF or DOCX only)',
            value => value && ['application/pdf', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'].includes(value.type)
        )
});
