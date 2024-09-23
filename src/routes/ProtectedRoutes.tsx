import { useCurrentToken } from "@/redux/features/user/userSlice";
import { useAppSelector } from "@/redux/hook";
import { ReactNode } from "react";

import { Navigate } from "react-router-dom";

const ProtectedRoutes = ({ children }: { children: ReactNode }) => {
  const token = useAppSelector(useCurrentToken);

  // console.log(token);
  if (!token) {
    return <Navigate to="/login" replace={true} />;
  }
  return children;
};

export default ProtectedRoutes;
