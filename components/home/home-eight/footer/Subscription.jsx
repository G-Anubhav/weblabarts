// "use client";
// import Field from "@/components/common/Field";
// import { useForm } from "react-hook-form";
// import { ToastContainer, toast } from "react-toastify";
// function Subscription() {
// 	const {
// 		register,
// 		handleSubmit,
// 		reset,
// 		formState: { errors },
// 	} = useForm();
// 	const submitForm = (formData) => {
// 		toast("Form Submited!");
// 		reset();
// 		console.log("Submite Form Data = ", formData);
// 	};
// 	return (
// 		<div className="sofax-subscription-field5">
// 			<ToastContainer position="bottom-right" />
// 			<form onSubmit={handleSubmit(submitForm)}>
// 				<Field error={errors.email}>
// 					<input
// 						{...register("email", { required: "Email is required." })}
// 						type="email"
// 						name="email"
// 						id="email"
// 						className="field-item"
// 						placeholder="Enter Your Email"
// 					/>
// 				</Field>
// 				<button type="submit" className="sofax-subcribe-btn2">
// 					Subscribe now
// 				</button>
// 			</form>
// 		</div>
// 	);
// }

// export default Subscription;

"use client";
import Field from "@/components/common/Field";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";

function Subscription() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const submitForm = async (formData) => {
	try {
	  const response = await fetch('/api/subscribeEmail', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ email: formData.email }),
	  });
  
	  const result = await response.json();
  
	  if (response.ok) {
		toast.success("Subscribed successfully!");
		reset();
	  } else {
		toast.error(result.error);
	  }
  
	  console.log("Submitted Subscription Data =", formData);
	} catch (error) {
	  console.error("Error during subscription:", error);
	  toast.error("An error occurred while subscribing.");
	}
  };

  return (
    <div className="sofax-subscription-field5">
      <ToastContainer position="bottom-right" />
      <form onSubmit={handleSubmit(submitForm)}>
        <Field error={errors.email}>
          <input
            {...register("email", { required: "Email is required." })}
            type="email"
            name="email"
            id="email"
            className="field-item"
            placeholder="Enter Your Email"
          />
        </Field>
        <button type="submit" className="sofax-subcribe-btn2">
          Subscribe now
        </button>
      </form>
    </div>
  );
}

export default Subscription;