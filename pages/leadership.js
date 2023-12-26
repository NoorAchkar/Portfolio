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
            <a href="https://sao.nd.edu/groups/"> 
                <image-fix>
                        <Image src={french} alt="picture of ND logo" width={200} height={200}/>
                </image-fix>
            </a>
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

        <div className={styles.gridaboutme}>
          <a className={styles.cardaboutme}> 
            <p>        
              Since Fall 2022, I have been a member of the Board of the <bold>French Club</bold>. I coordinate weekly dinners, monthly movie 
              nights and two “Café Français” to promote French culture and language immersion for a group of 20+ students.
            <br></br>
            <br></br>
              During Fall 2022, I was a Signature Event Commissioner which means I organized, planned, and led <bold>Johnson Family 
              Feud </bold>(Johnson Family Hall’s Signature Event) to foster community engagement and bonding for more than 300 people.
            <br></br>
            <br></br>
              For 10 years in High School, I was a member at the <bold>Groupe Notre Dame - Jamhour</bold>, where I got promoted to Patrol Leader.
              During my time I organized four camps per year including a two-week wilderness camp during the summer, where 
              I led a team of 12 women. I contributed to the repainting of a hospital in Karantina, Lebanon, making a positive 
              impact on the facility and region.
            <br></br>
            <br></br>
            <bold>Donner Sang Compter (DSC)</bold> is a Non-Profit Non-Governmental Organization that promotes responsible 
              citizenship by raising awareness and actively encouraging voluntary blood donation in Lebanon. From Fall 2018 until Summer 
              2020, I attended bi-weekly meetings to update the school chapter on the club’s activities. 
              I also participated in several blood drives assisting blood donors to make the donation process as smooth as possible.
            <br></br>
            <br></br>
            <bold>AFEL (Association du Foyer de l'Enfant Libanais)</bold> is a non political, non religious NGO committed to protect, 
              nurture & rehabilitate children suffering from abuse & neglect. From 2017 to 2018, I helped disadvantaged students 
              with their homework twice a week and discussed their family issues and tried to alleviate stress by playing games.
            </p>
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
