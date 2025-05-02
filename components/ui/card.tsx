import { ReactNode } from "react";

export const Card = ({ children }: { children: ReactNode }) => {
  return (
    <div className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-lg  transition-shadow">
      {children}
    </div>
  );
};

export const CardContent = ({ children, className = "" }: { children: ReactNode; className?: string }) => {
  return <div className={`p-4 ${className}`}>{children}</div>;
};
