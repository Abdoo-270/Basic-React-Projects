import { FaBars } from "react-icons/fa";
import NavLinks from "./NavLinks";
import { useGlobalContext } from "./context";
const Navbar = () => {
  const { openSidebar, setPageId } = useGlobalContext();
  const handleSubmenu = (e) => {
    //console.log(e.target);
    if (!e.target.classList.contains("nav-link")) {
      setPageId(null);
    }
  };
  return (
    <nav>
      <div className="nav-center" onMouseOver={handleSubmenu}>
        <h3 className="logo">strapi</h3>
        <button className="toggle-btn" onClick={() => openSidebar()}>
          <FaBars />
        </button>
        <NavLinks />
      </div>
    </nav>
  );
};

export default Navbar;
