import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { useState } from 'react';
import Image from 'next/image';
import NavBar from '../components/navigationbar';

const CourseCard = ({ title, description }) => {
    const [isExpanded, setIsExpanded] = useState(false);
  
    const handleToggle = () => {
      setIsExpanded(!isExpanded);
    };
  
    return (
      <div className={` ${isExpanded ? styles.expanded : ''}`}>
        <h3 onClick={handleToggle}>
            
        {title} <div className={styles.downarrow}>{isExpanded ? '\u2191' : '\u2193'}</div>
        </h3>
        {isExpanded && <p>{description}</p>}
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
            <gradient-text>Relevant Courses</gradient-text>
        </h1>

        <div className={styles.gridcourses}>
          <a className={styles.cardcourses}>
            <CourseCard
            title="EG 10116 - Engineering Programming"
            description="The course is intended to develop fundamental computer programming skills 
            needed for future study in the College of Engineering. Concepts such as variable assignments, 
            vector and matrix operations, plotting, conditionals, loops, and user defined functions will 
            be covered using both MATLAB and Python programming platforms"
          />
          </a>
          <a className={styles.cardcourses}>
            <CourseCard
            title="CSE 20311 - Fundamentals of Computing"
            description="It introduces fundamental concepts and principles of computer science, from 
            formulating a problem and analyzing it conceptually, to designing, implementing, and testing 
            a program on a computer using C. Using data and procedural abstractions as basic design principles for 
            programs, students learn to define basic data structures, such as lists and trees, and to 
            apply various algorithms for operating on them. The course also introduces object-oriented methods."
          />
          </a>
          <a className={styles.cardcourses}>
            <CourseCard
            title="CSE 20110 - Discrete Mathematics"
            description="Introduction to mathematical techniques fundamental to computer engineering and 
            computer science. Topics: mathematical logic, induction, set theory, relations, functions, 
            recursion, recurrence relations, introduction to asymptotic analysis, algebraic structures, 
            graphs, and machine computation."
          />
          </a>
          <a className={styles.cardcourses}>
            <CourseCard
                title="CSE 20312 - Data Structures"
                description="This course deepens and broadens student exposure to imperative and object-oriented 
                programming and data structures using C and C++. Topics covered include modularity, specification, 
                data abstraction, classes and objects, genericity, inheritance. This course will focus these topics 
                on design and use of elementary data structures such as lists, stacks, queues, and trees, as well 
                as advanced techniques such as divide-and-conquer, sorting, searching and graph algorithms. More advanced 
                data structures such as priority queues and search trees will also be covered"
            />
          </a>
          <a className={styles.cardcourses}>
            <CourseCard
                title="CSE 20221 - Logic Design"
                description="Boolean algebra and switching circuits, Karnaugh maps, design of combinational and of 
                sequential logic networks, and sequential machines"
            />
          </a>
          <a className={styles.cardcourses}>
            <CourseCard
                title="CSE 20289 - Systems Programming"
                description="his course introduces students to the Unix programming environment where they will 
                explore numerical representation, memory management, system calls, data structures, networking, 
                and concurrency. Examining these topics will enable students to become familiar and comfortable 
                with the lower level aspects of computing, while providing the foundation for further study in 
                subsequent systems courses such as computer architecture and operating systems"
            />
          </a>
          <a className={styles.cardcourses}>
            <CourseCard
                title="CSE 30321 - Computer Architecture"
                description="Introduction to basic architectural concepts that are present in current scalar machines, 
                together with an introduction to assembly language programming, computer arithmetic, and performance 
                evaluation. Commercial computer-aided-design software is used to deepen the student's understanding 
                of the top-down processor design methodology. MIPS-based assembly language will be used."
            />
          </a>
          <a className={styles.cardcourses}>
            <CourseCard
                title="CSE 20510 - Electric Circuits for CPEG"
                description="An introduction to the modeling and analysis of electric circuits - this course covers 
                basic linear circuit analysis principles that include KCL, KVL, nodal and mesh analysis methods, 
                network theorems, operation amplifiers as linear circuit elements, and transient analysis of first-order RC/RL circuits."
            />
          </a>
          <a className={styles.cardcourses}>
            <CourseCard
                title="ACMS 30440 - Probability and Statistics"
                description="An introduction to the theory of probability and statistics, with applications 
                to the computer sciences and engineering. Topics include discrete and continuous random variables, 
                joint probability distributions, the central limit theorem, point and interval estimation and hypothesis testing"
            />
          </a>
          <a className={styles.cardcourses}>
            <CourseCard
                title="CSE 34341 - Operating Systems"
                description="Introduction to Oss, OS Structure, Hardware features and Oss. 
                Processes: Independent and Co-operative processes, Synchonisation Mechanisms, Deadlocks and Starvation. 
                Memory Management: Binding and Relocation, Memory Organisations (fixed and variable partitions), 
                Paging Technique, Segmentation Technique, Virtual Memory. File Management: File System structures, 
                Files, Directories, File System Implementation. Introduction to Security and Protection: Basic Issues, 
                Security Problem, Authentication, Encryption, Protection Problem, Trusted Systems. Case Studies: Unix, WinNT"
            />
          </a>
          <a className={styles.cardcourses}>
            <CourseCard
                title="CSE 44567 - Computer Security"
                description="This course is a survey of topics in realm of computer security. This course will 
                introduce the students to many contemporary topics in computer security ranging from PKIs 
                (Public Key Infrastructures) to cyber-warfare to security ethics. Students will learn fundamental 
                concepts of security that can be applied to many; traditional aspects of computer programming and 
                computer systems design. The course will culminate in a research project where the student will 
                have an opportunity to more fully investigate a topic related to the course"
            />
          </a>
          <a className={styles.cardcourses}>
            <CourseCard
                title="CSE 40647 - Data Science"
                description="Data mining and machine learning techniques have been widely used in many domains. 
                The focus of this course will primarily be on fundamental concepts and methods in data science, 
                with relevant inclusions and references from probability, statistics, pattern recognition, databases, 
                and information theory. The course will give students an opportunity to implement and experiment with 
                some of the concepts (e.g., classification, clustering, frequent pattern mining), and also apply them 
                to the real-world data sets"
            />
          </a>
          <a className={styles.cardcourses}>
            <CourseCard
                title="CSE 40522 - CPEG Capstone Design"
                description="This course provides a comprehensive team-based design experience of a 
                selected digital electronic system. Projects involve design concept selection, development 
                of specification, design, prototype implementation, and documentation. Group project management 
                skills, including scheduling and project tracking are stressed. Project assessment includes external reviews."
            />
          </a>
          <a className={styles.cardcourses}>
            <CourseCard
                title="CSE 40424 - Human Computer Interactions"
                description="You will engage in an in-depth exploration of the field of Human-Computer Interaction (HCI) 
                including its history, goals, principles, methodologies, successes, failures, open problems, and emerging areas. 
                Broad topics include theories of interaction (e.g., conceptual models, stages of execution, error analysis, 
                constraints, memory by affordances), design methods (e.g., user-centered design, task analysis, 
                prototyping tools), visual design principles (e.g., visual communication, digital typography, color, 
                motion), evaluation techniques (e.g., heuristic evaluations, model-based evaluations), 
                and emerging topics (e.g., affective computing, natural user interfaces, brain-computer interfaces)"
            />
          </a>
          <a className={styles.cardcourses}>
            <CourseCard
                title="CSE 30342 - Digital Integrated Circuits"
                description="This course, which builds upon the CSE 20221 Logic Design course, is where students 
                learn the principles, components, and methodologies for design of large-scale digital circuits, 
                and their integration into modern computing systems"
            />
          </a>
          <a className={styles.cardcourses}>
            <CourseCard
                title="CSE 40166 - Computer Graphics"
                description="ntroduction to interactive computer graphics. Key topics include graphics pipeline, WebGL + GLSL 
                programming, geometric objects and transformation, modeling and viewing, interaction and animation, 
                lighting and shading, and texture mapping. Students are expected to learn fundamental knowledge of 
                computer graphics, essential hands-on experience in WebGL programming, state-of-the-art shader-based, 
                GPU-accelerated graphics, and popular library for cross-browser 3D graphics."
            />
          </a>
          <a className={styles.cardcourses}>
            <CourseCard
                title="EG 40421 - Integrated EG. and Bus. Fundamentals"
                description="The course is designed to improve the effectiveness of engineers working 
                in corporations by teaching how and why businesses operate. Subjects covered include business 
                financial reporting, business plans, the development processes, project management, the supply 
                chain, and a history of quality topics. Numerous guest speakers are utilized to give the students 
                exposure to successful business executives and reinforce the business processes covered in class"
            />
          </a>
          <a className={styles.cardcourses}>
            <CourseCard
                title="CSE 30353 - Singals Processing Fundamentals"
                description="This course considers the behavior, theory, and applications of linear systems. 
                Representative topics to be considered may include: time/transform domain representations, 
                convolution operations, Fourier series signal expansions, Fourier and Laplace transform analysis of 
                linear systems, discrete time Fourier systems, fast Fourier transforms, digital information processing 
                (analog/digital, digital/analog conversion), etc"
            />
          </a>
          <a className={styles.cardcourses}>
            <CourseCard
                title="CSE 40693 - Modern Web Development"
                description="This course will focus on topics of modern web app development such as: MVC vs 
                Component-based app architecture, RESTful API development, database schema design, interfacing 
                with third-party APIs and more. In addition, many common JavaScript paradigms will be covered 
                including asynchronous programming patterns, object-oriented JavaScript with classes, and unit testing. 
                Discussions of engineering trade-offs will be complemented by projects in which students will develop 
                their own web apps. These techniques are used by companies such as Groupon, Airbnb, Netflix, 
                Medium and PayPal which have all adopted a full stack JavaScript approach, and are very useful 
                to those interested in smaller tech startups as well."
            />
          </a>
          <a className={styles.cardcourses}>
            <CourseCard
                title="CSE 40175 - Ethics and Professional Issues"
                description="This course seeks to develop a solid foundation for reasoning about ethical, professional, 
                and social issues that arise in the context of computer science and engineering. Emphasis is placed on 
                identifying appropriate legal, professional and moral contexts and on applying sound critical thinking 
                skills to a problem. Topics covered include professional codes of ethics, safety-critical systems, whistle blowing, 
                privacy and surveillance, freedom of speech, intellectual property, and cross-cultural issues. This course 
                relies heavily on case studies of real-world incidents"
            />
          </a>
          <a className={styles.cardcourses}>
            <CourseCard
                title="CSE 48901 - Undergraduate Research"
                description="A research project at the undergraduate level under the supervision of a CSE faculty member"
            />
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
