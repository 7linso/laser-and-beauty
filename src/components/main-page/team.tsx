import team from "@/data/team.json";
import AnimatedElement from "../animated-element";
import Card from "../card";
import Image from "next/image";
import ExpandableText from "../expandable-text";

export default function Team() {
  return (
    <section className="py-20 px-4">
      <h2 className="text-4xl font-semibold text-center text-teal-900 mb-12">
        Meet Our Team
      </h2>
      <div className="overflow-x-auto pb-4 px-4 scrollbar-styled">
        <AnimatedElement>
          <div className="flex gap-6 w-max mx-auto items-start">
            {team.map((t, index) => (
              <Card
                key={index}
                className="w-80 min-w-[20rem] flex-shrink-0 flex flex-col p-2"
              >
                <div className="flex flex-col items-center">
                  <div className="w-40 h-40 rounded-full overflow-hidden relative">
                    <Image
                      fill
                      className="object-cover object-top"
                      sizes="50vw"
                      src={t.image}
                      alt={t.name}
                      loading="lazy"
                      draggable={false}
                    />
                  </div>

                  <h2 className="text-center text-xl font-semibold text-teal-800 mb-1">
                    {t.name}
                  </h2>
                  <p className="text-center text-gray-400 text-sm mb-3">
                    {t.location}
                  </p>
                </div>
                <div className="px-2">
                  <ExpandableText content={t.description} />
                </div>
              </Card>
            ))}
          </div>
        </AnimatedElement>
      </div>
      <p className="text-sm text-gray-100 pl-1 md:hidden animate-pulse">
        Swipe to scroll →
      </p>
    </section>
  );
}
