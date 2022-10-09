import type { NextPage } from "next"
import Image from "next/image"
import { HeadersComponents } from "./header"
import Pictures from "./assets/pictures.jpeg"
import Proj1 from "./assets/proj1.png"
import Proj2 from "./assets/Proj2.png"
import Proj3 from "./assets/proj3.png"
import { Tech } from "./tech"
import { Socmed } from "./socmed"

const Home: NextPage = () => {
  return (
    <div className="pages">
      <HeadersComponents />
      <div className="main">
        <div className="titles">
          <div className="title">
            <span>Hi, I'm <a className="NameHeader"> Nasri</a> Software Engineer</span>
            <br />
            <span>Based In Indonesia.</span>
          </div>
        </div>
        <div className="pictures d-flex flex-row-reverse">
          <Image src={Pictures} />
        </div>
        <div className="scroll d-flex justify-content-center">
          <a href="#about" style={{ "color": "black" }}>scroll ↡</a>
        </div>
      </div>
      <div className="body">
        <div className="about" id="about">
          <div className="text-about">
            <span>I love to create something simple and clean</span>
          </div>
          <div className="title-about">
            <div className="more">
              <span>About Me</span>
            </div>
            <span>
              Short story about me and beginning of my jurney
            </span>
          </div>
          <div className="detail-about">
            <div className="spacing"></div>
            <span className="about-text">
              Introducing my name is nasri adzlani, Im ussually called Nasri or nye (children called).
              Im come from indonesia, now I am also work as Blockchain and Backend engineer at eBdesk Teknologi and Part time as Blockchain Developers at GGWP.id.
            </span>
            <div className="spacing"></div>
            <span className="about-text">
              A Software engineer, currenly living at West Jakarta, like to explore about popular technology and have a good funcionality.
            </span>
            <br />
            <div className="spacing"></div>
            <span>
              Can spend hours each day exploring design, frontend, backend and blockchain technology, you can see my repo in <a style={{ "color": "black", "fontWeight": "500" }} href="https://github.com/masnasri-a">Github</a>
            </span>
            <span>
            </span>
          </div>
        </div>
      </div>

      <div className="work" id="work">
        <div className="color-bg"></div>
        <div className="row">
          <div className="col-lg-1"></div>
          <div className="col-lg-5 side-project">My main current company, im developing project as a backend for coffee traceability using private blockchain
            and frontend for helping Quality Assurance for reprocess a social media data.
            <br />
            <br />
            At my parttime company, my position as a solana blockchain developers and have a goals is to make a Minting, Marketplace, and Game based on NFT.
            <div className="view-github d-flex justify-content-center">
              <a href="https://github.com/masnasri-a">
                <span>
                  Find my Github
                </span>
              </a>
            </div>
          </div>
          <div className="col-lg-5 exploring ">
            <span className="d-flex justify-content-end">
              Exploration Tech & Work I Do
            </span>
          </div>
        </div>
        <div className="container projects d-flex">
          <div className="col-md-6 project-left">
            <div className="images">
              <Image src={Proj1} />
            </div>
          </div>
          <div className="col-md-6">
            <div className="project-right" style={{ borderRadius: "25px", overflow: "hidden" }}>
              <div className="images">
                <Image src={Proj2} objectFit="cover" />
              </div>
            </div>
            <div className="project-right" style={{ borderRadius: "25px", overflow: "hidden" }}>
              <div className="images">
                <Image src={Proj3} objectFit="cover" />
              </div>
            </div>
          </div>
        </div>
        <span id="tech" className="tech-title d-flex justify-content-center">Frontend</span>
        <div className="techology d-flex justify-content-center">
          <Tech title="NextJS" />
          <Tech title="ReactJS" />
          <Tech title="Laravel" />
        </div>
        <span className="tech-title d-flex justify-content-center">Database</span>
        <div className="techology d-flex justify-content-center">
          <Tech title="Mongo DB" />
          <Tech title="MySQL" />
          <Tech title="Elasticsearch" />
          <Tech title="PostgresSQL" />
          <Tech title="Redis" />
        </div>
        <span className="tech-title d-flex justify-content-center">Blockchain</span>
        <div className="techology d-flex justify-content-center">
          <Tech title="Ethereum" />
          <Tech title="Solidity" />
          <Tech title="Rust" />
          <Tech title="Solana" />
        </div>

        <span className="tech-title d-flex justify-content-center">Backend</span>
        <div className="techology d-flex justify-content-center">
          <Tech title="Python" />
          <Tech title="Java" />
          <Tech title="Typescript" />
          <Tech title="Javascript" />
        </div>
        <div className="container hire-me pt-5">
            <div className="hire-left" id="hire">
              <p>Contact Me </p>
              <p>For the next projects.</p>
              <div className="socmed d-flex justify-content-center">
                <Socmed title="Facebook" />
                <Socmed title="Twitter" />
                <Socmed title="Instagram" />
                <Socmed title="Whatsapp"/>
                <Socmed title="Telegram"/>
              </div>
            </div>
            <span className="footer">Made with ❤️ by nasri</span>

        </div>
      </div>
    </div>
  )
}

export default Home
