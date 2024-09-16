import React from "react";
import Nav from "./Nav";
import { ThemeProvider } from "../theme/Thememanage"; // Import ThemeProvider

const LayoutHome = ({ children }) => {
  return (
    <>
      <div className="bg-white dark:bg-gray-950 min-h-screen ">
        <ThemeProvider>
          <div className="container mx-auto my-auto min-h-screen  ">
            <Nav />
            <main>{children}</main>
          </div>
        </ThemeProvider>
      </div>
    </>
  );
};

export default LayoutHome;
