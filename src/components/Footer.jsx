import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 text-center">
      <h3 className="text-xl font-semibold">
        FakeStore © {new Date().getFullYear()}
      </h3>
      <p className="text-sm opacity-80">All rights reserved.</p>

      {/* Fake Contact Info */}
      <div className="mt-4 space-y-2">
        <p className="text-sm">📍 Address: 123 Fake St, Faketown, FS 12345</p>
        <p className="text-sm">📞 Phone: (555) 123-4567</p>
        <p className="text-sm">✉️ Email: support@fakestore.com</p>
      </div>
    </footer>
  );
};

export default Footer;
