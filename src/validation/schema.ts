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
    .required('Age is required')
    .positive('Age must be a positive number'),
});

export default schema;
