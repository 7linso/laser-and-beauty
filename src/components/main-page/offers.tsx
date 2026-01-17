import AnimatedElement from "../animated-element";
import Button from "../button";

export default function Offers() {
  return (
    <section className="pt-20 pb-16 text-center">
      <AnimatedElement>
        <h2 className="text-4xl font-semibold mb-6 text-teal-900">
          Laser Hair Removal Promotions
        </h2>
        <p className="p-2 font-semibold text-teal-900">
          20% OFF your First laser session or FREE underarms
        </p>
        <p className=" font-semibold p-2 text-teal-900">
            Receive 20% OFF when you refer a friend
        </p>
        <p className=" font-semibold p-2 text-teal-900">
          Get 20% OFF when you book any 3 areas
        </p>
        <p className=" font-semibold p-2 text-teal-900">
          Pay for 5 sessions and Get 1 for FREE
        </p>
        <p className="mb-4 p-2 font-semibold text-teal-900">
          <span className="font-bold">DIODE Laser SPECIAL: </span>
          <br></br>
           Book 5 areas or more and pay only $50 per area
        </p>
        <Button buttonText="Book"/>
      </AnimatedElement>
    </section>
  );
}
