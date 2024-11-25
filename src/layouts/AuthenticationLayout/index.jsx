import { Outlet } from "react-router-dom";
export const AuthenticationLayout = () => {
  return (
    <>
      <div className="bg-parrot" style={{ minHeight: "100vh" }}>
        <Outlet />
      </div>
    </>
  );
};
