import { Link } from "react-scroll";

interface NavProps {
  containerStyles: string; // Assuming containerStyles is a string
}

const Nav: React.FC<NavProps> = ({ containerStyles }) => {
  const links = [
    { name: "Home", target: "home", offset: -100 },
    { name: "About", target: "about", offset: -80 },
    { name: "Class", target: "class", offset: -80 },
    { name: "Team", target: "team", offset: -0 },
    { name: "Prices", target: "prices", offset: -40 },
    { name: "Testimonial", target: "testimonial", offset: -0 },
    { name: "Contact", target: "contact", offset: 0 },
  ];

  return (
    <nav className={`${containerStyles}`}>
      {links.map((link, index) => (
        <Link
          key={index}
          to={link.target}
          spy={true}
          smooth={true}
          offset={link.offset}
          duration={500}
          className="cursor-pointer hover:text-accent transition-all"
          activeClass="active"
        >
          {link.name.trim()}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
