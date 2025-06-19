// ContactLinks.jsx

import React from 'react';
import { FaFacebook, FaWhatsapp } from 'react-icons/fa';
import instapay from "../../assets/instapay.png"; // استبدل هذا بمسار الصورة الصحيح
import map from "../../assets/map.png"; // استبدل هذا بمسار الصورة الصحيح
import { SiVodafone } from 'react-icons/si'; // بديل رمزي لفودافون كاش

import './ContactLinks.css';

const ContactLinks = () => {
  return (
    <div className="contact-links">
      <a
        href="https://www.facebook.com/Baya3storeBS/?locale=ar_AR"
        target="_blank"
        rel="noopener noreferrer"
        className="contact-icon facebook"
        title="Facebook"
      >
        <FaFacebook />
      </a>

      <a
        href="https://wa.me/201001086899"
        target="_blank"
        rel="noopener noreferrer"
        className="contact-icon whatsapp"
        title="WhatsApp"
      >
        <FaWhatsapp />
      </a>
      <a
        href="https://wa.me/201004333323"
        target="_blank"
        rel="noopener noreferrer"
        className="contact-icon whatsapp2"
        title="WhatsApp"
      >
        <FaWhatsapp />
      </a>

      <a
        href="https://instapay.eg"
        target="_blank"
        rel="noopener noreferrer"
        className="contact-icon instapay"
        title="Instapay"
      >
        <img src={instapay} alt="instpay" />
      </a>

      <a
        href="tel:01068054888"
        className="contact-icon vodafone"
        title="Vodafone Cash"
      >
        <SiVodafone />
      </a>
      <a
        href="#"
        className="contact-icon map"
        title="location"
      >
        <img src={map} alt="map" />
      </a>
    </div>
  );
};

export default ContactLinks;
