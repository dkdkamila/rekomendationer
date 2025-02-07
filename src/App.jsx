import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import RecommendationForm from "./components/RecommendationForm";

export default function App() {
    return (
      <div>
        <Header />
        <div className="container py-4 d-flex flex-column align-items-center">
          <RecommendationForm />
        </div>
        <Footer />
      </div>
    );
  }