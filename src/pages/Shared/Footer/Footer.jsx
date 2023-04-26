import React from 'react';

function Footer() {
  return (
    <footer className="bg-slate-900 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="text-white">
            <h3 className="font-bold text-xl mb-4">About Savory Bites</h3>
            <p>Savory Bites is a family-owned restaurant that has been serving delicious food for over 20 years. Our menu features a variety of dishes made with fresh, locally-sourced ingredients, and we take pride in providing friendly and attentive service to all of our customers.</p>
          </div>
          <div className="text-white">
            <h3 className="font-bold text-xl mb-4">Hours of Operation</h3>
            <p>Monday - Friday: 11am - 10pm</p>
            <p>Saturday - Sunday: 10am - 11pm</p>
          </div>
          <div className="text-white">
            <h3 className="font-bold text-xl mb-4">Contact Savory Bites</h3>
            <p>123 Main Street</p>
            <p>New York, NY 10001</p>
            <a href="mailto:info@savorybites.com" className="text-gray-400 hover:text-orange-500 transition-colors duration-300 block my-2">info@savorybites.com</a>
            <a href="tel:(123) 456-7890" className="text-gray-400 hover:text-orange-500 transition-colors duration-300 block my-2">(123) 456-7890</a>
          </div>
        </div>
        <hr className="border-gray-700 my-8" />
        <p className="text-gray-400 text-center">© 2023 Savory Bites. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
