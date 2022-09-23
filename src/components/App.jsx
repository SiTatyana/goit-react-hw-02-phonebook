import React from "react";
import Contacts from "./Contacts/Contacts";

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 23,
        color: '#010101'
      }}
    >
      <Contacts />
    </div>
  );
};
