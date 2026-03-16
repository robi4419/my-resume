const navLinks = ["skills", "projects", "experience", "contact"];

function Navbar() {
  return (
    <nav>
      <a href="#" className="nav-logo">
        VR
      </a>
      <ul className="nav-links">
        {navLinks.map((link) => (
          <li>
            <a href={"#" + link}>{link}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
export default Navbar;
