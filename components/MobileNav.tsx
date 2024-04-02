const ScrollLink = require("react-scroll").Link;

const Nav = ({ containerStyles }) => {
  const links = [
    { name: "home ", target: "home", offset: -100 },
    { name: "about ", target: "about", offset: -80 },
    { name: "class ", target: "class", offset: -80 },
    { name: "team ", target: "team", offset: -0 },
    { name: "prices ", target: "prices", offset: -40 },
    { name: "tesstimonial ", target: "testimonial", offset: -0 },
    { name: "contact ", target: "contact", offset: 0 },
  ];

  return (
    <nav className={`${containerStyles}`}>
      {links.map((link, index) => (
        <ScrollLink
          offset={link.offset}
          to={link.target}
          smooth
          spy
          activeClass="active"
          className="cursor-pointer hover:text-accent transition-all"
          key={index}
        >
          {link.name}
        </ScrollLink>
      ))}
    </nav>
  );
};

module.exports = Nav;