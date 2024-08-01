import React from "react";

export default function DashboardLayout({
  children,
  employees,
  revenues,
  visitors,
}: {
  children: React.ReactNode;
  employees: React.ReactNode;
  revenues: React.ReactNode;
  visitors: React.ReactNode;
}) {
  return (
    <div className="flex flex-col w-full">
      {children}
      <div className="flex gap-2 h-32">
        {employees}
        {revenues}
        {visitors}
      </div>
    </div>
  );
}
