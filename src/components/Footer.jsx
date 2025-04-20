import React from 'react';

const Footer = () => {
  return (
    <div>
      <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4 mx-auto px-8 md:px-12 lg:px-16 xl:px-24">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by
            FlagshipFlagOff Ltd
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
