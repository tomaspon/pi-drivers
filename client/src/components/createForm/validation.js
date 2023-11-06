

export const validate = (values) => {
    
    // Validaciones para 'name'
    if (!values.name) {
      errors.name = "Name is required.";
    } else if (values.name.length < 3 || values.name.length > 20) {
      errors.name = "Name must be between 3 and 20 characters.";
    } else if (!/^[A-Za-z\s]+$/.test(values.name)) {
      errors.name = "Name can only contain letters and spaces.";
    }
    else{
        errors.name = "✔✔"
    }
  
    // Validaciones para 'lastName'
    if (!values.lastName) {
      errors.lastName = "Last name is required.";
    } else if (values.lastName.length > 20) {
      errors.lastName = "Last name must be less than 20 characters.";
    } else if (!/^[A-Za-z\s]+$/.test(values.lastName)) {
      errors.lastName = "Last name can only contain letters and spaces.";
    }
    else{
        errors.lastName = "✔✔"
    }
  
    // Validaciones para 'description'
    if (!values.description) {
      errors.description = "Description is required.";
    } else if (values.description.length > 2000) {
      errors.description = "Description must be 2000 characters maximum.";
    }
    else{
        errors.description = "✔✔"
    }
  
    // Validaciones para 'image' (si se proporciona)
    if (!values.image) {
      errors.image = "Image URL is required.";
    } else if (!isUrlValid){
        errors.image = "Image URL is not valid."
    }
    else {
        errors.image = "✔✔"
    }
  
    // Validaciones para 'nationality'
    if (!values.nationality) {
        errors.nationality = "Nationality is required.";
    }
    else {
        errors.nationality = "✔✔"
    }
  
    // Validaciones para 'birthDate'
    if (!values.birthDate) {
      errors.birthDate = "Birth date is required.";
    }
    else {
        errors.birthDate = "✔✔"
    }
  
    // Validaciones para 'teams'
    if (!values.teams || values.teams.length === 0) {
      errors.teams = "The team is required.";
    }
    else {
        errors.teams = "✔✔"
    }
    
  
    return errors;
  };
  
    const errors = {};
    function isUrlValid(url) {
      try {
        new URL(url);
        return true;
      } catch {
        return false;
      }
    }