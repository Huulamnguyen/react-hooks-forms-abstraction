import React, { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    firstName: "John",
    lastName: "Henry",
    admin: false,
  })

  function handleChange(e){
    const name = e.target.name;
    let value = e.target.value;

    // use `checked` property of checkboxes instead of `value`
    if (e.target.type === "checkbox") {
      value = e.target.checked;
    }

    setFormData({...formData, [name]: value});
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);
  }

  // function handleFirstNameChange(event) {
  //   setFormData({...formData, firstName: event.target.value})
  //   // console.log(formData.firstName)
  // }

  // function handleLastNameChange(event) {
  //   setFormData({...formData, lastName:event.target.value})
  //   // console.log(formData.lastName)
  // }

  return (
    <form onSubmit={handleSubmit}>
      <input name="firstName" type="text" onChange={handleChange} value={formData.firstName} />
      <input name="lastName" type="text" onChange={handleChange} value={formData.lastName} />
      <input name="admin" type="checkbox" onChange={handleChange} checked={formData.admin} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
