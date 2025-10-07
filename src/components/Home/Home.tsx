import { Body, Header, Page, LinkCard, CardBox } from "../common";

function Home() {
  return (
    <Page>
      <Header>Hi! Hello! Welcome!</Header>
      <Body>
        I'm Addison and this is my website! It's mostly for me to document the
        various things I've done and to also give myself a frontend sandbox to
        mess around in, but I might do something else with it at some point, who
        knows. I probably won't make this too fancy... there are more
        interesting things to spend my time on. I also probably won't make this
        too formal either because if I don't have at least a little bit of fun
        with this, I won't actually do it ;-;
      </Body>
      <Body>Anyway, please poke around and see what I'm up to!</Body>
      <CardBox>
        <LinkCard
          link="/#/timeline"
          title="Timeline"
          body="A timeline of projects that I've worked on at some point or another!"
        />
        <LinkCard
          link="/#/writeups"
          title="Writeups"
          body="Descriptions of how I solved challenges in events or other puzzles!"
        />
        <LinkCard
          link="/#/sandbox"
          title="Sandbox"
          body="A sandbox for me to play around in!"
        />
        <LinkCard
          link="/#/faqs"
          title="(in)Frequently Asked Questions"
          body="Questions that I have asked myself and that other people may ask!"
        />
      </CardBox>
    </Page>
  );
}
export default Home;
