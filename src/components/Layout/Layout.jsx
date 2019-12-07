import Sidebar from "../Sidebar";

import "./layout.css";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Sidebar />
      <div className="container">{children}</div>
    </div>
  );
};

export default Layout;
