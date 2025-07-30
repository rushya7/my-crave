import React from 'react';
import { useForm } from 'react-hook-form';
import './AdminUserCreation.css';

function AdminUserCreation() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="form-container">
      <h1 className="form-title">Admin User Creation Page</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="admin-form">

        {/* Email */}
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+\.\S+$/,
                message: "Invalid email address",
              },
            })}
            placeholder="Email"
          />
          {errors.email && <span className="error">{errors.email.message}</span>}
        </div>

        {/* First & Last Name */}
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input
              id="firstName"
              {...register("firstName", {
                required: "First name is required",
                minLength: {
                  value: 2,
                  message: "Minimum 2 characters",
                },
              })}
              placeholder="First Name"
            />
            {errors.firstName && <span className="error">{errors.firstName.message}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input
              id="lastName"
              {...register("lastName", {
                required: "Last name is required",
                minLength: {
                  value: 2,
                  message: "Minimum 2 characters",
                },
              })}
              placeholder="Last Name"
            />
            {errors.lastName && <span className="error">{errors.lastName.message}</span>}
          </div>
        </div>

        {/* TLC City */}
        <div className="form-group">
          <label htmlFor="tlcCity">TLC City</label>
          <select id="tlcCity" {...register("tlcCity", { required: "Please select a city" })}>
            <option value="">Select City</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Pune">Pune</option>
            <option value="Nagpur">Nagpur</option>
            <option value="Nashik">Nashik</option>
          </select>
          {errors.tlcCity && <span className="error">{errors.tlcCity.message}</span>}
        </div>

        {/* WhatsApp & Contact Numbers */}
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="whatsappNumber">WhatsApp Number</label>
            <input
              id="whatsappNumber"
              {...register("whatsappNumber", {
                required: "WhatsApp number is required",
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: "Enter a valid 10-digit number",
                },
              })}
              placeholder="WhatsApp Number"
            />
            {errors.whatsappNumber && (
              <span className="error">{errors.whatsappNumber.message}</span>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="contactNumber">Contact Number</label>
            <input
              id="contactNumber"
              {...register("contactNumber", {
                required: "Contact number is required",
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: "Enter a valid 10-digit number",
                },
              })}
              placeholder="Contact Number"
            />
            {errors.contactNumber && (
              <span className="error">{errors.contactNumber.message}</span>
            )}
          </div>
        </div>

        {/* Alternate Email */}
        <div className="form-group">
          <label htmlFor="emailId">Alternate Email</label>
          <input
            id="emailId"
            {...register("emailId", {
              required: "Alternate email is required",
              pattern: {
                value: /^\S+@\S+\.\S+$/,
                message: "Invalid email format",
              },
            })}
            placeholder="Alternate Email"
            type="email"
          />
          {errors.emailId && <span className="error">{errors.emailId.message}</span>}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AdminUserCreation;
