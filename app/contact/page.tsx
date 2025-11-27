"use client";

import { useState } from "react";
import From from "@/components/from/From"

export default function ContactPage() {
  

  

  

  return (
    <>
   
    
    <div className=" bg-gray-50 px-6 py-16">
      <div className=" mx-auto bg-white p-10 rounded-2xl shadow-xl">
       

 <From/>

        

       
        <div className="mt-14">
          <h2 className="text-3xl font-bold text-gray-700 mb-6 text-center">
            Our Location
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Address Details */}
            <div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">📍 Address</h3>
              <p className="text-gray-600 leading-7">
                Your Company Name<br />
                123 Business Street,<br />
                Near City Center,<br />
                Mumbai, Maharashtra, 400001<br />
                India
              </p>

              <h3 className="text-xl font-bold mt-6 mb-3 text-gray-800">📞 Contact</h3>
              <p className="text-gray-600">
                Phone: +91 9876543210 <br />
                Email: support@yourcompany.com
              </p>
            </div>

            {/* Google Map */}
            <div className="rounded-xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609796834!2d72.74109855675492!3d19.082522329270118!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c63012ecf52d%3A0x5a18b9808e32e5df!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1704981400000!5m2!1sen!2sin"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
