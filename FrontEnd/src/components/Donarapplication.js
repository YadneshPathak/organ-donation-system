import React, { useState } from "react";
import Header from "./Header";
import { useForm } from "react-hook-form";
import { checkValidData } from "../utils/validate";

const DonorApplicantForm = () => {
  const { handleSubmit } = useForm();
  const [errorMessage, setErrorMessage] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    Adharnum: "",
    Gender: "",
    BloodGroup: "",
    Address: "",
    State: "",
    City: "",
    Organs: "",
  });

  const onSubmit = async () => {
    console.log("Form data:", formData); // Log the form data

    // Example validation
    const { name, Adharnum, Gender, BloodGroup, Address, State, City, Organs } =
      formData;
    if (
      !name ||
      !Adharnum ||
      !Gender ||
      !BloodGroup ||
      !Address ||
      !State ||
      !City ||
      !Organs
    ) {
      setErrorMessage("Please fill in all fields.");
      return;
    }

    // Additional validation logic if needed
    const isValidData = checkValidData(
      name,
      Adharnum,
      Gender,
      BloodGroup,
      Address,
      State,
      City,
      Organs
    );
    if (!isValidData) {
      setErrorMessage("Invalid data. Please check your inputs.");
      return;
    }

    // If all validations pass, you can proceed with form submission or other actions
    const response = await fetch("http://localhost:8080/demo", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const responseData = await response.text();
    console.log(responseData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-r from-cyan-700 via-emerald-500 to-teal-400 p-10 rounded-lg shadow-md w-full h-full text-white flex justify-center items-center">
        <div className="max-w-md w-full bg-gray-200 rounded-lg p-6 opacity-80">
          <h1 className="bg-teal-100 py-4 mb-8 text-center font-bold text-black">
            <b>DONAR APPLICANT FORM</b>
          </h1>
          <form onSubmit={handleSubmit(onSubmit)} className="mx-auto">
            <div className="mb-4 flex flex-col">
              <label className="text-black mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="input px-4 py-2 border border-gray-400 rounded-lg text-black"
              />
            </div>
            <div className="mb-4 flex flex-col">
              <label className="text-black mb-2">Aadhar number</label>
              <input
                type="text"
                name="Adharnum"
                value={formData.Adharnum}
                onChange={handleChange}
                className="input px-4 py-2 border border-gray-400 rounded-lg text-black"
                maxLength="12"
              />
            </div>
            <div className="mb-4 flex flex-col">
              <label className="text-black mb-2">Gender</label>
              <select
                name="Gender"
                value={formData.Gender}
                onChange={handleChange}
                className="input px-4 py-2 border border-gray-400 rounded-lg text-black"
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            <div className="mb-4 flex flex-col">
              <label className="text-black mb-2">Blood Group</label>
              <select
                name="BloodGroup"
                value={formData.BloodGroup}
                onChange={handleChange}
                className="input px-4 py-2 border border-gray-400 rounded-lg text-black"
              >
                <option value="">Select Blood Group</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
              </select>
            </div>
            <div className="mb-4 flex flex-col">
              <label className="text-black mb-2">Address</label>
              <input
                type="text"
                name="Address"
                value={formData.Address}
                onChange={handleChange}
                className="input px-4 py-2 border border-gray-400 rounded-lg text-black"
              />
            </div>
            <div className="mb-4 flex flex-col">
              <label className="text-black mb-2">State</label>
              <select
                name="State"
                value={formData.State}
                onChange={handleChange}
                className="input px-4 py-2 border border-gray-400 rounded-lg text-black"
              >
                <option value="">Select State</option>
                <option value="Andhra Pradesh">Andhra Pradesh</option>
                <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                <option value="Assam">Assam</option>
                <option value="Bihar">Bihar</option>
                <option value="Chhattisgarh">Chhattisgarh</option>
                <option value="Goa">Goa</option>
                <option value="Gujarat">Gujarat</option>
                <option value="Haryana">Haryana</option>
                <option value="Himachal Pradesh">Himachal Pradesh</option>
                <option value="Jharkhand">Jharkhand</option>
                <option value="Karnataka">Karnataka</option>
                <option value="Kerala">Kerala</option>
                <option value="Madhya Pradesh">Madhya Pradesh</option>
                <option value="Maharashtra">Maharashtra</option>
                <option value="Manipur">Manipur</option>
                <option value="Meghalaya">Meghalaya</option>
                <option value="Mizoram">Mizoram</option>
                <option value="Nagaland">Nagaland</option>
                <option value="Odisha">Odisha</option>
                <option value="Punjab">Punjab</option>
                <option value="Rajasthan">Rajasthan</option>
                <option value="Sikkim">Sikkim</option>
                <option value="Tamil Nadu">Tamil Nadu</option>
                <option value="Telangana">Telangana</option>
                <option value="Tripura">Tripura</option>
                <option value="Uttar Pradesh">Uttar Pradesh</option>
                <option value="Uttarakhand">Uttarakhand</option>
                <option value="West Bengal">West Bengal</option>
              </select>
            </div>
            <div className="mb-4 flex flex-col">
              <label className="text-black mb-2">City</label>
              <input
                type="text"
                name="City"
                value={formData.City}
                onChange={handleChange}
                className="input px-4 py-2 border border-gray-400 rounded-lg text-black"
              />
            </div>
            <div className="mb-4 flex flex-col">
              <label className="text-black mb-2">Organs to be considered</label>
              <input
                type="text"
                name="Organs"
                value={formData.Organs}
                onChange={handleChange}
                className="input px-4 py-2 border border-gray-400 rounded-lg text-black"
              />
            </div>
            <div>
              <button
                type="submit"
                className="btn p-2 my-5 bg-red-600 w-full rounded-lg"
              >
                Submit
              </button>
            </div>
            <p className="text-red-600 font-bold text-lg py-2">
              {errorMessage}
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default DonorApplicantForm;
