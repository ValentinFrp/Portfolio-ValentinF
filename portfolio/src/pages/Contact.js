import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact-container flex flex-col items-center justify-center h-screen bg-black text-white text-center">
      <h1 className="text-6xl font-bold mb-4">Contactez-moi</h1>
      <p className="text-xl mb-8">
        Vous pouvez me joindre par email à{" "}
        <a href="mailto:valentinn.frappart@gmail.com" className="text-blue-500">
          valentinn.frappart@gmail.com
        </a>
      </p>
    </div>
  );
}

export default Contact;
