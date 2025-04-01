"use client";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import Field from "../common/Field";
import Link from "next/link";
function ContactForm() {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm();
	const submitForm = async (formData) => {
		try {
		  const response = await fetch('/api/sendEmail', {
			method: 'POST',
			headers: {
			  'Content-Type': 'application/json',
			},
			body: JSON.stringify(formData),
		  });
	  
		  const result = await response.json();
	  
		  if (response.ok) {
			toast.success(result.message);
		  } else {
			toast.error(result.error);
		  }
	  
		  reset();
		  console.log("Submitted Form Data =", formData);
		} catch (error) {
		  console.error(error);
		  toast.error('An error occurred while sending the form.');
		}
	  };
	
	return (
		<div className="sofax-field-box ml-50">
			<ToastContainer position="bottom-right" />
			<h3>Send us a message</h3>
			<form onSubmit={handleSubmit(submitForm)}>
				<div className="row">
					<div className="col-lg-6">
						<div className="sofax-main-field">
							<Field label={<span>Full Name<span className="starlabel">*</span></span>} error={errors.name}>
								<input
									{...register("name", { required: "Full Name is required." })}
									type="text"
									name="name"
									id="name"
									placeholder="Enter Full Name..."
								/>
							</Field>
						</div>
					</div>
					<div className="col-lg-6">
						<div className="sofax-main-field">
							<Field label={<span>Company Name<span className="starlabel">*</span></span>} error={errors.companyname}>
								<input
									{...register("companyname", { required: "Company Name is required." })}
									type="text"
									name="companyname"
									id="companyname"
									placeholder="Enter Company Name..."
								/>
							</Field>
						</div>
					</div>
					<div className="col-lg-6">
						<div className="sofax-main-field">
							<Field label={<span>Email Address<span className="starlabel">*</span></span>} error={errors.email}>
								<input
									{...register("email", { required: "Email is required." })}
									type="email"
									name="email"
									id="email"
									placeholder="Enter Email..."
								/>
							</Field>
						</div>
					</div>
					<div className="col-lg-6">
						<div className="sofax-main-field">
							<Field label={<span>Phone Number<span className="starlabel">*</span></span>} error={errors.phone}>
								<input
									{...register("phone", { required: "Phone Number is required." })}
									type="phone"
									name="phone"
									id="phone"
									placeholder="Enter Phone Number..."
								/>
							</Field>
						</div>
					</div>
					<div className="col-lg-12">
						<div className="sofax-main-field">
							<Field label={<span>Service<span className="starlabel">*</span></span>} error={errors.service}>
								<select {...register("service", { required: "Service is required." })} name="service" id="service">
									<option value="">Select the Service...</option>
									<option value="Web Design & Development">Web Design & Development</option>
									<option value="Social Media Management & SEO">Social Media Management & SEO</option>
									<option value="Google Marketing Platform">Google Marketing Platform</option>
									<option value="Logo & Graphic Design">Logo & Graphic Design</option>
									<option value="App Development">App Development</option>
									<option value="Ecommerce Development">Ecommerce Development</option>
								</select>
							</Field>
						</div>
					</div>
					<div className="col-lg-12">
						<div className="sofax-main-field">
							<label>Message</label>
							<textarea {...register("textarea")}
								name="textarea"
								id="textarea"
								placeholder="Write Your Message..."
							></textarea>
						</div>
					</div>
					<div className="col-lg-12">
						<div className="sofax-form-box">
							<input {...register("checkbox", { required: "You must agree to the terms." })} type="checkbox" id="css" />
							<label htmlFor="css">
								By contacting us, you agree to our  
								<Link href="/terms-and-condition">
									<span> Terms of services </span>
								</Link>
								and
								<Link href="/privacy-policy">
									<span> Privacy Policy</span>
								</Link>
								.
							</label>
							{errors.checkbox && (<div className="text-danger">{errors.checkbox.message}</div>)}
						</div>
					</div>
					<div className="col-lg-12">
						<div className="tac">
							<button id="sofax-submit-btn" className="mt-30" type="submit">
								Send Message
							</button>
						</div>
					</div>
				</div>
			</form>
		</div>
	);
}

export default ContactForm;
