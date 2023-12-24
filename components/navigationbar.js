import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import styles from '../styles/Home.module.css';

const Navbar = () => {
    const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "About",
    },
    {
      id: 2,
      link: "Projects",
    },
    {
      id: 3,
      link: "Experience",
    },
    {
      id: 4,
      link: "Courses",
    },
    {
      id: 5,
      link: "Leadership",
    },
    {
        id: 6,
        link: "Contact",
      },
  ];

  return (
    <div>
    <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family:
            -apple-system,
            BlinkMacSystemFont,
            Segoe UI,
            Roboto,
            Oxygen,
            Ubuntu,
            Cantarell,
            Fira Sans,
            Droid Sans,
            Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
};

export default Navbar;