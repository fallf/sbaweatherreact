import { useState } from "react";
import React from "react";

function Form(props) {
  const [formData, setFormData] = useState({
    searchterm: "",
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.weathersearch(formData.searchterm); // Pass the search term to parent
    setFormData({ searchterm: "" }); // Clear the input field
  };

  return (
    <form onSubmit={handleSubmit}>
      {" "}
      {/* Use onSubmit here */}
      <input
        type="text"
        name="searchterm"
        placeholder="Enter city name"
        onChange={handleChange}
        value={formData.searchterm}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
