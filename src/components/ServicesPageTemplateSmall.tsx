import type { ServicesPageTemplateSmallProps } from "@/lib/types";

export default function ServicesPageTemplateSmall({
  title,
  desc1,
  desc2,
  benefits,
}: ServicesPageTemplateSmallProps) {
  return (
    <div>
      <section className="px-4 bg-teal-900">
        <div className="max-w-5xl mx-auto py-20 text-center">
          <h2 className="text-4xl font-semibold mb-6 text-teal-50">{title}</h2>

          <div className="text-teal-50 space-y-4">
            <p>{desc1}</p>
            <p>{desc2}</p>
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
    </div>
  );
}
