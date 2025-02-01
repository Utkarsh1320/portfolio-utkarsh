import Explorer from "./Explorer";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Pages from "./Pages";
import SideBar from "./SideBar";
import { useTheme } from "../context/ThemeContext";

function Main() {
  const { theme } = useTheme();
  return (
    <div className={`theme-${theme} h-screen flex flex-col`}>
      <Navbar />
      <main className="flex flex-grow overflow-hidden">
        <div className="flex-shrink-0">
          <SideBar />
        </div>
        <div className="flex-grow flex overflow-hidden">
          <Explorer />
          <Pages />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Main;
