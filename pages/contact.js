import Head from 'next/head';
import NavBar from '../components/navigationbar';
import styles from '../styles/Home.module.css';
import {
  Email,
  LinkedIN,
  ArrowIcon,
  PhoneIcon,

} from "../components/icons";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Noor's Portfolio</title>
      </Head>

      <NavBar />

      <main>
        
        <h1 className={styles.title}>
          <a>Contact Me</a>
        </h1>

        <div className={styles.contactgrid}>
          <a href="https://www.linkedin.com/in/noor-maria-achkar-a9b82823b/" className={styles.contactcardlinkedin}>
            <h3> <LinkedIN /> LinkedIn
            <arrowicon><ArrowIcon /></arrowicon></h3> 
          </a>

          <a href="tel:+12028940606" className={styles.contactcardphone}>
            <h3> <PhoneIcon /> Phone
            <arrowicon><ArrowIcon /></arrowicon></h3> 
            <p>+1 (202) 894-0606</p>
          </a>
          
          <a href="mailto:achkarnoormaria@gmail.com" className={styles.contactcardlinkedin}>
            <h3> <Email /> Email  
            <arrowicon><ArrowIcon /></arrowicon></h3> 
            <p>achkarnoormaria@gmail.com</p>
          </a>

          <a href="tel:+96178884000" className={styles.contactcardphone}>
            <h3> <PhoneIcon /> Whatsapp  
            <arrowicon><ArrowIcon /></arrowicon></h3> 
            <p>+961 78 884 000</p>
          </a>
        </div>
        <br />
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
