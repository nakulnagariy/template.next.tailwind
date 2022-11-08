import React, { useState } from "react";
const SideNavigationBar = () => {
    const [collapsed, setCollapsed] = useState(true)

    const handleCollapse = () => {
        setCollapsed(!collapsed)
    }

  return (
    <div>
      This is sidebar.
    </div>
  );
};

export default SideNavigationBar;
