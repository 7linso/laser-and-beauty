import React from "react";

export default function IPLSkinRej() {
  return (
    <div>
      <section className="px-4">
        <div className="max-w-5xl mx-auto pt-20 pb-16 text-center">
          <h2 className="text-4xl font-semibold mb-6 text-teal-50">
            IPL Skin Rejuvenation (Intense Pulsed Light)
          </h2>
          <div className="text-teal-50 space-y-4">
            <p>
              IPL Skin Rejuvenation (Intense Pulsed Light) is a non-invasive
              treatment that uses broad-spectrum light to improve skin tone,
              clarity, and overall complexion. Unlike lasers, which use a single
              wavelength, IPL delivers multiple wavelengths of light, allowing
              it to address several skin concerns during one treatment.
            </p>

            <p>
              The light energy is absorbed by areas of excess pigment and
              visible blood vessels beneath the skin. This process helps to fade
              sun damage and age spots, reduce redness and broken capillaries,
              and create a more even skin tone. At the same time, IPL gently
              stimulates collagen production, supporting smoother and
              healthier-looking skin.
            </p>

            <p>
              Over the following days and weeks, pigmentation gradually
              lightens, redness diminishes, and the skin appears clearer and
              more balanced. IPL treatments are quick and comfortable, require
              little to no downtime, and are an excellent option for improving
              signs of sun exposure and photoaging while maintaining a natural,
              refreshed appearance.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-teal-600 px-4">
        <div className="max-w-5xl mx-auto pt-20 pb-16 px-6">
          <h3 className="text-4xl font-semibold mb-10 text-center text-teal-50">
            What you will notice
          </h3>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              "Less redness and discoloration",
              "Clearer skin tone",
              "Pigmented spots disappear",
              "Overall better skin texture",
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

      <section className="px-4">
        <div className="max-w-5xl mx-auto pt-20 pb-16 text-center">
          <ol className="text-teal-900 font-semibold space-y-4 list-decimal list-inside text-lg">
            <h3 className="text-4xl mb-10 text-center font-bold">
              What the procedure looks like
            </h3>
            <li>Protective eyewear is provided</li>
            <li>A cooling gel is applied to the skin</li>
            <li>Light pulses are delivered to the treatment area</li>
            <li>Sensation is often described as a quick warm snap</li>
            <li>Treatment time is usually 20–30 minutes</li>
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
              "Sun damage and pigmentation",
              "Redness and broken capillaries",
              "Uneven skin tone",
              "Signs of photoaging",
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
