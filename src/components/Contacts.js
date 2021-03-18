import React, { useState } from "react";
import emailjs from "emailjs-com";
import { useForm, useform } from "react-hook-form";

const Contacts = () => {
    const [successMessage, setSuccessMessage] = useState("");
    const { register, handleSubmit, errors } = useForm();

    const serviceID = "service_ID";
    const templateID = "template_ID";
    const userID = "user_Sg3RVBM7YAJRVDStlI8dk";

    const onSubmit = (data, r) => {
        sendEmail(
            serviceID, 
            templateID,
            {
                name: data.name,
                phone: data.phone,
                email: data.email,
                subject: data.subject,
                description: data.description
            },
            userID
            )
            r.target.reset();
    }

    const sendEmail = (serviceID, templateID, variables, userID) => {
        emailjs.send(serviceID, templateID, variables, userID)
          .then(() => {
            setSuccessMessage("Form sent successfully! I'll contact you as soon as possible.");
          }).catch(err => console.error(`Please double check to make sure all information is valid${err}`));
      }

    return (
        <div id="contacts" className="contacts">
            <div className="text-center">
            <h1>Contact Me</h1>
            <p>Please fill out the discreption below and let's build your dream website and/or App together!!
                <br></br>"phone number is optional" </p>
                <span className="success-message">{ successMessage }</span>
            </div>
            <div className="container">
                <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                    <div className="col-md-6 col-xs-12">
                        {/* NAME INPUT */}
                        <div className="text-center">
                        <input
                        type="text"
                        className="form-control"
                        placeholder="Name"
                        name="name"
                        ref={
                            register({
                                required: "Please enter your name",
                                maxLength: {
                                    value: 20,
                                    message: "Please enter a name with fewer than 20 characters"
                                }
                            })
                        }
                        />
                        <div className="line"></div>
                        </div>
                        <span className="error-message">
                            { errors.name && errors.name.message }
                        </span>
                        {/* PHONE INPUT */}
                        <div className="text-center">
                        <input
                        type="text"
                        className="form-control"
                        placeholder="Phone Number"
                        name="phone"
                        />
                        <div className="line"></div>
                        </div>
                        {/* EMAIL INPUT */}
                        <div className="text-center">
                        <input
                        type="email"
                        className="form-control"
                        placeholder="Email"
                        name="email"
                        ref={
                            register({
                                required: "Please enter your email address",
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: "Please enter valid email address"
                                }
                            })
                        }
                        />
                        <div className="line"></div>
                        </div>
                        <span className="error-message">
                            { errors.email && errors.email.message }
                        </span>
                        {/* SUBJECT INPUT */}
                        <div className="text-center">
                        <input
                        type="text"
                        className="form-control"
                        placeholder="Subject"
                        name="subject"
                        ref={
                            register({
                                required: "OOPS, you forgot to add your subject",
                            })
                        }
                        />
                        <div className="line"></div>
                        </div>
                        <span className="error-message">
                            { errors.subject && errors.subject.message }
                        </span>
                    </div>
                    <div className="col-md-6 col-xs-12">
                        {/* DESCRIPTION */}
                        <div className="text-center">
                        <textarea
                        type="text"
                        className="form-control"
                        placeholder="In a couple sentences, please describe your dream project..."
                        name="description"
                        ref={
                            register({
                                required: "Please describe your project or reason for contact...",
                            })
                        }
                        ></textarea>
                        <div className="line"></div>
                        </div>
                        <span className="error-message">
                            { errors.description && errors.description.message }
                        </span>
                        <button className="btn-main-offer contact-btn" type="submit" >Build your Dream</button>
                    </div>
                </div>
                </form>
            </div>
        </div>
    )
}

export default Contacts
