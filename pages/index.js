import Head from 'next/head';
import styles from '../styles/Home.module.css';
import {
  GitHubIcon,
  Resume,
  LinkedIN,
  ArrowIcon,
} from "../components/icons";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Noor's Portfolio</title>
      </Head>

      <main>
        <h1 className={styles.title}>
          Hi, I'm <a>Noor!</a>
        </h1>

        <p className={styles.description}>
          My name is Noor Maria Achkar 
          <br></br>I am a Computer Engineering student at the University of Notre Dame
        </p>

        <div className={styles.informationgrid}>
          <a href="https://www.linkedin.com/in/noor-maria-achkar-a9b82823b/" className={styles.informationcard}>
            <h3> <LinkedIN /> LinkedIn  <ArrowIcon /></h3> 
          </a>

          <a href="https://github.com/NoorAchkar" className={styles.informationcard}>
            <h3> <GitHubIcon /> GitHub  <ArrowIcon /></h3> 
          </a>
          
          <a href="/Achkar-NoorMaria_Resume.pdf" download className={styles.informationcard}>
            <h3> <Resume /> Resume  <ArrowIcon /></h3> 
          </a>
        </div>
        <br />

        <div className={styles.grid}>
          <a href="./about" className={styles.card}>
            <h3>About &rarr;</h3>
            <p>Learn more about me, my skills, and my interests</p>
          </a>

          <a href="./projects" className={styles.card}>
            <h3>Projects &rarr;</h3>
            <p>Explore some interesting projects I have worked on</p>
          </a>

          <a href="./experience" className={styles.card}>
            <h3>Experience &rarr;</h3>
            <p>Discover my portfolio of work and technical experiences</p>
          </a>

          <a href="./courses" className={styles.card}>
            <h3>Courses &rarr;</h3>
            <p>
              Navigate through the different courses I have taken
            </p>
          </a>

          <a href="./leadership" className={styles.card}>
            <h3>Leadership &rarr;</h3>
            <p>
              Take a look at my leadership and volunteering activities
            </p>
          </a>

          <a href="./contact" className={styles.card}>
            <h3>Contact &rarr;</h3>
            <p>
              Feel free to reach out to me using the contact information
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
