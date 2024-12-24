import React from "react";

function Footer() {
  const date = new Date().getFullYear(); // Extract only the year
  return (
    <div className="footer">
      <p>© {date} created By Fatou</p>
    </div>
  );
}

export default Footer;
