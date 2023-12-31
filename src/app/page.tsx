"use client"

import {useInView} from "react-intersection-observer";
import Button from "@/components/button";
import {LuHome, LuSchool, LuTrophy, LuLaugh} from "react-icons/lu";
import { BsPerson } from "react-icons/bs";
import {Navbar, NavbarItem} from "@/components/navbar";
import Card from "@/components/card";
import {Timeline, TimelineItem} from "@/components/timeline";
import Smallcard from "@/components/smallcard";
import {BiGitBranch} from "react-icons/bi";
import CoolLink from "@/components/coollink";

export default function Home() {
    const items = ["html", "css/tailwind", "typescript","react/next.js", "astro.js", "godot", "unity", "rust", "c#", "python"];
    const icons = ["htmllogo", "tailwindlogo", "tslogo", "reactlogo", "astrologo", "godotlogo", "unitylogo", "rustlogo", "cslogo", "pythonlogo"];
        const links = ["https://www.w3.org/html/", "https://tailwindcss.com", "https://www.typescriptlang.org/", "https://nextjs.org/", "https://astro.build/", "https://godotengine.org", "https://unity.com/", "https://www.rust-lang.org/", "https://dotnet.microsoft.com/en-us/languages/csharp", "https://www.python.org/"];
    const {ref: homeref, inView:homeinview} = useInView({
        threshold: 0.5
    });
    const {ref: meref, inView: meinview} = useInView({
        threshold: 0.5
    });
    const {ref: educationref, inView:educationinview} = useInView({
        threshold: 0.5
    });

    const {ref: hobbiesref, inView:hobbiesinview} = useInView({
        threshold: 0.5
    });
    
    const {ref: workref, inView: workinview } = useInView({
        threshold: 0.5
    });


  return (
      <main className="xs:block">
         <Navbar>
             <NavbarItem icon={<LuHome/>}  highlighted={homeinview}>home</NavbarItem>
             <NavbarItem icon={<BsPerson/>}  highlighted={meinview}>me + skills</NavbarItem>
             <NavbarItem icon={<LuSchool/>}  highlighted={educationinview}>education</NavbarItem>
             <NavbarItem icon={<LuLaugh/>}  highlighted={hobbiesinview}>hobbies</NavbarItem>
             <NavbarItem icon={<BiGitBranch/>} highlighted={workinview}>work</NavbarItem>
         </Navbar>
          <div id="content">
              <div ref={homeref} id="home" className="section bg-wavybackground pt-5">
                <div id="images" className="text-xs absolute right-10">all images (apart from brand logos and location images) have been generated by OpenAI's DALL·E 2</div>
                <div className="backdrop-blur-md rounded-2xl  max-w-max pb-16 ml-16">
                    <h1 className="xl:text-7xl leading-3 text-5xl tracking-tight xs:ml-5 sm:ml-16 font-bold pr-20 mt-60 relative max-w-max">
                        howdy pardner, i'm
                        <span className="bg-clip-text bg-gradient-to-r duration-300 from-red-600 to-red-800 text-transparent text-7xl xl:text-9xl transition-all
                        hover:blur-sm hover:cursor-grab">
                        <br/>daniel
                        </span>
                        <span className="text-3xl">.</span>
                    </h1>
                      <div className="mt-4 ml-16 max-w-screen-2xl text-2xl">
                        <div className="max-w-screen-mdlg flex">
                          <p>
                            and welcome to my portfolio! 🔥<br/>
                          </p>
                        </div>
                        <Button className="mt-14">read more</Button>
                      </div>
                </div>
            </div>
            <div ref={meref} id="me + skills" className="section bg-mebackground pl-10">
                  <div className="ml-14">
                    <h1 className="title">me! <span className="text-6xl">+ my skills</span> </h1>
                    <p className="text-xl max-w-screen-ms">
                    i'm a 17y/o programmer working on learning website/ui design, as well as a blend of systems programming and cybersecurity! 📖
                        <br/>
                      i currently have interests in things like malware/c2 development, red teaming, social engineering, and operating systems. 🔧
                        <br/><br/>
                      i have experience in a variety of areas of programming, including web dev (back and frontend), game dev and more general purpose things:
                        <br/>
                        <ul className="mt-7 coolgrid">
                            {items.map((e, i) => {
                               return (<Card url={links[i]} key={i} imgurl={`/${icons[i]}.svg`}>{e}</Card>)
                            })}
                        </ul>
                    </p>
                  </div>
              </div>
              <div ref={educationref} id="education" className="section bg-edubackground pl-10 z-20">
                <Timeline className="left-36 top-10">
                    <TimelineItem date="sept 2022 - jun 2024" header="strode college">
                        <img src="/strodecollege.jpg" alt="strode college pic" className="rounded-xl border-2 w-[20rem] h-max"/>
                    </TimelineItem>
                    <TimelineItem date="sept 2017 - jun 2022" header="stanchester academy">
                        <img src="/stanchester.jpg" alt="stanchester pic" className="rounded-xl border-2 w-[20rem] h-max"/>
                    </TimelineItem>
                    <TimelineItem date="sept 2011 - jul 2017" header="ash primary">
                        <img src="/ash.jpg" alt="strode college pic" className="rounded-xl border-2 w-[20rem] h-max"/>
                    </TimelineItem>
                </Timeline>
                  <div className="absolute right-64">
                    <h1 className="title -ml-5">education</h1>
                      <p className="text-xl max-w-screen-ms">
                        i'm a t level student at strode college, currently working through my second year of a&nbsp;
                        <CoolLink href="https://www.strode-college.ac.uk/courses/our-courses/digital-production,-design-and-d/?subject=&type=16744"
                            >software development course</CoolLink>. 🏫
                     </p>
                      <p className="text-xl max-w-screen-ms">
                          during our first year we learnt about software development in a business context, e.g. understanding what the client wants, building software to meet certain requirements, legislation surrounding technology, emerging tech-related issues etc.
                          using the <CoolLink href="https://www.python.org">python programming language</CoolLink>.
                      </p>
                      <p className="text-xl max-w-screen-ms ">
                          <br/>
                          throughout the this year we are learning about different areas of web development, such as APIs, backend databases, using frameworks etc. <br/>
                          we are also expected to complete a set amount of hours in an <CoolLink href="https://www.gov.uk/guidance/industry-placements" >industry placement</CoolLink>&nbsp;
                          at a company within the technology sector. i've managed to complete my work placement with&nbsp;
                          <CoolLink href="https://gather.tech" >gather technology</CoolLink>,
                          where i helped out the software team (more details in the 'work' section). 💻
                      </p>
                      <br/>
                      <div className="text-xl max-w-screen-ms mt-5 -ml-44">
                          gcse results:
                          <div className="flex gap-x-3">
                            <Smallcard subsubject="english" subject="literature">8</Smallcard>
                            <Smallcard subsubject="english" subject="language">7</Smallcard>
                            <Smallcard subsubject="maths"subject="maths">7</Smallcard>
                            <Smallcard subsubject="science" subject="physics">7</Smallcard>
                            <Smallcard subsubject="science" subject="biology">7</Smallcard>
                            <Smallcard subsubject="science" subject="chemistry">6</Smallcard>
                            <Smallcard subsubject="BTEC" subject="iMedia">merit(L2)</Smallcard>
                            <Smallcard subsubject="BTEC" subject="music">pass(L2)</Smallcard>
                          </div>
                      </div>
                  </div>
              </div>
              <div ref={hobbiesref} id="hobbies" className="section bg-hobbiesbg">
                    <div className="flex flex-col justify-center items-center">
                    <h1 className="title">hobbies</h1>
                    <p className="text-xl max-w-screen-md">
                            at the moment, my main hobbies consist of playing the guitar and programming.
                            i've been playing both accoustic and electric guitar since year 3, which also where i started 
                            practicing for and taking guitar grades at various levels. the latest grade i've taken is grade 8, 
                            the most difficult and last grade that you can take; i passed with a merit.
                            <br/>
                            <br/>
                            i started programming near the start of primary school, where we learned the basics of both scratch and python.
                            i didn't touch programming again until around august of 2019, where i rediscovered python and,
                            with the help of a few youtube videos, improved my ability to read and write code, as well as expand my skillset to other languages.
                            <br/>
                            i also occasionally go to the gym. 🏋️
                            <br/>
                            <br/>
                            at the moment, i'm working on a couple small side-projects: 
                            a custom 64-bit operating system and a dynamically typed programming language called Skew
                            (which i recently found is already a language), 
                            both of which are written in rust. 🦀
                    </p>
                </div>
              </div>
              <div ref={workref} id="work" className="section bg-workbg">
                <Timeline className="right-64 top-10 ">
                    <TimelineItem date="feb 2023 - sep 2023" header="gather tech">
                        <img src="/gather.jpg" className="rounded-xl border-4 w-[35rem] h-[20rem]" alt="gather photo"/>
                    </TimelineItem>
                    <TimelineItem date="dec 2022 - dec 2022" header="tesco">
                        <img src="/tesco.jpg" className="rounded-xl border-4 w-[35rem] h-[20rem]" alt="gather photo"/>
                    </TimelineItem>
                </Timeline>
                    <div className="ml-20">
                        <h1 className="title">work</h1>
                        <p className="text-xl ml-10 max-w-screen-ms">as stated earlier, i spent some time at <CoolLink href="https://gather.tech">gather technology</CoolLink>
                        &nbsp;as a junior dev for the software team, helping them develop a website for the <CoolLink href="https://www.nya.org.uk">national youth agency</CoolLink>.</p>
                        <p className="text-xl ml-10 max-w-screen-ms">
                            i'd been working here since february for my industry placement, and
                            despite sharing an office with the tech support team and working with the software team remotely, 
                            it's given me a real insight to what the working world is like and how professionals handle their clients. 🧑‍💼
                        </p>
                        <p className="text-xl ml-10 max-w-screen-ms">
                            throughout my time at gather i've managed to pick up/improve on a few very useful skills, such as 
                            project and ticket management with <CoolLink href="https://www.atlassian.com/software/jira">jira</CoolLink>, 
                            using git-based tools like <CoolLink href="https://bitbucket.org">bitbucket</CoolLink> and <CoolLink href="https://github.com">github</CoolLink>
                            , developing backends using rust and c#, and developing APIs to send data between those backends and dedicated frontends.
                            <br/><br/>
                            previously, i have also worked a temporary contract in tesco, stocking beers, wines and ciders on the shelves during the weeks leading up to christmas. 🎅
                    </p>
                    </div>
              </div>
          </div>
      </main>
  )
}
