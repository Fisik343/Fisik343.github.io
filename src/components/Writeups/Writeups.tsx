import { Body, Header, Page, CardBox, LinkCard } from "../common";

function Writeups() {
  return (
    <Page>
      <Header>Writeups</Header>
      <Body>
        Here are some writeups for events or puzzles I've done. Usually this is
        the part where I pretend like I absolutely 100% definitely knew exactly
        what I was doing the entire time I was solving these challenges and
        totally didn't struggle through them, losing a small piece of my sanity
        with each attempt. It couldn't be that at all, I swear!
      </Body>
      <Body>
        But in all seriousness, I <em>will</em> try my best to explain my
        thought process instead of only writing out a polished solution. If
        there are any notable failures along the way that I remember to
        document, I'll include those too.
      </Body>
      <CardBox>
        <LinkCard
          link="/#/writeups/mats-x-trails"
          title="MATS x Trails"
          body="A HackAPrompt agentic AI red-teaming competition"
        />
        <LinkCard
          link="/#/writeups/advent-of-code-2025"
          title="Advent of Code 2025"
          body="A yearly programming challenge"
        />
      </CardBox>
    </Page>
  );
}

export default Writeups;
