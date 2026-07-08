export function validateAdminForm(formData) {

  const {
    name,
    mobile,
    email,
    password,
    confirmPassword
  } = formData;

  // Name
  if (!name || name.trim() === "") {
    return {
      success: false,
      message: "Admin Name is required."
    };
  }

  // Mobile
  if (!mobile || mobile.trim() === "") {
    return {
      success: false,
      message: "Mobile Number is required."
    };
  }

  if (!/^[0-9]{10}$/.test(mobile)) {
    return {
      success: false,
      message: "Mobile Number must be 10 digits."
    };
  }

  // Email (Optional)
  if (
    email &&
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  ) {
    return {
      success: false,
      message: "Invalid Email Address."
    };
  }

  // Password
  if (!password) {
    return {
      success: false,
      message: "Password is required."
    };
  }

  if (password.length < 6) {
    return {
      success: false,
      message: "Password must be at least 6 characters."
    };
  }

  // Confirm Password
  if (password !== confirmPassword) {
    return {
      success: false,
      message: "Passwords do not match."
    };
  }

  return {
    success: true
  };

}