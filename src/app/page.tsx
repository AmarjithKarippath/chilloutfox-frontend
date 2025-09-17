import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Benefits } from "@/components/Benefits";
import { Video } from "@/components/Video";
// import { Testimonials } from "@/components/Testimonials";
// import { Faq } from "@/components/Faq";
import { Cta } from "@/components/Cta";

import { benefitOne, benefitTwo, claimYourself } from "@/components/data";



export default function Home() {
  return (


    <Container>




      <Hero />
      <SectionTitle
        // preTitle="Chillout Fox Benefits"
        title="Everything you need, in One Card"
      >
        Experience the next generation of financial freedom with our premium credit card. Smart spending insights, unbeatable rewards, and security that adapts to your lifestyle.
      </SectionTitle>

      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />

      <SectionTitle
        // preTitle="Watch a video"
        title="Your First Credit Card? What Every Beginner Should Know"
      >If you've never had a credit card before, stepping into the world of plastic money can feel like entering a maze of jargon. 
      In this beginner-friendly guide, Amelia breaks down the essentials for you.
      </SectionTitle>

      <Video videoId="-IiCCdhBaC4" />
  <Benefits data={claimYourself} />



      {/* <SectionTitle
        preTitle="Testimonials"
        title="Here's what our users said"
      >
        Testimonials is a great way to increase the brand trust and awareness.
        Use this section to highlight your popular customers.
      </SectionTitle>

      <Testimonials /> */}

      {/* <SectionTitle 
        // preTitle="FAQ" 
        title="Frequently Asked Questions">
        Answer your customers possible questions here, it will increase the
        conversion rate as well as support or chat requests.
      </SectionTitle> */}

      {/* <Faq /> */}
      <Cta />
    </Container>
  );
}
