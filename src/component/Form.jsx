import React from "react";
import { useState } from "react";

const Form = () => {
  let [formData, setFormData] = useState({
    fullName: "",
    password: "",
  });
  //   let [newName, SetNewName] = useState("");

  let handleInputChange = (e) => {
    let fieldName = e.target.name;
    let fullname = e.target.value;
    // setFormData((crrData) => {
    //   crrData[fieldName] = fullname;
    //   return { ...crrData };
    // });

    // setFormData({ ...formData, [fieldName]: fullname });

    setFormData((currData) => {
      //   return {
      //     ...currData,
      //     [fieldName]: fullname,
      //   };
      return {
        ...currData,
        [e.target.name]: e.target.value,
      };
    });
  };

  let submitHandler = (e) => {
    e.preventDefault();
    setFormData({
      fullName: "",
      password: "",
    });
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <label htmlFor="userName"></label>
        <input
          type="text"
          placeholder="enter username"
          value={formData.fullName}
          onChange={handleInputChange}
          name="fullName"
          id="fullName"
        />
        <br />
        <br />
        <label htmlFor="password"></label>
        <input
          type="text"
          placeholder="enter username"
          value={formData.password}
          onChange={handleInputChange}
          name="password"
          id="password"
        />
        <button>submit</button>
      </form>
    </div>
  );
};

export default Form;
