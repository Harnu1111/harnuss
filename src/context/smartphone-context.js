import React, { createContext, useState } from "react";

export const SmartphoneContext = createContext(null)
const [card, Setcard] = useState;
export const SmartphoneContextProvider = () => {
  return <SmartphoneContext.Provider>
    {props.children}
  </SmartphoneContext.Provider>;
};

