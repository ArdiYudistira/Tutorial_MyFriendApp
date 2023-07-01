const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
const formValidator = ({value, name, valueCompare = null}) => {
  switch (name) {
    case 'email':
      return value && value.match(emailRegex) ? true : false;
    case 'password':
      return value.length > 5 ? true : false;

    default:
      return value ? true : false;
      break;
  }
};

export default formValidator;
