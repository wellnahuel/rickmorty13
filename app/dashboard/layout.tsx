import React from "react";

interface Props {
  children: React.ReactNode;
}

async function DashboardLayout({ children }: Props) {
  return (
    <div className="text-red-700 p-8">
      <h3>Navbar</h3>
      {children}
    </div>
  );
}

export default DashboardLayout;
