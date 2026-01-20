import React from "react";

export default function DiodeSkinRej() {
  return (
    <div>
      <section className="bg-teal-900 px-4">
        <div className="max-w-5xl mx-auto pt-20 pb-16 text-center">
          <h2 className="text-4xl font-semibold mb-6 text-teal-50">
            Diode Skin Rejuvenation
          </h2>
          <div className="text-teal-50 space-y-4">
            <p>
              Diode skin rejuvenation is a gentle, non-invasive laser treatment
              designed to improve skin firmness, texture, and overall
              appearance. The diode laser delivers controlled heat into the
              deeper layers of the skin while keeping the surface safe and
              intact.
            </p>

            <p>
              This gentle warming process stimulates your skin&apos;s natural
              healing response, encouraging the production of new collagen and
              elastin — the key building blocks responsible for smooth, firm,
              and youthful-looking skin. As collagen levels increase, the skin
              gradually becomes tighter, more resilient, and more evenly
              textured.
            </p>

            <p>
              Because the treatment works from within, results develop naturally
              over time, leaving the skin refreshed rather than “over-treated.”
              Diode skin rejuvenation is comfortable, requires no downtime, and
              is suitable for maintaining healthy skin or addressing early signs
              of aging.
            </p>
          </div>
        </div>
      </section>

      <section className="px-4">
        <div className="max-w-5xl mx-auto pt-20 pb-16 px-6">
          <h3 className="text-4xl font-semibold mb-10 text-center text-teal-50">
            What you will notice
          </h3>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              "Smoother skin texture",
              "Firmer, tighter skin",
              "Reduced fine lines",
              "Healthier skin glow",
            ].map((item) => (
              <li
                key={item}
                className="backdrop-blur-md bg-white/20 border border-white/10 rounded-lg py-16 text-teal-50 text-xl text-center font-semibold transition hover:bg-white/30"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-teal-600 px-4">
        <div className="max-w-5xl mx-auto pt-20 pb-16 text-center">
          <ol className="text-teal-900 font-semibold space-y-4 list-decimal list-inside text-lg">
            <h3 className="text-4xl mb-10 text-center font-bold">
              What the procedure looks like
            </h3>
            <li>The skin is cleansed and a cooling gel may be applied</li>
            <li>
              The specialist moves a handheld device over the treatment area
            </li>
            <li>You may feel gentle warmth or a mild tingling sensation</li>
            <li>
              A session usually lasts 20–40 minutes, depending on the areas
            </li>
            <li>
              No downtime — you can return to daily activities immediately
            </li>
          </ol>
        </div>
      </section>

      <section className="bg-teal-900 px-4">
        <div className="max-w-5xl mx-auto pt-20 pb-16 px-6">
          <h3 className="text-4xl font-semibold mb-10 text-center text-teal-50">
            You will benefit best if you experience
          </h3>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              "Fine lines and early signs of aging",
              "Loss of firmness and elasticity",
              "Dull or tired-looking skin",
              "Or looking for just better skin",
            ].map((item) => (
              <li
                key={item}
                className="backdrop-blur-md bg-white/20 border border-white/10 rounded-lg py-16 text-teal-50 text-xl text-center font-semibold transition hover:bg-white/30"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
