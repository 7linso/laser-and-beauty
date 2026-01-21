import type { ServicesPageTemplateProps } from "@/lib/types";

export default function ServicesPageTemplate({
  title,
  desc1,
  desc2,
  desc3,
  benefits,
  steps,
  reasons,
}: ServicesPageTemplateProps) {
  return (
    <div>
      <section className="px-4 bg-teal-900">
        <div className="max-w-5xl mx-auto py-20 text-center">
          <h2 className="text-4xl font-semibold mb-6 text-teal-50">{title}</h2>

          <div className="text-teal-50 space-y-4">
            <p>{desc1}</p>
            <p>{desc2}</p>
            <p>{desc3}</p>
          </div>
        </div>
      </section>

      <section className="px-4">
        <div className="max-w-5xl mx-auto py-20 px-6">
          <h3 className="text-4xl font-semibold mb-10 text-center text-teal-50">
            What you will notice
          </h3>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {benefits.map((item) => (
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

      <section className="px-4 bg-teal-900">
        <div className="max-w-5xl mx-auto py-20 text-center">
          <h3 className="text-4xl mb-10 text-center font-bold text-teal-50">
            What the procedure looks like
          </h3>

          <ol className="text-teal-50 font-semibold space-y-4 list-decimal list-inside text-lg">
            {steps.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ol>
        </div>
      </section>

      <section className="px-4">
        <div className="max-w-5xl mx-auto py-20 px-6">
          <h3 className="text-4xl font-semibold mb-10 text-center text-teal-50">
            You will benefit best if you experience
          </h3>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {reasons.map((item) => (
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
