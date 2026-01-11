import AnimatedElement from "../animated-element";
import Button from "../button";

export default function Offers() {
  return (
    <section className="pt-20 pb-16 text-center">
      <AnimatedElement>
        <h2 className="text-4xl font-semibold mb-6 text-teal-900">
          Our Special Offers
        </h2>
        <p className="p-2 font-semibold text-teal-900">
          First visit Laser session 20% OFF or FREE underarms
        </p>
        <p className=" font-semibold p-2 text-teal-900">
          Friend referral Laser session 20% OFF
        </p>
        <p className=" font-semibold p-2 text-teal-900">
          Get any 3 areas and Get 20% OFF
        </p>
        <p className="mb-4 p-2 font-semibold text-teal-900">
          <span className="font-bold">Diode SPECIAL: </span>
          <br></br>
          Buy for 5 sessions or more and Pay only 50$ per area!
        </p>
        <Button buttonText="Book"/>
      </AnimatedElement>
    </section>
  );
}
