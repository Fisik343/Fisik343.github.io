import { Body, Header, Page, CardBox, LinkCard } from "../common";

function Sandbox() {
  return (
    <Page>
      <Header>Sandbox</Header>
      <Body>
        Here's my space to play around! There's not much here yet, but maybe
        there will be eventually.
      </Body>
      <CardBox>
        <LinkCard
          link="/#/sandbox/three-solar"
          title="Three.js Solar System"
          body="A solar system rendered with three.js"
        />
      </CardBox>
    </Page>
  );
}

export default Sandbox;
