import React from "react";

export default function Footer() {
  return (
    <footer className="bg-dark text-white p-4 text-center mt-8 shadow">
      <p>&copy; {new Date().getFullYear()} Dominika Berg</p>
    </footer>
  );
}