const Footer = () => {
  return (
    <div className="flex justify-between items-center flex-wrap mt-28 border-t border-gray-400 sm:px-16 px-6 py-10">
      <p className="text-white">All Right Reserved @Copyright 2023</p>
      <div className="flex items-center gap-5 text-white">
        <p>Terms of Service</p>
        <p>Privacy Policy</p>
        <p className="mr-20">Product</p>
        <div className="flex items-center gap-5">
          <img src="/facebook.png" alt="Facebook" />
          <img src="/instagram.png" alt="Instagram" />
          <img src="/youtube.png" alt="Youtube" />
          <img src="/twitter.png" alt="twitter" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
