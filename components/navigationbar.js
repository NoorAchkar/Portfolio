import React, { useState } from "react";
import avatar from "../pages/pictures/NoorProfile.JPG";
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Navbar() {

  return (
    <div className={styles.navigation}>
      <a href="..">
        <Image src={avatar} 
              alt="picture of me"
              width={50}
              height={50}
              priority
          />
      </a>
      <a href="./about">
          <h3>About </h3>
      </a>
      <a href="./experience">
          <h3>Experience </h3>
      </a>
      <a href="./leadership">
          <h3>Leadership </h3>
      </a>
      <a href="./projects">
          <h3>Projects </h3>
      </a>
      <a href="./courses">
          <h3>Courses </h3>
      </a>
      <a href="./contact">
          <h3>Contact </h3>
      </a>
      
      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family:
            Menlo,
            Monaco,
            Lucida Console,
            Liberation Mono,
            DejaVu Sans Mono,
            Bitstream Vera Sans Mono,
            Courier New,
            monospace;
        }
      `}</style>

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
