import { Body, Header, Page, SubSubHeader } from "../common";

function FAQs() {
  return (
    <Page>
      <Header>(in)Frequently Asked Questions</Header>
      <Body>
        Here's an entire space dedicated to questions I've asked myself about
        this site that you may be asking as well (if you are asking questions
        about some internet stranger's website, please seek professional help
        &ndash; this is not something you should be wasting time concerning
        yourself with). This is primarily just me entertaining myself some more.
      </Body>
      <SubSubHeader>Just... why?</SubSubHeader>
      <Body>
        I ask myself the same thing every day. At this point I'm leaning more
        toward "just... why not?" I need a place to put my stuff and I'd rather
        it be here than LinkedIn. I at least get to have a personality here and
        don't have to pretend that made up tragedies taught me some abstract
        lesson about B2B sales.
      </Body>
      <SubSubHeader>Why GitHub Pages?</SubSubHeader>
      <Body>
        It's all I need at this point. I only have static content, so this is
        the cheapest, easiest way to go about it in a way that meets the
        requirements (present and future) I have for this. If I ever need or
        want to do anything that won't work on GH pages, I'll move away from it.
        But only when that time comes, or if I decide to just for funsies.
      </Body>
      <SubSubHeader>Do you take feedback?</SubSubHeader>
      <Body>
        Yes! Just reach out to me on whatever platform led you here. I'm not
        putting contact information on here lmao.
      </Body>
      <SubSubHeader>
        Why does it look like this? Where's the design?
      </SubSubHeader>
      <Body>
        It's somewhere in the future. To start, I'm prioritizing content over
        design. Maybe when I get the time and am not doing other things that are
        more interesting to me I'll make this site pretty.
      </Body>
      <SubSubHeader>
        Will you ever use AI to write anything on here?
      </SubSubHeader>
      <Body>
        It's a personal site... the fun is in putting it together. Why would I
        outsource having fun to an unthinking unfeeling machine? Are you stupid?
        Do you hate fun?
      </Body>
      <SubSubHeader>Why isn't there more content on the site yet?</SubSubHeader>
      <Body>
        Jeeeeez, you really are impatient, aren't you? I'm just one idiot with a
        keyboard and a very finite amount of time. There will be content when I
        get around to it.
      </Body>
      <SubSubHeader>
        So you don't use AI and don't have much content... seems like you could
        fix this problem?
      </SubSubHeader>
      <Body>
        Shush shush shush... this is my imaginary conversation. Just like this
        is my website. The answer is no. God, I'm really doing the "have you
        worn wigs" bit with myself about using AI at this point. Hopefully
        somebody enjoys my ramblings.
      </Body>
      <SubSubHeader>
        Will there be more (in)frequently asked questions?
      </SubSubHeader>
      <Body>
        Yes! Eventually... The length of this page is positively correlated with
        my available free time and negatively correlated with my sanity.
      </Body>
      <SubSubHeader>What's up with the # in the URL?</SubSubHeader>
      <Body>
        I'm using React Router to handle routing, and GitHub Pages doesn't
        support some of the underlying technology for the commonly used
        BrowserRouter interface. So, to get around this, I'm using the
        HashRouter interface which uses the hash (#) portion of the URL for
        routing.
      </Body>
    </Page>
  );
}

export default FAQs;
