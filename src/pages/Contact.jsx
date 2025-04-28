import React from "react";
import HomeContact from "../components/HomeContact";

const Accueil = () => {
  return (
    <main>
      <section className="relative min-h-[55vh] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://www.2imu.com/wp-content/uploads/2015/10/contact-banner.jpg"
            alt="Contact Hero"
            className="w-full h-full object-cover"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/20"></div>
          {/* Background pattern */}
          <div className="absolute w-96 h-96 rounded-full bg-[#ea384c] blur-3xl -top-20 -right-20 opacity-20"></div>
          <div className="absolute w-96 h-96 rounded-full bg-[#ea384c] blur-3xl -bottom-20 -left-20 opacity-20"></div>
        </div>
      </section>
      <HomeContact />
    </main>
  );
};

export default Accueil;
