export const validate = (values, clearErrors) => {
  const errors = {};

  if (!values.name) {
    errors.name = "Name is required.";
  } else if (values.name.length < 3 || values.name.length > 20) {
    errors.name = "Name must be between 3 and 20 characters.";
  } else if (!/^[A-Za-z\s]+$/.test(values.name)) {
    errors.name = "Name can only contain letters and spaces.";
  } else {
    errors.name = "✔✔";
  }

  if (!values.lastName) {
    errors.lastName = "Last name is required.";
  } else if (values.lastName.length > 20) {
    errors.lastName = "Last name must be less than 20 characters.";
  } else if (!/^[A-Za-z\s]+$/.test(values.lastName)) {
    errors.lastName = "Last name can only contain letters and spaces.";
  } else {
    errors.lastName = "✔✔";
  }

  if (!values.description) {
    errors.description = "Description is required.";
  } else if (values.description.length > 2000) {
    errors.description = "Description must be 2000 characters maximum.";
  } else {
    errors.description = "✔✔";
  }

  if (!values.image) {
    errors.image = "Image URL is required.";
  } else if (!isUrlValid(values.image)) {
    errors.image = "Image URL is not valid.";
  } else {
    errors.image = "✔✔";
  }

  if (!values.nationality) {
    errors.nationality = "Nationality is required.";
  } else {
    errors.nationality = "✔✔";
  }

  if (!values.birthDate) {
    errors.birthDate = "Birth date is required.";
  } else {
    errors.birthDate = "✔✔";
  }

  if (!values.teams || values.teams.length === 0) {
    errors.teams = "The team is required.";
  } else {
    errors.teams = "✔✔";
  }

  if (clearErrors) {
    return {};
  }

  return errors;
};

function isUrlValid(url) {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}
