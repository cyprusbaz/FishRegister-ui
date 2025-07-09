import React from "react";
import { useNavigate } from "react-router-dom";
import { Hero } from "../components/home/Hero";

export const Home = () => {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Hero />
    </div>
  );
};
