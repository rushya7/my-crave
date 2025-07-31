import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./LeadRegistration.css";

function LeadRegistration() {
  const [submitted, setSubmitted] = useState(false);
  const [timestamp, setTimestamp] = useState("");

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setValue,
  } = useForm({ mode: "onTouched" });

  const onSubmit = (data) => {
    const time = new Date().toLocaleString();
    setTimestamp(time);
    console.log({ ...data, timestamp: time });
    setSubmitted(true);
    Object.entries(data).forEach(([key, value]) => {
      setValue(key, value); // keeps form filled
    });
  };

  const watchPatent = watch("patent");
  const watchIdeas = watch("innovativeIdeas");

  return (
    <div className="registration-container">
      <h1>🚀 Lead Registration Form</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="registration-form">

        {/* Name */}
        <div className="form-row">
          <div className="form-group">
            <label>First Name</label>
            <input {...register("firstName", { required: "First name is required" })} />
            {errors.firstName && <span>{errors.firstName.message}</span>}
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input {...register("lastName", { required: "Last name is required" })} />
            {errors.lastName && <span>{errors.lastName.message}</span>}
          </div>
        </div>

        {/* City & WhatsApp */}
        <div className="form-row">
          <div className="form-group">
            <label>TLC City</label>
            <input {...register("tlcCity", { required: "TLC city is required" })} />
            {errors.tlcCity && <span>{errors.tlcCity.message}</span>}
          </div>
          <div className="form-group">
            <label>WhatsApp Number</label>
            <input {...register("whatsapp", {
              required: "WhatsApp number is required",
              pattern: { value: /^[0-9]{10}$/, message: "Enter a valid 10-digit number" }
            })} />
            {errors.whatsapp && <span>{errors.whatsapp.message}</span>}
          </div>
        </div>

        {/* Contact & Alt Email */}
        <div className="form-row">
          <div className="form-group">
            <label>Contact Number</label>
            <input {...register("contact", {
              required: "Contact number is required",
              pattern: { value: /^[0-9]{10}$/, message: "Enter a valid 10-digit number" }
            })} />
            {errors.contact && <span>{errors.contact.message}</span>}
          </div>
          <div className="form-group">
            <label>Alternate Email</label>
            <input {...register("altEmail", {
              pattern: { value: /^\S+@\S+$/i, message: "Enter a valid email" }
            })} />
            {errors.altEmail && <span>{errors.altEmail.message}</span>}
          </div>
        </div>

        {/* Pin/City/State/Country */}
        <div className="form-row">
          <div className="form-group">
            <label>Pin-code</label>
            <input {...register("pincode", {
              pattern: { value: /^[0-9]{6}$/, message: "Enter a valid 6-digit pin code" }
            })} />
            {errors.pincode && <span>{errors.pincode.message}</span>}
          </div>
          <div className="form-group">
            <label>City</label>
            <input {...register("city")} />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>State</label>
            <input {...register("state")} />
          </div>
          <div className="form-group">
            <label>Country</label>
            <input {...register("country")} />
          </div>
        </div>

        {/* Startup */}
        <div className="form-row">
          <div className="form-group">
            <label>Startup Company?</label>
            <select {...register("startup", { required: "Please select an option" })}>
              <option value="">Select</option>
              <option>Yes</option>
              <option>No</option>
            </select>
            {errors.startup && <span>{errors.startup.message}</span>}
          </div>
          <div className="form-group">
            <label>Govt. Funding?</label>
            <select {...register("govFunding")}>
              <option value="">Select</option>
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>
        </div>

        <div className="form-group">
          <label>If Yes, Scheme Name</label>
          <input {...register("govSchemeName")} />
        </div>

        {/* Innovation */}
        <div className="form-row">
          <div className="form-group">
            <label>Field of Innovation</label>
            <input {...register("innovationField")} />
          </div>
          <div className="form-group">
            <label>If Other</label>
            <input {...register("innovationOther")} />
          </div>
        </div>

        {/* Patents */}
        <div className="form-row">
          <div className="form-group">
            <label>Patents Filed?</label>
            <select {...register("patent")}>
              <option value="">Select</option>
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>
          <div className="form-group">
            <label>How Many?</label>
            <input
              type="number"
              {...register("patentCount", {
                validate: (value) => {
                  if (watchPatent === "Yes" && !value) return "Please enter patent count";
                  return true;
                }
              })}
            />
            {errors.patentCount && <span>{errors.patentCount.message}</span>}
          </div>
        </div>

        {/* Innovative Ideas */}
        <div className="form-row">
          <div className="form-group">
            <label>Innovative Ideas?</label>
            <select {...register("innovativeIdeas")}>
              <option value="">Select</option>
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>
          <div className="form-group">
            <label>How Many?</label>
            <input
              type="number"
              {...register("ideasCount", {
                validate: (value) => {
                  if (watchIdeas === "Yes" && !value) return "Please enter idea count";
                  return true;
                }
              })}
            />
            {errors.ideasCount && <span>{errors.ideasCount.message}</span>}
          </div>
        </div>

        {/* Source */}
        <div className="form-group">
          <label>Source of Ideas</label>
          <input {...register("ideaSource")} />
        </div>

        {/* Expert Discussion */}
        <div className="form-row">
          <div className="form-group">
            <label>Need Expert Discussion?</label>
            <select {...register("expertDiscussion")}>
              <option value="">Select</option>
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>
          <div className="form-group">
            <label>Book Time Slot</label>
            <input type="datetime-local" {...register("timeSlot")} />
          </div>
        </div>

        <button type="submit">Submit</button>

        {submitted && (
          <div className="success-message">
            ✅ Submitted on {timestamp}
          </div>
        )}
      </form>
    </div>
  );
}

export default LeadRegistration;
