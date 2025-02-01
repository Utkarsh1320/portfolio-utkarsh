import Explorer from "./Explorer";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Pages from "./Pages";
import SideBar from "./SideBar";
import { useTheme } from "../context/ThemeContext";

function Main() {
  const { theme } = useTheme();
  return (
    <div className={`theme-${theme}`}>
      <Navbar />
      <main className=" flex">
        <SideBar />
        <Explorer />
        <Pages />
      </main>
      <Footer />
    </div>
  );
}

export default Main;
