import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { ErrorMessage } from 'formik';
//import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signIn } from '../../redux/auth/operations';

const SigInForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = v => {
    dispatch(signIn({ email: v.email, password: v.password }));
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
  });
  const initialValues = {
    email: '',
    password: '',
    repeatPassword: '',
  };

  return (
    <div>
      <h2>Sign In</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <label>Email</label>
          <div>
            <Field name="email" type="email" placeholder="Enter your email" />
            <ErrorMessage name="email" component="span" />
          </div>
          <label>Password</label>
          <div>
            <Field
              name="password"
              type="password"
              placeholder="Enter your password"
            />
            <ErrorMessage name="password" component="span" />
            <svg>
              <use></use>
            </svg>
          </div>

          <button>Sign In</button>
        </Form>
      </Formik>
    </div>
  );
};

export default SigInForm;
