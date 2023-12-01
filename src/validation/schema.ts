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
    .positive('Age must be a positive number')
    .required('Age is required'),
  email: Yup.string()
    .trim()
    .email('Enter a valid email (e.g., user@example.com)')
    .matches(/^.+@.+\..+$/, 'Email address must contain a domain name')
    .required('Email is required'),
});

export default schema;
