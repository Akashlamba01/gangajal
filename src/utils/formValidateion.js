// src/utils/formValidation.js

export const validateForm = (formData) => {
  if (!formData.fullName.trim())
    return { field: "fullName", message: "Full name is required" };
  if (!/^[6-9]\d{9}$/.test(formData.phone))
    return { field: "phone", message: "Enter a valid 10-digit mobile number" };
  if (!formData.address.trim())
    return { field: "address", message: "Address cannot be empty" };
  if (!formData.city)
    return { field: "city", message: "City or Village is required" };
  if (!formData.state)
    return { field: "state", message: "Please select a state" };
  if (!formData.dist)
    return { field: "dist", message: "Please select a district" };
  if (!/^\d{6}$/.test(formData.pincode))
    return { field: "pincode", message: "Enter a valid 6-digit pincode" };
  return null;
};
