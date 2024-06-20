import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Layout from "../layout/layout";
interface PrivateRouteProps {
  isAuthenticated: boolean;
  redirectPath: string;
}

const PrivateRoutes: React.FC<PrivateRouteProps> = ({
  redirectPath,
  isAuthenticated,
}) => {
  return isAuthenticated ? (
    <Layout>
      <Outlet />
    </Layout>
  ) : (
    <Navigate to={redirectPath} />
  );
};

export default PrivateRoutes;
