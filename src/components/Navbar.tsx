import { links } from "../constants";

const Navbar = () => {
  return (
    <nav className="w-full flex py-4 justify-between items-center navbar">
      <h2 className="font-bold cursor-pointer text-base text-white">Logo</h2>

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {links.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-base ${
              index === links.length - 1 ? "mr-0" : "mr-20"
            } text-white`}
          >
            <a href={`#${nav.url}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
