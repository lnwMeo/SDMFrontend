import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Nav from "./Nav";
import { ThemeProvider } from "../theme/Thememanage";
const Layoutaddmin = ({ children }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="bg-white dark:bg-gray-950 min-h-screen">
      <ThemeProvider>
        <div>
          <Sidebar isCollapsed={isCollapsed} toggleSidebar={toggleSidebar} />

          <div
            className={`flex-grow transition-all duration-300 ${
              isCollapsed ? "ml-16" : "ml-64"
            }`}
          >
            <Nav toggleSidebar={toggleSidebar} />
            <main className="p-4">{children}</main>
          </div>
        </div>
      </ThemeProvider>
    </div>
  );
};

export default Layoutaddmin;
