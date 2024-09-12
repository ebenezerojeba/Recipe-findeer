import React from 'react';

const Footer = () => {
  return (
    <footer className='py-4 text-center'>
      <div className='text-gray-400 text-xs'>
      <p className="text-sm text-gray-500 mt-5">
        © {new Date().getFullYear()} MyRecipeFinder. All rights reserved.
      </p>
        Developed by{' '}
        <span className="text-blue-400">
          <a
            href="https://ebenezerojeba.vercel.app/"
            className="underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ojeba Ebenezer
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
