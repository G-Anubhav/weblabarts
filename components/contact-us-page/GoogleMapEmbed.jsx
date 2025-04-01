import React from "react";

function GoogleMapEmbed() {
    return (
        <div className="responsive-map">
            <iframe
                title="Legal Papers India"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3498.2679212995963!2d77.1844310741734!3d28.741416679130246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2290a24adc2aa39f%3A0x6393f050e681d51e!2sLegal%20Papers%20India!5e0!3m2!1sen!2sin!4v1742966496930!5m2!1sen!2sin"
                style={{ border: 0, borderRadius: "10px" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
    );
}

export default GoogleMapEmbed;
