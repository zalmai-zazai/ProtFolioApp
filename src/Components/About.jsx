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
      {/* <HeaderSection /> */}
      <div className="about-main">
        {/* <div className="profile-img"></div> */}

        <div className="contentt" id="about">
          <div className="exp container">
            <p>
              I got my bacheolar degree in field of computer scince from
              'Khan-e-noor' Universtiy in 2018 at Kabul, Afghanistan. and it was
              mainly focused on desktop based apps using C# i did about 5
              projects in C# language for building desktop based apps.
            </p>
            <div className="skills-portal mt-4">
              <h5>
                <strong>SKILLS</strong>
              </h5>
              <ul>
                <li className="hiddenn">
                  <p> React</p>

                  <FaReact />
                </li>
                <li className="hiddenn">
                  <p>JavaScript</p>
                  <SiJavascript />
                </li>
                <li className="hiddenn">
                  <p> Node.js</p>
                  <FaNodeJs />
                </li>
                <li className="hiddenn">
                  <p>APIs </p>
                  <TbApi />
                </li>
                <li className="hiddenn">
                  <p>Mongodb</p>
                  <BiLogoMongodb />
                </li>
                <li className="hiddenn">
                  <p>HTML5</p>
                  <TiHtml5 />
                </li>
                <li className="hiddenn">
                  <p> CSS3</p>
                  <IoLogoCss3 />
                </li>
                <li className="hiddenn">
                  <p> Linux</p>
                  <FcLinux />
                </li>
                <li className="hiddenn">
                  <p> Git</p>
                  <BsGit />
                </li>
              </ul>
            </div>
            <div className="education-portal ">
              <h5>
                <strong>EDUCATION</strong>
              </h5>
              <div className="education-box">
                <h6>
                  Full Stack Devlopment |{' '}
                  <Link to={'https://www.knowledgehut.com'}>Knowledge Hut</Link>{' '}
                  , Online Boot-Camp
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
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default About;
