const TEST_MODE = true;
export function validateForm(formData) {

  if (
    !formData.name.trim() ||
    !formData.mobile.trim() ||
    !formData.password.trim() ||
    !formData.confirmPassword.trim()
  ) {
    return {
      success: false,
      message: "Please fill all required fields."
    };
  }

  if (!formData.sponsorId.trim()) {
    return {
      success: false,
      message: "Please enter Sponsor ID."
    };
  }

  if (!formData.side.trim()) {
    return {
      success: false,
      message: "Please select Left or Right Position."
    };
  }

  if (

    !TEST_MODE &&

    !/^\d{10}$/.test(formData.mobile.trim())

) {

    return {
        success: false,
        message: "Mobile Number must be exactly 10 digits."
    };

}

  if (formData.password !== formData.confirmPassword) {
    return {
      success: false,
      message: "Password and Confirm Password do not match."
    };
  }

  return {
    success: true
  };

}