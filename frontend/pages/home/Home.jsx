import React from "react";
import Sidebar from "../../components/sidebar/Sidebar.jsx";
import MessageContainer from "../../components/messages/MessageContainer.jsx";

const Home = () => {
  return (
    <div className="        
        flex
        sm:h-[450px] 
        md:h-[520px]
        rounded-2xl
        overflow-hidden
        bg-white/10
        backdrop-blur-lg
        border border-white/20
        shadow-2xl">
      <Sidebar />
      <MessageContainer />
    </div>
  );
};

export default Home;
