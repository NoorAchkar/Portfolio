import Head from 'next/head';
import NavBar from '../components/navigationbar';
import styles from '../styles/Home.module.css';
import ey from './pictures/ey.png';
import Image from 'next/image';
import juke from './pictures/juke.jpeg';
import ND from './pictures/ND.png';
import Research from './pictures/NDResearch.jpeg';
import cslc from './pictures/cslc_logo.png';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Noor's Portfolio</title>
      </Head>

      <NavBar />

      <main>
        
        <h1 className={styles.title}>
          <a>Experience</a>
        </h1>

        <div className={styles.gridexperience}>
            <a className={styles.cardexperience}> 
                <Image src={Research} alt="picture of NDResearch" width={140} height={120}/>
                <div className={styles.experiencetitle}>Notre Dame Research
                    <p> This coming Spring semester, I will be doing research under Professor Diego Gomez-Zara at the 
                        University of Notre Dame. I will be focusing on Virtual Reality.
                    </p>
                </div>
            </a>
            <a className={styles.cardexperience}> 
                <Image src={ND} alt="picture of ND logo" width={140} height={120}/>
                <div className={styles.experiencetitle}>Notre Dame
                    <p> This past Fall, I worked as a Teaching Assistant for Fundamentals of Computing, supporting over 
                        150 students through office hours, lab sessions, and homework grading, dedicating an average 
                        of 9 hours per week.
                    </p>
                </div>
            </a>
            <a className={styles.cardexperience}> 
                <Image src={ey} alt="picture of EY" width={120} height={100}/>
                <div className={styles.experiencetitle}>Ernst & Young
                    <p> I interned this past summer at Ernst and Young as a Technology Consultant in their Chicago office.
                        Throughout my internship, I supported the finance team in the technology department by planning 
                        and addressing critical action items to ensure their progress and resolution, and their alignment with 
                        objectives. I successfully designed three business process documents, a master data document for 
                        my team, and journal entries on SAP, while earning my SAP Bronze Badge.
                    </p>
                </div>
            </a>
            <a className={styles.cardexperience}> 
                <Image src={juke} alt="picture of Juke" width={150} height={100}/>
                <div className={styles.experiencetitle}>Juke
                    <p> In Spring 2023, during my time in Silicon Valley, I interned as a Software Engineer for Juke, a startup
                        focused on live music experience. I designed and implemented a front-end page for the company website, 
                        using HTML, CSS, and Javascript. I focused on creating an engaging and user-friendly interface to 
                        enhance the overall user experience for 500+ clients, while enhancing the efficiency and speed of 
                        commonly used features through optimization, resulting in improved performance and responsiveness.
                    </p>
                </div>
            </a>
            <a className={styles.cardexperience}>
                
                <Image src={cslc} alt="picture of CSLC" width={180} height={100}/>
                <div className={styles.experiencetitle}>Center for the Study of Languages and Cultures
                    <p> During Fall 2022, I tutored 6 students a week individually and in groups in Arabic 
                        while helping build goal-setting strategies to foster progress and to enhance their 
                        comprehension of concepts and information.
                    </p>
                </div>
                
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
