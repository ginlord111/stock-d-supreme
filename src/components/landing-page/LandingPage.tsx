"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
const LandingPage = () => {
  // landing page with framer motion
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="text-center"
    >
      <p className="text-3xl font-bold text-white">Welcome to Daily Stock</p>
      <p className="text-lg text-white mt-4">
        Your one-stop solution for the latest stock market insights.
      </p>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
        className="mt-8"
      >
        <Image
          src="/stock-landing-page.jpg"
          alt="Stock Market Analysis"
          width={800}
          height={500}
          className="rounded-lg"
          priority
        />
      </motion.div>
    </motion.div>
  );
};

export default LandingPage;
