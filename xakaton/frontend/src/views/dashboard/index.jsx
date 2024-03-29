import { Outlet } from "react-router-dom";
const index = () => {
  return (
    <>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
};

export default index;
