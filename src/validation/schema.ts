import * as Yup from 'yup';

const schema = Yup.object().shape({
  name: Yup.string()
    .test('is-capitalized', 'The first letter must be capitalized', (value) => {
      if (value && value.length > 0) {
        const firstLetter = value[0];
        return firstLetter === firstLetter.toUpperCase();
      }
      return true;
    })
    .required('Name is required'),
  age: Yup.number()
    .nullable()
    .typeError('Age must be a number')
    .positive('Age must be a positive number')
    .required('Age is required'),
  email: Yup.string()
    .trim()
    .email('Enter a valid email (e.g., user@example.com)')
    .matches(/^.+@.+\..+$/, 'Email address must contain a domain name')
    .required('Email is required'),
  password: Yup.string()
    .trim()
    .min(8, 'Password should be of minimum 8 characters length')
    .test(
      'uppercase',
      'Password must include at least one uppercase letter (A-Z)',
      (value) => value !== undefined && /[A-Z]/.test(value)
    )
    .test(
      'lowercase',
      'Password must include at least one lowercase letter (a-z)',
      (value) => value !== undefined && /[a-z]/.test(value)
    )
    .test(
      'digit',
      'Password must include at least one digit (0-9)',
      (value) => value !== undefined && /[0-9]/.test(value)
    )
    .test(
      'specialCharacters',
      'Password must include at least one special character (!@#$%^&*)',
      (value) => value !== undefined && /[!@#$%^&*]/.test(value)
    )
    .required('Password is required'),
  passwordConfirm: Yup.string()
    .oneOf([Yup.ref('password'), ''], 'Passwords must match')
    .required('Password confirmation is required'),
  gender: Yup.string().required('Gender is required'),
  accept: Yup.boolean()
    .required('You must accept the terms and conditions')
    .oneOf([true], 'You must accept the terms and conditions'),
});

export default schema;
