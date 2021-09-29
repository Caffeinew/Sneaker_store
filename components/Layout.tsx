import React from "react";

const Layout: React.FC<React.ReactNode> = ({ children }) => {
  return (
    <div className="grid grid-cols-12 py-16">
      <div className="grid grid-cols-3 col-span-10 col-start-2 gap-x-16 gap-y-32">
        {children}
      </div>
    </div>
  );
};

export default React.memo(Layout);
