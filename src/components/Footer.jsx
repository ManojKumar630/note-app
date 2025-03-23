//4. Create a Footer.jsx component that renders a <footer> element
//to show a copyright message in a <p> with a dynamically updated year.
import React from "react";

const currentYear = new Date().getFullYear(); // Dynamic year

export default function Footer() {
    return (
      <footer>
        <p>© {currentYear} Keeper App. All Rights Reserved.</p>
      </footer>
    );
  }

  