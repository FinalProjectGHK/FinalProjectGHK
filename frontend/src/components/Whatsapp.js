import React from "react";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import "./Whatsapp.css";
const Whatsapp = () => {
  return (
    <FloatingWhatsApp
      phoneNumber="+85266055193"
      accountName="Support"
      avatar="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
      statusMessage="Typically replies within 5 minutes"
      chatMessage="Hello! How can we help you today?"
      placeholder="Type a message..."
      allowClickAway={true}
      //allowEsc={true}
      chatboxHeight={285}
      notificationStyles={{ backgroundColor: "#white" }}
      buttonStyle={{
        backgroundColor: "#705B38",
        width: "40px",
        height: "40px",
        bottom: "30px",
        right: "30px",
        transform: "translate(50%, 50%)",
      }}
      chatboxStyle={{ bottom: "50px", right: "50px" }}
      style={{ width: "0", height: "0", position: "absolute", zIndex: 1200 }}
    />
  );
};
export default Whatsapp;
