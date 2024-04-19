import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/job-card";
import { Section } from "@/components/ui/section";
import { EnvelopeClosedIcon, GitHubLogoIcon, GlobeIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";

const work = [
  {
    company: "Flojoy",
    start: 2024,
    end: "Now",
    loc: "Montreal, Quebec, Canada",
    link: "https://flojoy.ai",
    title: "Product-Focused Software Engineer",
    description: "Originally hired as a Hardware and ML Engineer to extend the capabilities of Flojoy Studio (an open-source alternative to LabVIEW), I quickly transitioned into a role of Product Designer when the company pivoted to an adjacent market, tackling Test and Measurement automation for PCB board testing. Within 3 months, we developed a test sequencer for manufacturing and engineering. We provide a full-stack solution, comprising a desktop application for developing and running tests, along with a cloud solution for managing and visualizing the tests and data.",
    badges: ["Product Design", "Typescript", "Python", "Hardware Design", "Project Management"],
    notes: ["Reporting directly to Jack Parmer, CEO of Flojoy and previously founder of Plotly", "Working with two truly talented engineers: Jeff Zhang & Xiaowei (Joey) Yu"]
  },
  {
    company: "Boreal Ventures",
    start: 2024,
    end: 2024,
    loc: "Montreal, Quebec, Canada",
    link: "https://boreal.vc",
    title: "Analyst Seed Stage Venture Capitalist",
    description: "Market analysis across diverse technical domains such as AI, medical devices, carbon storage, SaaS, and more. - Developing investment return models based on ownership and financial projections. Creating investment memoranda for science-focused companies, which were subsequently shared with the investment committee.",
    badges: ["VC", "Technologic Market Analysis", "Investment Return Models", "Investment Memoranda"],
    notes: []
  },
  {
    company: "Tesla",
    start: "Summer",
    end: 2023,
    loc: "Palo Alto, California, US",
    link: "https://tesla.com",
    title: "Software engineer Intern",
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


function Cv() {
  return (
    <main className="container relative mx-auto scroll-my-12 overflow-auto p-4 print:p-12 md:p-16">
      <section className="mx-auto w-full max-w-2xl space-y-8 bg-white print:space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex-none space-y-1.5">
            <h1 className="text-2xl font-bold items-start">Guillaume Thibault</h1>
            <p className="max-w-md text-pretty font-mono text-sm text-muted-foreground">
              Software Engineer
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
              <a href="https://www.linkedin.com/in/guillaume-thibault/">
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
              <a href="https://github.com/latentDream/">
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

          <Avatar className="size-28">
            <AvatarImage alt="Guillaume" src="https://media.licdn.com/dms/image/D4E03AQGGTqeL7rlyug/profile-displayphoto-shrink_400_400/0/1666219805654?e=1718841600&v=beta&t=rMpr10abhfcmzigibyisHSV-oDyv3a2_Icmwf4TlePo" />
            <AvatarFallback>G.T.</AvatarFallback>
          </Avatar>
        </div>
        <Section>
          <h2 className="text-xl font-bold">About</h2>
          <p className="text-pretty font-mono text-sm text-muted-foreground">
            Hi! I'm Guillaume :) Passionate about problem-solving, system building, and art. My journey began with a bachelor's degree in software engineering, where I explored the world of applied mathematics and learned the intricacies of computer systems. Fascinated by their complexity, I recently completed a professional master's degree in artificial intelligence and data science.
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
                      <a className="hover:underline" href={work.link}>
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
                    -{" "}{ note }
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
        { internships.length !== 0 && (
          <Section className="mt-4">
          <Card>
            <CardHeader className="pb-2"> 
              <h3 className="gap-x-1 font-semibold leading-none"> Internships as part of my bachelor's degree </h3>
            </CardHeader>
            {internships.map((internship) => (
              <>
                <h4 className="text-sm mt-1">
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
                    Bachelor's degree Software Engineering
                  </h3>
                  <h4 className="font-mono text-sm leading-none">
                    Polytechnique Montreal
                  </h4>
                </CardHeader>
                <CardContent className="mt-2 text-xs">
                  With a minor in finance with a focus on sustainable investment & innovation; Enriched by 3 master courses and two international seminars in Europe and Japan. Promoted data science through the organization of the first two editions of the Polytechnique data science hackathon. More than 50 participants in graduate study per edition with more than 8 corporate sponsors.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <h3 className="gap-x-1 font-semibold">
                    Master's Degree in Computer Engineering.
                  </h3>
                  <h4 className="font-mono text-sm leading-none">
                    Polytechnique Montreal
                  </h4>
                </CardHeader>
                <CardContent className="mt-2 text-xs">
                  Professional Master to get up to speed with artificial intelligence research as well as to discover interesting fields of application. Project done with a pension fund to introduce methods for analyzing the sentiment of central bank texts in a currency hedging model while being able to have a form of explicability of results.
                </CardContent>
              </Card>
            </div>
        </Section>
        <Section>
          <h2 className="text-xl font-bold">Skills</h2>
          <div className="flex flex-wrap gap-1">
            <Badge>Python</Badge>
            <Badge>TypeScript</Badge>
            <Badge>Rust</Badge>
            <Badge>Java</Badge>
            <Badge>Machine Learning</Badge>
            <Badge>Deep Learning</Badge>
            <Badge>Data Science</Badge>
            <Badge>Product Design</Badge>
            <Badge>UI/UX</Badge>
            <Badge>Project Management</Badge>
            <Badge>French</Badge>
            <Badge>English</Badge>
          </div>
        </Section>

        <Section className="print-force-new-page scroll-mb-16">
          <h2 className="text-xl font-bold">Projects</h2>
          <div className="-mx-3 grid grid-cols-1 gap-3 print:grid-cols-3 print:gap-2 md:grid-cols-2 lg:grid-cols-3">
            <p> ... </p>
            <p> ... </p>
            <p> ... </p>
          </div>
        </Section>
      </section>
    </main>
  )
}

export default Cv 
