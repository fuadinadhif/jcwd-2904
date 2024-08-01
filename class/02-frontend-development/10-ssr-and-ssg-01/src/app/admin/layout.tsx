import React from "react";

import SideNav from "@/components/side-nav";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-8">
      <SideNav />
      {children}
    </div>
  );
}
