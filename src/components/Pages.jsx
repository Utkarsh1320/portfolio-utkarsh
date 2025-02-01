import { Outlet } from "react-router-dom";
import Tabs from "./Tabs";

function Pages() {
  return (
    <div className="w-full overflow-hidden bg-mainBg flex flex-col h-full">
      <Tabs />
      <section className="flex bg-mainBg overflow-y-auto">
        <Outlet />
      </section>
    </div>
  );
}

export default Pages;
