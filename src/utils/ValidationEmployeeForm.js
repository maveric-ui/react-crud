export const validateFormOnChanges = (name, value, errorStates, dateOfBirth) => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1;
  const currentDay = currentDate.getDate();

  switch (name) {
    case "name":
      if (value.length === 0) {
        errorStates.name = 'This field is required';
      } else if (value.length <= 2) {
        errorStates.name = 'This field must have more then 2 letters'
      } else {
        errorStates.name = null;
      }
      break;
    case "dateOfBirth":
      const getDateOfBirth = new Date(value);
      const dateOfBirthYear = getDateOfBirth.getFullYear();
      const dateOfBirthMonth = getDateOfBirth.getMonth() + 1;
      const dateOfBirthDay = getDateOfBirth.getDate();

      if (value.length === 0) {
        errorStates.dateOfBirth = 'This field is required';
      } else if (dateOfBirthYear === currentYear
          && dateOfBirthMonth === currentMonth
          && dateOfBirthDay === currentDay) {
        errorStates.dateOfBirth = 'The Date of Birth can\'t be today';
      } else if (dateOfBirthYear > currentYear
          || dateOfBirthMonth > currentMonth
          || dateOfBirthDay > currentDay) {
        errorStates.dateOfBirth = 'The Date of Birth can\'t be more than current date';
      } else {
        errorStates.dateOfBirth = null;
      }
      break;
    case "hireDate":
      const getHireDate = new Date(value);
      const hireDateYear = getHireDate.getFullYear();
      const hireDateMonth = getHireDate.getMonth() + 1;
      const hireDateDay = getHireDate.getDate();

      const dateOfBirthState = new Date(dateOfBirth);
      const dateOfBirthStateYear = dateOfBirthState.getFullYear();
      const dateOfBirthStateMonth = dateOfBirthState.getMonth() + 1;
      const dateOfBirthStateDay = dateOfBirthState.getDate();

      if (value.length === 0) {
        errorStates.hireDate = 'This field is required';
      } else if (hireDateYear === dateOfBirthStateYear
          && hireDateMonth === dateOfBirthStateMonth
          && hireDateDay === dateOfBirthStateDay) {
        errorStates.hireDate = 'The Hire Date  can\'t be equal to Date of Birth';
      } else if (hireDateYear < dateOfBirthStateYear
          || hireDateMonth < dateOfBirthStateMonth
          || hireDateDay < dateOfBirthStateDay) {
        errorStates.hireDate = 'The Hire Date  can\'t be less than Date of Birth';
      } else if (hireDateYear > currentYear
          || hireDateMonth > currentMonth
          || hireDateDay > currentDay) {
        errorStates.hireDate = 'The Hire Date  can\'t be more than current date';
      } else {
        errorStates.hireDate = null;
      }
      break;
    case "country":
      if (value.length === 0) {
        errorStates.country = 'This field is required';
      } else {
        errorStates.country = null;
      }
      break;
    default:
      break;
  }
};


export const validateFieldOnSubmit = (errorStates, formData) => {
    if(formData.name === "") {
      errorStates.name = "This field is required";
    }
    if(formData.dateOfBirth === "") {
      errorStates.dateOfBirth = "This field is required";
    }
    if(formData.hireDate === "") {
      errorStates.hireDate = "This field is required";
    }
    if(formData.country === "") {
      errorStates.country = "This field is required";
    }

};