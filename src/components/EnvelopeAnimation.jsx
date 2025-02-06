import React from "react";
import { motion } from "framer-motion";
import heartEnvelope from "../assets/heart-envelope.webp";


export default function EnvelopeAnimation() {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0 }}
        className="mt-6 d-flex flex-column align-items-center text-center"
      >
        <motion.div 
          initial={{ y: 20 }} 
          animate={{ y: -20 }} 
          transition={{ repeat: Infinity, repeatType: "reverse", duration: 1 }}
          className="position-relative"
        >
          {/* Bild på kuvertet med hjärtat */}
          <img src={heartEnvelope} alt="Tack!" className="img-fluid" style={{ maxWidth: "200px" }} />
        </motion.div>
        <p className="fs-4 fw-bold mt-3">Tack för din hjälp!</p>
      </motion.div>
    );
  }