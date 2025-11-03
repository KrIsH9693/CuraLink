import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 py-6 mt-10 text-center">
      <p>
        &copy; {new Date().getFullYear()} CuraLink. All rights reserved.
      </p>
    </footer>
  );
}
