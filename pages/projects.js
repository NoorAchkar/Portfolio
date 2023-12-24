import Head from 'next/head';
import NavBar from '../components/navigationbar';
import styles from '../styles/Home.module.css';
import dorme from "./pictures/Dorm-e.jpg";
import globe from "./pictures/Globe.png";
import figma from "./pictures/Figma.png";
import datascience from "./pictures/DataScience.png";
import clue from "./pictures/clue.png";
import Image from 'next/image';
import {
  GitHubIcon,
  VideoIcon
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
          <a>Projects</a>
        </h1>

        <div className={styles.gridproject}>
            <a href="https://github.com/hjuarez2/DORME-Capstone-2023">
                <h1 className={styles.titleproject}>Capstone Design Project <GitHubIcon viewBox="0 -2 24 24" />  </h1>
            </a>
            <a className={styles.cardproject}>
                <Image src={dorme} alt="picture of Dorm-E" width={300} height={250}/>
                <p>   
                    
                    <br></br>
                    <br></br>
                    Developed an autonomous RC vehicle capable of selecting and  navigating specific routes across the 
                    University of Notre Dame to facilitate the delivery of small items between dormitories and buildings. 
                    This vehicle is called the Dormitory Operations and Resource Mover - Electric, henceforth referred to as DORM-E.    
                    <br></br>
                    <br></br>
                    Our project's primary goal is to develop an autonomous delivery system using a modified vehicle and 
                    a built-in network of nodes to enhance safety and convenience, especially during nighttime hours and 
                    inclement weather conditions. This initiative aims to significantly improve the quality of life for 
                    members of our community by making essential item deliveries more accessible and secure.
                </p>
            </a>
        </div>

        <div className={styles.gridproject}>
            <a href="https://github.com/NoorAchkar/Computer-Graphics-Project">
                <h1 className={styles.titleproject}>Computer Graphics Project <GitHubIcon viewBox="0 -2 24 24" />  </h1>
            </a>
            <a className={styles.cardproject}>
                <Image src={globe} alt="picture of globe" width={400} height={230}/>
                <p>   
                    <br></br>
                    In three.js, our team created a snow globe with a base scene inside that changes 
                    depending on the season. The user can change the current season using the button 
                    interface at the top of the page, which affects the scene inside the snow globe, the 
                    background area around the globe, and the background music. The scene contains a cozy house, 
                    multiple pine trees, a deciduous tree, a little red doghouse, and a small mailbox in the front yard. 
                    Our final project turned out slightly different than our initial proposal, in which we wanted to 
                    implement sliders to gradually change the seasons, but instead, we created the button user interface for that function.
                </p>
            </a>
        </div>

        <div className={styles.gridproject}>
            <a href="https://www.figma.com/file/uEjYrE7sBQhXNaWiqehgIy/Sports-Mate?type=design&node-id=0-1&mode=design&t=RFcDkTT1cX3LMdoF-0">
                <h1 className={styles.titleproject}>Human Computer Interaction Project 
                    <img
                    src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/figma-colored.svg"
                    width="26"
                    height="26"
                    viewBox="0 -2 24 24"
                    alt="Figma"
              />
                </h1>
            </a>
            <a className={styles.cardproject}>
                <Image src={figma} alt="picture of SportsMate App" width={200} height={300}/>
                <p>   
                    People worldwide frequently relocate from one city to another, often to pursue career opportunities or higher education. 
                    Several of us experienced this firsthand when we moved for internships or to attend Notre Dame. This raises the question: 
                    How can individuals in situations similar to ours forge new friendships and cultivate a sense of community when they find 
                    themselves in a new city? The answer is sports. Nearly everyone enjoys some form of physical activity, whether it's playing 
                    tennis, engaging in pick-up soccer, or simply hitting the gym. However, finding companions for these activities can be 
                    challenging when you're in a new locale.
                    <br></br>
                    <br></br>
                    This led us to come up with 'Sports Mate,' a specialized platform designed to function like a 'Tinder for sports.' 
                    The app serves as an invaluable resource for newcomers to a city, enabling them 
                    to connect with like-minded individuals for sporting activities. Users can not only 
                    find partners for sports they already enjoy but also explore new athletic interests. 
                    The app features an 'Instant Match' option, perfect for filling unexpected free time with a 
                    quick game or practice session. Moreover, 'Sports Mate' provides a comprehensive directory of 
                    local venues where users can engage in physical activity, complete with reviews and available amenities.
                    <br></br>
                    <br></br>
                    Beyond serving as a social lubricant for new residents, the app also fosters community-building through 
                    shared physical pursuits. Local sports clubs and facilities stand to benefit as well, as they can utilize 
                    the platform to publicize events and attract gatherings of individuals with aligned sporting interests. 
                    This ensures that 'Sports Mate' is not just an app but a holistic ecosystem for sports enthusiasts.
                </p>
            </a>
        </div>

        <div className={styles.gridproject}>
            <a href="https://github.com/tram-tr/student-success-in-college-data-analysis">
                <h1 className={styles.titleproject}>Data Science Project <GitHubIcon viewBox="0 -2 24 24" />  </h1>
            </a>
            <a className={styles.cardproject}>
                <Image src={datascience} alt="picture of project" width={400} height={250}/>
                <p>   
                    <br></br>
                    Higher education institutions have access to vast amounts of student information, 
                    ranging from demographics and socioeconomic status to macroeconomic trends and academic performance. 
                    Leveraging Data Science, we can address critical challenges, such as school dropout rates and educational failure, 
                    and their far-reaching consequences on economic growth, employment opportunities, global competitiveness, and 
                    overall productivity.
                    <br></br>
                    <br></br>
                    In this project, we aim to address a fundamental question pertaining to college student success: How can we 
                    predict academic performance based on demographics, socioeconomic, macroeconomic and academic records? By analyzing 
                    the dataset, our focus is to identify and employ the most suitable predictive model for predicting a student’s 
                    academic achievements in college
                </p>
            </a>
        </div>

        <div className={styles.gridproject}>
            <a href="https://github.com/NoorAchkar/clue_sheet">
                <h1 className={styles.titleproject}>Data Structures Project <GitHubIcon viewBox="0 -2 24 24" />  </h1>
            </a>
            <a className={styles.cardproject}>
                <Image src={clue} alt="picture of project" width={400} height={250}/>
                <p>   
                    <br></br>
                    <br></br>
                    Ideated, designed, and implemented a solver for the game Clue. Identified critical tasks, determined project
                    dependencies and design considerations
                    <br></br>
                    <br></br>
                    Assigned specific resources and specifications, and developed task effort and duration estimates with my team
                    <br></br>
                    <br></br>
                    Delivered weekly code reviews and professional memoranda detailing project progress, assessed risks and alternatives,
                    developed prototypes, and determined new project objectives
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
