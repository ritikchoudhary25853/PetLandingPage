export const isEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

export function validateContactForm(values) {
  const errors = {};

  if (!values.name.trim()) errors.name = "Name is required.";
  if (!isEmail(values.email)) errors.email = "Enter a valid email.";
  if (values.message.trim().length < 12) {
    errors.message = "Message must be at least 12 characters.";
  }

  return errors;
}

export function validateAuthForm(values, isRegister = false) {
  const errors = {};

  if (!isEmail(values.email)) errors.email = "Enter a valid email.";
  if (values.password.length < 6) {
    errors.password = "Password must be at least 6 characters.";
  }
  if (isRegister && !values.name.trim()) errors.name = "Name is required.";

  return errors;
}
