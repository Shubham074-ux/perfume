import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Typography, Button, IconButton } from "@material-tailwind/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

export function NavbarDark() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <Navbar
      variant="gradient"
      color="blue-gray"
      className="mx-auto max-w-screen-xl bg-black from-blue-gray-900 to-blue-gray-800 px-4 py-3 rounded-none"
    >
      <div className="flex items-center justify-between">
        {/* BrandLogo */}

        <Typography
          as="a"
          href="/"
          variant="h6"
          className="mr-4 ml-2 cursor-pointer py-1.5 text-white"
        >
          <span className="text-xl" style={{ color: "hotpink" }}>
            Aro <span style={{ color: "lightblue", fontWeight: "bold" }}>Mania</span>
          </span>
        </Typography>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <IconButton
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white"
          >
            {isMenuOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </IconButton>
        </div>

        <div className="hidden md:flex  items-center space-x-4">
          <Link to="/product-list">
            <Button className="text-black " style={{ backgroundColor: "lightBlue"}}>
              Products
            </Button>
          </Link>
          <Link to="/">
            <Button className="text-black " style={{ backgroundColor: "lightBlue" }}>
              Home
            </Button>
          </Link>
        </div>
      </div>

{/* //when menu is open show the navigation Button as hamburger  */}
      {isMenuOpen && (
        <div className="mt-4 flex flex-col items-center justify-center space-y-2 md:hidden">
          <Link to="/product-list">
            <Button className="text-black " style={{ backgroundColor: "lightBlue" , width:"100%",border:"2px solid black" }}>
              Products
            </Button>
          </Link>
          <Link to="/">
            <Button className="text-black  " style={{ backgroundColor: "lightBlue" , width:"100%",border:"2px solid black" }}>
              Home
            </Button>
          </Link>
        </div>
      )}
    </Navbar>
  );
}

export default NavbarDark;
