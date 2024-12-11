import { useState } from "react";
import Sidebar from "../../admin/Sidebar";
import Nav from "../../admin/Nav";
import { ThemeProvider } from "../../theme/Thememanage";
const Layoutaddmin = ({ children }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="bg-white dark:bg-gray-950 min-h-screen ">
      <ThemeProvider>
        <Sidebar isCollapsed={isCollapsed} toggleSidebar={toggleSidebar} />

      
          <div
            className="flex-grow transition-all duration-300 ml-14 "
          >
            <Nav  />
            <main className="p-4">{children}</main>
          </div>
    
      </ThemeProvider>
    </div>
  );
};

export default Layoutaddmin;
