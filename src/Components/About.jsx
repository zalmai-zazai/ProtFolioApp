import HeaderSection from './HeaderSection';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import { FaReact } from 'react-icons/fa';
import { SiJavascript } from 'react-icons/si';
import { FaNodeJs } from 'react-icons/fa';
import { TbApi } from 'react-icons/tb';
import { BiLogoMongodb } from 'react-icons/bi';
import { TiHtml5 } from 'react-icons/ti';
import { IoLogoCss3 } from 'react-icons/io';
import { FcLinux } from 'react-icons/fc';
import { BsGit } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import { SocialIcon } from 'react-social-icons';

function About() {
  return (
    <div>
      <HeaderSection />
      <div className="about-main">
        <div className="profile-img"></div>
        <div className="contentt">
          <h1>ZALMAI ZAZAI</h1>
          <h5>FULL STACK DEVLOPER</h5>
          <div className="exp container">
            <p>
              Hi. I am a fresh MERN Stack developer ranging from small scale
              websites to large scale eCommerce web applications. Using React,
              JavaScript, Stripe, Paypal, Coinbase commerce payment gateway
              integrations too !
            </p>
            <p>
              I got my bacheolar degree in field of computer scince from
              'Khan-e-noor' Universtiy in 2018 at Kabul, Afghanistan. and it was
              mainly focused on desktop based apps using C# i did about 5
              projects in C# language for building desktop based apps.
            </p>
            <div className="education-portal">
              <h5>
                <strong>EDUCATION</strong>
              </h5>
              <div className="education-box">
                <h6>
                  Full Stack Devlopment |{' '}
                  <Link to={'https://www.knowledgehut.com'}>Knowledge Hut</Link>{' '}
                  , Online Course
                </h6>
                <p>
                  <strong>12/2022 - 7/2023</strong>
                </p>
                <p>
                  Designed to get you hired, this power-packed Full-Stack
                  Developer Bootcamp features best-in-class training, plenty of
                  hands-on exercises and assignments with Cloud Labs, and so
                  much more. Build a stellar project portfolio, get ready to
                  crack interviews at product-based companies, and launch your
                  career as a Full-Stack Developer. Gain a deep understanding of
                  how to build, deploy, secure, and scale programs and build
                  expertise across the user interface, business logic, and
                  database stacks. Learn by doing with Cloud Labs and experience
                  working on capstone projects that simulate real-world web
                  development. With our Full-Stack Developer Bootcamp Online,
                  you’ll dive deeper into topics and techniques via independent
                  and group projects, receive individualized feedback, get
                  mentored by top industry experts, hone your skills in
                  hackathons spread across the program, and get intense
                  interview preparation and career launch support.
                </p>
              </div>
              <div className="education-box">
                <h6>
                  Bachelor of Computer Science |{' '}
                  <Link
                    to={'https://www.facebook.com/KhanaeNoorUniversity.edu.af'}
                  >
                    Khan-e-noor University
                  </Link>{' '}
                  ,| Kabul, Afghanistan
                </h6>
                <p>
                  <strong>2015 - 2018</strong>
                </p>
                <p>
                  Khana-e-Noor, established in 2009 as a modern academic
                  institution with the objective of promoting inter-disciplinary
                  higher education.
                </p>
              </div>
            </div>

            <div className="experiance-portal mt-4">
              <h5>
                <strong>WORK EXPERIANCE</strong>
              </h5>
              <div className="experance-box">
                <h6>
                  MIS Rollout Officer | Ministry of Martyrs and Disabled Affairs
                  | Kabul, Afghanistan
                </h6>
                <p>
                  <strong>10/2020 - 08/2021</strong>
                </p>
                <p>
                  <ul>
                    <li>
                      Created a new digital system for making payment via
                      digital cards for the families of martyrs in Afghanistan.
                    </li>
                    <li>
                      Diagnosed and resolved hardware and software issues.
                    </li>
                    <li>
                      Worked with software development and testing team members
                      to design and develop robust solutions to meet client
                      requirements for functionality, scalability, and
                      performance.
                    </li>
                    <li>
                      Updated old code bases to modern development standards,
                      improving functionality.
                    </li>
                    <li>
                      Built databases and table structures for web applications.
                    </li>
                  </ul>
                </p>
              </div>
              <div className="experance-box">
                <h6>
                  Human Resources Officer | IEC, Independent Election Commission
                  of Afghanistan | Kabul, Afghanistan
                </h6>
                <p>
                  <strong>03/2019 - 03/2020</strong>
                </p>
                <p>
                  <ul>
                    <li>
                      Coordinated new hire onboarding, completing background
                      checks and reference checks to complete screenings.
                    </li>
                    <li>
                      Enhanced team workflows and employee job satisfaction by
                      coordinating communication between managers and employees.
                    </li>
                    <li>
                      Develop and prepare data collection forms for compiling
                      the database as require.
                    </li>
                    <li>
                      Plans database upgrades by maintaining , evaluating, and
                      improving a transaction processing model.
                    </li>
                    <li>
                      Assesses database performance by developing a protocol for
                      measurement of results and identification of problem
                      areas.
                    </li>
                  </ul>
                </p>
              </div>
              <div className="experance-box">
                <h6>
                  Data Entry Clerk | IEC, Independent Election Commission of
                  Afghanistan | Kabul, Afghanistan
                </h6>
                <p>
                  <strong>03/2018 - 03/2019</strong>
                </p>
                <p>
                  <ul>
                    <li>Preparing and sorting documents for data entry.</li>
                    <li>
                      Entering data into database software and checking to
                      ensure the accuracy of The data that has been inputted.
                    </li>
                    <li>
                      Resolving discrepancies in information and obtaining
                      further information for Incomplete documents.
                    </li>
                  </ul>
                </p>
              </div>
              <div className="experance-box">
                <h6>
                  Help Desk | Nazar Construction Company | Kabul, Afghanistan
                </h6>
                <p>
                  <strong>2017 - 2018</strong>
                </p>
                <p>
                  <ul>
                    <li>
                      Compile and gather data for processing and entering into
                      databases.
                    </li>
                    <li>
                      Organize and process data relating to purchase orders and
                      vendor payments.
                    </li>
                    <li>
                      Enter and process data relating to invoices and customer
                      balances.
                    </li>
                    <li>
                      Check and verify data relating to inventory supplies.
                    </li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
          <div className="skills-portal mt-4">
            <h5>
              <strong>SKILLS</strong>
            </h5>
            <ul>
              <li>
                <FaReact />
                React
              </li>
              <li>
                <SiJavascript />
                JavaScript
              </li>
              <li>
                <FaNodeJs />
                Node.js
              </li>
              <li>
                <TbApi />
                APIs
              </li>
              <li>
                <BiLogoMongodb />
                Mongodb
              </li>
              <li>
                <TiHtml5 />
                HTML5
              </li>
              <li>
                <IoLogoCss3 />
                CSS3
              </li>
              <li>
                <FcLinux />
                Linux
              </li>
              <li>
                <BsGit />
                Git
              </li>
            </ul>
          </div>
          <div className="social-media mt-4">
            <ul>
              <li>
                <SocialIcon url="https://github.com/jaketrent" />
              </li>
              <li>
                <SocialIcon url="https://instagram.com/jaketrent" />
              </li>
              <li>
                <SocialIcon url="https://twitter.com/Zalmaizazai" />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
