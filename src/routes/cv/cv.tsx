import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Section } from "@/components/ui/section";
import { EnvelopeClosedIcon, GitHubLogoIcon, GlobeIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { ThemeToggle } from "@/components/controls/themeToggle";
import flojoySequencerImage from '../../assets/flojoy-sequencer.png';
import flojoyStudioImage from '../../assets/flojoy-studio.png';
import bedOfNailImage from '../../assets/bed-of-nail.png';
import PreComputeImage from '../../assets/pre-compute.png';
import PostComputeImage from '../../assets/post-compute.png';
import duckietownGif1 from '../../assets/duckietown_1.gif';
import duckietownGif3 from '../../assets/duckietown_3.gif';
import duckietownGif4 from '../../assets/duckietown_4.gif';
import q_demo from '../../assets/q_demo.gif';
import q_demo2 from '../../assets/q_demo_2.gif';
import watsonImage from '../../assets/watson.png';
import watsonImage2 from '../../assets/watson2.png';
import wav from '../../assets/wav.png';
import bitmap from '../../assets/bitmap.png';
import x86 from '../../assets/x86.png';



const work = [
  {
    company: "Flojoy",
    start: "January 2024",
    end: "Now 2024",
    loc: "Montreal, Quebec, Canada",
    link: "https://flojoy.ai",
    title: "Software Engineer",
    description: "Originally hired as a Hardware and ML Engineer to extend the capabilities of Flojoy Studio (an open-source alternative to LabVIEW), I quickly transitioned into the role of Product Designer and Full Stack Engineer when the company pivoted to an adjacent market, tackling Test and Measurement automation for PCB board testing. Within 3 months, we developed a test sequencer for manufacturing and engineering (desktop application for developing and running tests, along with a cloud solution for managing and visualizing the tests and data.)",
    badges: ["Product Design", "Typescript", "React", "Python", "Hardware Design", "C", "Project Management"],
    notes: ["Traction: 2500+ installations per month of our Desktop application", "Reporting directly to Jack Parmer, CEO of Flojoy and previously CEO & founder of Plotly"]
  },
  {
    company: "Boreal Ventures",
    start: "May 2023",
    end: "December 2023",
    loc: "Montreal, Quebec, Canada",
    link: "https://boreal.vc",
    title: "Analyst Seed Stage Venture Capitalist",
    description: "Market analysis across diverse technical domains such as AI, medical devices, carbon storage, SaaS, and more. - Developing investment return models based on ownership and financial projections. Creating investment memoranda for science-focused companies, which were subsequently shared with the investment committee.",
    badges: ["VC", "Technologic Market Analysis", "Investment Return Models", "Investment Memoranda"],
    notes: ["Investments I've worked on: Flojoy, Palisade, Femtum, SamiAgtech"],
  },
  {
    company: "Tesla",
    start: "Summer",
    end: 2022,
    loc: "Palo Alto, California, US",
    link: "https://tesla.com",
    title: "Software Engineer Intern",
    description: "Reverse engineering of a Product Data Modeller (3D Experience) to programmatically access data from a Java GRPC microservice. Refactoring of a Java microservice by simplifying code and removing code duplication. Smoke-test to automatically test microservice on deployment in Python / Pytest / Github action / Helm.",
    badges: ["Java", "Reverse Engineering Software", "Testing", "Python", "GRPC"],
    notes: ["Supervisor & Mentor: Manu Radhakrishna - Sr Staff Software Eng."]
  },
]

const internships = [
  {
    company: "Pratt & Whitney",
    description: "Automation of an electron beam welding machine based on part dimensions.",
  },
  {
    company: "Innocap",
    description: "Design, development and deployment of a Python API to automate risk calculations.",
  },
  {
    company: "Desjardins",
    description: "Development of Kafka Streams applications in Java and DevOps pipeline.",
  },
]


const projects = [
  {
    title: "Bustelo",
    description: "[WORK IN PROGRESS] CLI & GUI tool to generate the representation of how the infomration is store in a file. This tool can allow to speed up the identification of the file format since it exist some general strcuture that are distinc on how the information is store in each file type.",
    link: "https://github.com/latentdream/bustelo",
    imgLink: [bitmap, x86, wav],
    techs: ["C", "Raylib", "Reverse Engineering"],
  },
  {
    title: "Flojoy Studio",
    description: "Open-source alternative to LabVIEW & TestStand.",
    link: "https://github.com/flojoy-ai/studio/",
    imgLink: [flojoySequencerImage, flojoyStudioImage, bedOfNailImage],
    techs: ["Python", "Typescript", "React", "Electron", "Product Design", "UI/UX", "Hardware design"],
  },
  {
    title: "Shepherd",
    description: "Little project to learn about unsafe Rust and the bindings between C and the language. It works on Unix and Windows platforms.",
    link: "https://github.com/LatentDream/shepherd",
    imgLink: [],
    techs: ["Rust", "C", "Unix", "Windows", "Unsafe Rust", "No Dependencies", "Side Project"],
  },
  {
    title: "Watson AI",
    description: "A desktop app allowing user to record and summarize any call automatically. Developed as a side Project while at Boreal Ventures. Turn out the teams is still using it to this day. (Not open source, happy to share the app if you ask).",
    imgLink: [watsonImage, watsonImage2],
    techs: ["Rust", "AI", "Typescript", "Tauri", "Product Design", "UI/UX", "Plugin integration"],
  },
  {
    title: "Art Commun",
    description: "Self hosted Text to Image model. Currently offline because I'm GPU poor. :(",
    link: "https://github.com/LatentDream/Art-commun",
    imgLink: [PreComputeImage, PostComputeImage],
    techs: ["GenAI", "Self-hosted AI Model", "Diffusion Model Training", "Python", "Side Project"],
  },
  {
    title: "Duckietown",
    description: "Focuses on perception, navigation, planning and control problems at the system level integration in the context of self-driving vehicles. Montreal Self driven Class 2022 given by Liam Paul.",
    link: "https://duckietown.com/",
    imgLink: [duckietownGif3, duckietownGif1, duckietownGif4],
    techs: ["Duckietown", "Python", "ROS", "AI", "Perspection", "Planing", "School Project"],
  },
  {
    title: "Technical Analysts & Artificial Intelligence",
    description: "Technical blog to practice writing. Subject: The idea is to try out image analysis models having the translation invariance property on technical graphs, with the aim that machine learning techniques learn technical analysis signals directly. The article is dedicated to a first proof of concept in the subject.",
    link: "https://github.com/LatentDream/technical-analysis-trading-dumpster-fire/blob/main/Article_En.ipynb",
    imgLink: [],
    techs: ["Technical Writing", "Finance", "Trading", "Deep Learning"],
  },
  {
    title: "Intelligent agent to play Quoridor",
    description: "A project for the AI class at Polytechnique Montreal. The goal was to develop an intelligent agent to play the game Quoridor.",
    link: "https://github.com/guthi1/Algo-AI/tree/master/Quorridor%20Projet",
    imgLink: [q_demo, q_demo2],
    techs: ["Python", "AI", "Game Theory", "School Project"],
  },
  {
    title: "2nd place at Polytechnique AI Hackatown - 2022",
    description: "Plant disease classification from images",
    link: "https://github.com/guthi1/Hackathon-poly-AI-2022",
    imgLink: [],
    techs: ["ResNet", "Keras", "Python", "AI", "Hackathon"],
  },
  {
    title: "3rd place Data Challenge HEC - 2021",
    description: "Predict book sales: In order to try something innovative, we built a pipeline to retrieve the book title, synopsis, and cover of all the books whose identifiers were provided by scraping the web. After performing the data acquisition pipeline, we build a model to perform the prediction. We encoded the texts and images in the embedding and fed them to a pre-trained transformer.",
    techs: ["NLP", "Data Pipeline", "Python", "AI", "Hackathon"],
    imgLink: [],
  },
]


function Cv() {
  return (
    <main className="container relative mx-auto scroll-my-12 overflow-auto p-4 print:p-12 md:p-16 m-auto max-w-[1280px]">
      <section className="mx-auto w-full max-w-2xl space-y-8 print:space-y-6">
        <div className="flex justify-between">
          <div className="flex-none space-y-1.5">
            <h1 className="text-2xl font-bold items-start">Guillaume Thibault</h1>
            <p className="max-w-md text-pretty font-mono text-sm text-muted-foreground">
              Software Engineer 🕹️
            </p>
            <p className="max-w-md items-center text-pretty font-mono text-xs text-muted-foreground">
              <a
                className="inline-flex gap-x-1.5 align-baseline leading-none hover:underline"
                href="https://maps.app.goo.gl/fAUkYMT9JjvEEhnS9"
                target="_blank"
              >
                <GlobeIcon className="size-3" />
                Montreal, Quebec, Canada
              </a>
            </p>
            <div className="flex gap-x-1 pt-1 font-mono text-sm text-muted-foreground print:hidden">
              <Button
                className="size-8"
                variant="outline"
                size="icon"
                asChild
              >
                <a href={`mailto:guillaume.thibault.98@proton.me`}>
                  <EnvelopeClosedIcon className="size-4" />
                </a>
              </Button>
              <Button
                key="Linkedin"
                className="size-8"
                variant="outline"
                size="icon"
                asChild
              >
                <a href="https://www.linkedin.com/in/guillaume-thibault/" target="_blank">
                  <LinkedInLogoIcon className="size-4" />
                </a>
              </Button>
              <Button
                key="Github"
                className="size-8"
                variant="outline"
                size="icon"
                asChild
              >
                <a href="https://github.com/latentDream/" target="_blank">
                  <GitHubLogoIcon className="size-4" />
                </a>
              </Button>
            </div>
            <div className="hidden flex-col gap-x-1 font-mono text-sm text-muted-foreground print:flex">
              <a href={`mailto:guillaume.thibault.98@proton.me`}>
                <span className="underline">guillaume.thibault.98@proton.me</span>
              </a>
            </div>
          </div>
          <ThemeToggle />
        </div>
        <Section>
          <h2 className="text-xl font-bold">About</h2>
          <p className="text-pretty font-mono text-sm text-muted-foreground">
            Hi! I'm Guillaume :) Passionate about problem-solving, system building, and art. My journey began with a bachelor's degree in software engineering, where I explored the world of applied mathematics and learned the intricacies of computer systems. Fascinated by their complexity, I completed a professional master's degree in artificial intelligence and data science. I'm now working at Flojoy, an Open-Source company working toward a new way to ensure quality in advanced hardware manufacturing.
          </p>
        </Section>
        <Section>
          <h2 className="text-xl font-bold">Work Experience</h2>
          {work.map((work) => {
            return (
              <Card key={work.company}>
                <CardHeader>
                  <div className="flex items-center justify-between gap-x-2 text-base">
                    <h3 className="inline-flex items-center justify-center gap-x-1 font-semibold leading-none">
                      <a className="hover:underline" href={work.link} target="_blank">
                        {work.company}
                      </a>
                    </h3>
                    <div className="text-sm tabular-nums text-gray-500">
                      {work.start} - {work.end}
                    </div>
                  </div>

                  <h4 className="font-mono text-sm leading-none">
                    {work.title}
                  </h4>
                </CardHeader>
                <CardContent variant="note">
                  {work.loc}
                </CardContent>
                <CardContent className="mt-2">
                  {work.description}
                </CardContent>
                <div className="py-0.5" />
                {work.notes.map((note) => (
                  <CardContent variant="note">
                    -{" "}{note}
                  </CardContent>
                ))}
                <div className="flex flex-wrap gap-2 mt-1">
                  {work.badges.map((badge) => (
                    <Badge
                      variant="secondary"
                      className="align-middle text-xs"
                      key={badge}
                    >
                      {badge}
                    </Badge>
                  ))}
                </div>
              </Card>
            );
          })}
          {internships.length !== 0 && (
            <Section className="mt-4">
              <Card>
                <CardHeader className="pb-2">
                  <h3 className="gap-x-1 font-semibold leading-none"> Internships as part of my bachelor's degree </h3>
                </CardHeader>
                {internships.map((internship) => (
                  <>
                    <h4 className="text-sm mt-0.5">
                      {internship.company}
                    </h4>
                    <CardContent>
                      -{" "}{internship.description}
                    </CardContent>
                  </>
                ))}
              </Card>
            </Section>
          )}
        </Section>
        <Section>
          <h2 className="text-xl font-bold">Education</h2>
          <div className="grid grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <h3 className="gap-x-1 font-semibold">
                  Master's degrees in Artificial Intelligence
                </h3>
                <h4 className="font-mono text-sm leading-none">
                  Polytechnique Montreal
                </h4>
              </CardHeader>
              <CardContent className="mt-2 text-xs">
                Professional Master to get up to speed with artificial intelligence research as well as to discover interesting fields of application.
              </CardContent>
              <CardContent className="mt-2 text-xs">
                The project was done with a pension fund to introduce methods for analyzing sentiment in a currency hedging model while ensuring explainability of results.
              </CardContent>
              <CardContent variant="note" className="ml-1">
                - Presented at Tokyo Tech University in Japan.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <h3 className="gap-x-1 font-semibold">
                  Bachelor's degree Software Engineering
                </h3>
                <h4 className="font-mono text-sm leading-none">
                  Polytechnique Montreal
                </h4>
              </CardHeader>
              <CardContent className="mt-2 text-xs">
                With a minor in finance with a focus on sustainable investment & innovation; Enriched by 3 master courses and two international seminars in Europe and Japan.
              </CardContent>
              <CardContent className="mt-2 text-xs">
                Promoted data science through the organization of the first two editions of the Polytechnique data science hackathon. More than 50 participants in graduate study per edition with more than 8 corporate sponsors.
              </CardContent>
            </Card>
          </div>
        </Section>
        <Section>
          <h2 className="text-xl font-bold">Skills</h2>
          <div className="flex flex-wrap gap-1">
            <Badge>Python</Badge>
            <Badge>Rust</Badge>
            <Badge>TypeScript / WebDev</Badge>
            <Badge>Java</Badge>
            <Badge>C</Badge>
            <Badge>Machine Learning</Badge>
            <Badge>Deep Learning</Badge>
            <Badge>Data Science</Badge>
            <Badge>Product Design</Badge>
            <Badge>UI/UX</Badge>
            <Badge>Project Management</Badge>
            <Badge>AWS</Badge>
            <Badge>Analytical Skills</Badge>
            <Badge>French</Badge>
            <Badge>English</Badge>
          </div>
        </Section>

        <Section className="print-force-new-page scroll-mb-16">
          <h2 className="text-xl font-bold">Projects</h2>
          <div className="-mx-3">
            {projects.map((project) => (
              <Card className="border border-muted p-3 my-1" key={project.title}>
                <CardHeader className="relative x-[-1rem]">
                  <h3 className="inline-flex gap-2 mx-2 gap-x-1 font-semibold">
                    {project.link !== undefined ? (
                      <>
                        <a className="hover:underline" href={project.link} target="_blank">
                          {project.title}
                        </a>
                        {project.link?.includes("github") ? (
                          <GitHubLogoIcon className="size-4 mt-1" />
                        ) : (
                          <GlobeIcon className="size-4 mt-1" />
                        )}
                      </>
                    ):(<p>{project.title}</p>)}
                  </h3>
                </CardHeader>
                <CardContent className="mx-2">
                  {project.description}
                </CardContent>
                {project.imgLink.length > 0 && (
                  <Carousel className="mx-12 my-2 items-center">
                    <CarouselContent>
                      {project.imgLink.map((img) => (
                        <CarouselItem className="items-center">
                          <img src={img} alt="" className="rounded-lg" />
                        </CarouselItem>
                      ))}
                    </CarouselContent>

                    {project.imgLink.length > 1 && (
                      <>
                        <CarouselPrevious />
                        <CarouselNext />
                      </>
                    )}
                  </Carousel>
                )}
                <div className="flex flex-wrap gap-2 mt-1">
                  {project.techs.map((tech) => (
                    <Badge
                      variant="secondary"
                      className="align-middle text-xs"
                      key={tech}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </Section>
      </section>
    </main>
  )
}

export default Cv 
