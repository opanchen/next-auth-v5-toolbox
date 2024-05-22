import { Suspense } from "react";
import { PulseLoader } from "react-spinners";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full flex items-center justify-center bg-blue-gradient">
      <Suspense fallback={<PulseLoader color="#fff" />}>{children}</Suspense>
    </div>
  );
};

export default AuthLayout;
