import Head from 'next/head';
import styles from '../styles/Home.module.css';
import avatar from "./pictures/NoorProfile.JPG";
import Image from 'next/image';
import jamhour from "./pictures/jamhour.jpeg"
import notre_dame from "./pictures/Notre-Dame.png"
import google from "./pictures/google.png"
import ey from "./pictures/ey.png"

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Noor's Portfolio</title>
      </Head>

      <main>
        <h1 className={styles.title}>
            <a>About Me</a>
        </h1>
        <aboutmepicture>
        <Image src={avatar} 
              alt="picture of me"
              width={200}
              height={200}
              priority
        />
        </aboutmepicture>
        <div className={styles.gridaboutme}>
          <a href="http://www.ndj.edu.lb/" className={styles.cardaboutme}> 
            <image-fix>
              <Image src={jamhour} alt="picture of my high-school" width={100} height={100}/>
            </image-fix>
            <p>        
              Hi, my name is Noor Maria Achkar and I am a Senior studying Computer Engineering at the University of Notre demonstrates.
              I am originally from Beirut, Lebanon where I attended Collège Notre Dame de Jamhour. I passed the French Baccalaureate with
              Honors for General Sciences, emphasis on Sciences and Mathematics (SG). Some of my activities and societes included:
              Model United Nations Team (NDJMUN), Patrol Leader at the school-affiliated Scouts Program (GNDJ - Les Scouts du Liban),
              Student Government (Class and Grade Representative). I volunteered at AFEL (Association du Foyer de l'Enfant Libanais) and 
              at DSC (Donner Sang Compter). I also lived in Abu Dhabi, the United Arab Emirates.
            </p>
          </a>
              <br></br>
              <br></br>
          <a href="https://www.nd.edu/" className={styles.cardaboutme}>
            <image-fix>
              <Image src={notre_dame} alt="picture of notre dame" width={100} height={100} />
            </image-fix>
            <p>   
              At Notre Dame, I am currently an Incoming Research Assistant for Spring 2024. I am a member of the Board of the French Club.
              Fall 2023, I was a Fundamentals of Computing Teaching Assistant and was very lucky to get selected to attend the Grace Hopper
              Conference. That same semester, I made the Dean's List. During the Spring of the same year, I was fortunate enough to
              intern and study in Silicon Valley. Before that, I worked for the Center for the Study of Languages and 
              Cultures as an Arabic Tutor and was a Signature Events Commissioner for my dorm, Johnson Family Hall.
            </p>
          </a>
              <br></br>
              <br></br>
          <a className={styles.cardaboutme}>
            <p> 
              I am passionate about problem solving, Product and Project Mangement, UX/UI design, Human Computer Interactions and Computer Graphics.
              I have a wide variety of skills: from computing (Matlab, C, C++, Pyhton, Vue.js, Javascript, CSS, HTML, Figma) to business tools 
              and processes (Microsoft PowerPoint, Microsoft Excel, Azure DevOps, SAP Products). Additionally, I possess proficiency in project 
              management, collaborative teamwork, organizational skills and adaptation skills.
              Two current certificates I have accomplished are:
              <br></br>
                <Image src={google} alt="picture of google" width={30} height={30} />
                Foundations of User Experience (UX) Design - Issued by Google in Aug 2023
              <br></br>
                <Image src={ey} alt="picture of ey" width={30} height={30} />
                EY SAP - Foundations - Bronze Learning (2023) - Issued by EY in July 2023
              <br></br>
              <br></br>
              Some fun facts about me: I am a native speaker of three languages (French, Arabic, and English), 
              and am learning a fourth (Spanish). I enjoy Skiing, Yoga, Reading, Traveling, and Mediterranean Cuisine
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
