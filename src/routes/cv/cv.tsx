import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { EnvelopeClosedIcon, GitHubLogoIcon, GlobeIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";

function Cv() {

  return (
    <main className="container relative mx-auto scroll-my-12 overflow-auto p-4 print:p-12 md:p-16">
      <section className="mx-auto w-full max-w-2xl space-y-8 bg-white print:space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex-1 space-y-1.5">
            <h1 className="text-2xl font-bold">Guillaume Thibault</h1>
            <p className="max-w-md text-pretty font-mono text-sm text-muted-foreground">
              ...
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
            ...
          </p>
        </Section>
        <Section>
          <h2 className="text-xl font-bold">Work Experience</h2>
            <p> ... </p>
        </Section>
        <Section>
          <h2 className="text-xl font-bold">Education</h2>
            <p> ... </p>
        </Section>
        <Section>
          <h2 className="text-xl font-bold">Skills</h2>
          <div className="flex flex-wrap gap-1">
              <Badge>Python</Badge>;
              <Badge>TypeScript</Badge>;
              <Badge>Rust</Badge>;
          </div>
        </Section>

        <Section className="print-force-new-page scroll-mb-16">
          <h2 className="text-xl font-bold">Projects</h2>
          <div className="-mx-3 grid grid-cols-1 gap-3 print:grid-cols-3 print:gap-2 md:grid-cols-2 lg:grid-cols-3">
            "Project"
          </div>
        </Section>
      </section>

    </main>
  )
}

export default Cv 
