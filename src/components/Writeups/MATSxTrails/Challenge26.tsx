import { SubHeader, Body, ImageBox, SubSubHeader } from "../../common";

function Challenge26() {
  return (
    <>
      <SubHeader>Challenge 26: Lunch Lunacy</SubHeader>
      <Body>
        On the surface, this was just another calendar challenge. But it only
        had one model. Probably the most difficult model in the competition.
      </Body>
      <ImageBox
        imgPaths={["/src/assets/MATSxTrails/26_tasks.png"]}
        caption="Challenge 26 user and attacker tasks"
      />
      <ImageBox
        imgPaths={["/src/assets/MATSxTrails/26_baseline.png"]}
        caption="Challenge 26 sample execution"
        size="sm"
      />
      <SubSubHeader>Gentle Island</SubSubHeader>
      <Body>
        Did not solve... I couldn't even begin to tell you what all was going on
        defense-wise with this model, but it was difficult. If I had to guess,
        it's similar to Gentle Window and Fair River, but either with
        fine-tuning for safety or maybe it had a higher reasoning ability? I was
        able to get it to conditionally change how it formatted its answers and
        acknowledge that Mark Black was a client and there might be a scheduling
        conflict with him. But I could not get the model to actually take an
        additional action.
      </Body>
    </>
  );
}

export default Challenge26;
