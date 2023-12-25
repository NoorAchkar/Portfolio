import Head from 'next/head';
import NavBar from '../components/navigationbar';
import styles from '../styles/Home.module.css';
import Image from 'next/image';
import dsc from "./pictures/DSC.png";
import gdl from "./pictures/GDL.png";
import jfam from "./pictures/Johnson.png";
import afel from "./pictures/afel.png";
import french from "./pictures/ND.png";
import { useState } from 'react';

const YourComponent1 = () => {
    const [isRotated, setIsRotated] = useState(false);
  
    const handleClick = () => {
      setIsRotated(!isRotated);
    };
  
    return (
      <div className={`${styles.rotateImageContainer} ${isRotated ? styles.rotated : ''}`} onClick={handleClick}>
        <Image src={dsc} width={400} height={400} alt="Donner Sang Compter" />
      </div>
    );
};

export default function Home() {
    const [hoveredImage, setHoveredImage] = useState(null);
    const handleMouseEnter = (imageSrc) => {
        setHoveredImage(imageSrc);
      };
    
      const handleMouseLeave = () => {
        setHoveredImage(null);
      };
  return (
    <div className={styles.container}>
      <Head>
        <title>Noor's Portfolio</title>
      </Head>

      <NavBar />

      <main>
        
        <h1 className={styles.title}>
          <gradient-text>Leadership & Volunteering</gradient-text>
        </h1>

        <div className={styles.leadership}>
            <div
                className={`${styles.imageFix} ${hoveredImage === french ? styles.opacity : ''}`}
                onMouseEnter={() => handleMouseEnter(french)}
                onMouseLeave={handleMouseLeave}
            >
                <Image src={french} alt="picture of ND" width={200} height={200} priority/>
                {hoveredImage === french && (
                <div className={styles.overlayText}>
                    <p>French Club</p>
                </div>
                )}
                <p className={styles.imageText}> French </p>
            </div>
            <a href="https://johnsonfamilyhall.nd.edu/"> 
                <image-fix>
                        <Image src={jfam} alt="picture of Johnson Family Hall" width={200} height={200}/>
                </image-fix>
            </a>
            <a href="https://www.guidesduliban.org/"> 
                <image-fix>
                        <Image src={gdl} alt="picture of Guides du Liban" width={250} height={200}/>
                </image-fix>
            </a>
            <a href="https://dsclebanon.org/en/"> 
                <image-fix>
                        <Image src={dsc} alt="picture of Donner Sang Compter" width={200} height={200}/>
                </image-fix>
            </a>
            <a href="https://afel.org.lib/"> 
                <image-fix>
                        <Image src={afel} alt="picture of AFEL" width={200} height={200}/>
                </image-fix>
            </a>
        </div>

      </main>

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
}
