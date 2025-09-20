import VideoPlayer from "@/components/video-player";
import Button from "@/components/button";
import Card from "@/components/card";
import AnimatedElement from "@/components/animated-element";
import Gallery from "@/components/gallery";
import pedicureImages from "../../data/pedicure-gallery.json"
import manicureImages from "../../data/manicure-gallery.json"

export default function TrainingsPage() {
  const videoSource =
    "https://res.cloudinary.com/dqvthdtuu/video/upload/v1758205433/video_2025-05-06_11-38-31_dxaxng_mbgktt.mp4";

  return (
    <div className="max-w-5xl mx-auto p-8">
      <h1 className="text-4xl font-bold text-teal-900 mb-10">
        Get Certified & Launch Your Career!
      </h1>

      <AnimatedElement>
        <Card className="p-6 mb-10">
          {/* Flex container: column on mobile, row on md+ */}
          <div className="flex flex-col md:flex-row gap-6">
            {/* LEFT: Text */}
            <div className="md:w-1/2">
              <h2 className="text-2xl font-semibold text-teal-800 mb-3">
                Ready to begin a new chapter?
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                This course is thoughtfully designed to give you the skills
                and confidence you need to launch your own sugaring business.
                Whether you&apos;re starting from scratch or looking to enhance
                your knowledge, you&apos;re in the right place!
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                By the end of this training, you&apos;ll understand all the
                essentials of professional sugaring, including theory,
                technique, and client care.
              </p>

              <h2 className="text-2xl font-semibold text-teal-800 mb-3">
                Day 1: Foundation & Fundamentals
              </h2>
              <ul className="list-disc list-inside text-gray-700 mb-6 leading-relaxed">
                <li>Introduction to sugaring & its benefits</li>
                <li>Hair and skin anatomy</li>
                <li>Hygiene protocols: sanitation & disinfection</li>
                <li>Pre- and post-treatment care</li>
                <li>Product knowledge & selection</li>
                <li>Studio setup for success</li>
                <li>How to conduct professional client consultations</li>
              </ul>

              <h2 className="text-2xl font-semibold text-teal-800 mb-3">
                Day 2: Hands-On Practice & Mastery
              </h2>
              <ul className="list-disc list-inside text-gray-700 mb-6">
                <li>
                  Live demonstrations: legs, bikini, underarms, face & Brazilian
                </li>
                <li>Supervised hands-on practice for each treatment area</li>
                <li>Troubleshooting common issues</li>
                <li>Understanding paste types & heating techniques</li>
              </ul>

              <h2 className="text-2xl font-semibold text-teal-800 mb-3">
                Prefer Waxing Instead?
              </h2>
              <p className="text-gray-700 mb-4">
                If sugaring isn&apos;t quite what you&apos;re looking for, we also
                offer a complete professional waxing course that covers
                everything you need to get started.
              </p>

              <Button />

              {/* SMALL SCREENS: video after button */}
              <div className="mt-6 md:hidden">
                <h3 className="text-2xl font-semibold text-teal-800 mb-3 text-center">
                  Watch the Course Preview
                </h3>
                <div className="relative w-full aspect-[9/16] overflow-hidden rounded-lg">
                  <VideoPlayer link={videoSource} />
                </div>
              </div>
            </div>

            {/* RIGHT: Video for md+ */}
            <div className="hidden md:flex md:w-1/2 flex-col items-center">
              <h3 className="text-2xl font-semibold text-teal-800 mb-3 text-center">
                Watch the Course Preview
              </h3>
              <div className="relative w-full aspect-[9/16] overflow-hidden rounded-lg">
                <VideoPlayer link={videoSource} />
              </div>
            </div>
          </div>
        </Card>
      </AnimatedElement>

      <AnimatedElement>
        <Card className="p-6 mb-10">
          {/* Flex container: column on mobile, row on md+ */}
          <div className="flex flex-col md:flex-row gap-6 items-center">
            {/* LEFT: Text */}
            <div className="md:w-1/2">
              <h2 className="text-2xl font-semibold text-teal-800 mb-3">
                E-File Pedicure Training
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Enhance your professional skills with our 1-day, 6-hour E-File Pedicure Training designed for experienced nail technicians. This intensive course will teach you how to perform a modern pedicure using an e-file with pododiscs — without cutting tools. You&apos;ll learn safe and precise techniques for cuticle work, callus removal, and professional finishing.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                By the end of the training, you will feel confident in offering a safe, high-quality, and in-demand pedicure service that your clients will love.
              </p>

              <h2 className="text-2xl font-semibold text-teal-800 mb-3">
                Course Details:
              </h2>
              <ul className="list-disc list-inside text-gray-700 mb-6 leading-relaxed">
                <li>Duration: 1 day (6 hours)</li>
                <li>Practice: Work on 2 live models</li>
                <li>Focus: E-file pedicure techniques, pododiscs, safe cuticle treatment</li>
              </ul>

              <Button />

              {/* SMALL SCREENS: video after button */}
              <div className="mt-6 md:hidden">
                <div className="relative w-full overflow-hidden rounded-lg">
                  <Gallery images={pedicureImages} showArrows={false} />
                </div>
              </div>
            </div>

            {/* RIGHT: Video for md+ */}
            <div className="hidden md:flex md:w-1/2 flex-col items-center">
              <div className="relative w-full overflow-hidden rounded-lg">
                <Gallery images={pedicureImages} />
              </div>
            </div>
          </div>
        </Card>
      </AnimatedElement>


      <AnimatedElement>
        <Card className="p-6">
          {/* Flex container: column on mobile, row on md+ */}
          <div className="flex flex-col md:flex-row gap-6 items-center">
            {/* LEFT: Text */}
            <div className="md:w-1/2">
              <h2 className="text-2xl font-semibold text-teal-800 mb-3">
                E-File Manicure Training
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Take your manicure skills to the next level with our 1-day intensive E-File Manicure Training designed for experienced nail technicians. In this course, you&apos;ll learn how to perform a flawless manicure with gel polish application under the cuticle for a perfectly clean and long-lasting look.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                By the end of the training, you’ll feel confident offering a precise, modern, and in-demand manicure service that keeps clients coming back.
              </p>

              <h2 className="text-2xl font-semibold text-teal-800 mb-3">
                Course Details:
              </h2>
              <ul className="list-disc list-inside text-gray-700 mb-6 leading-relaxed">
                <li>Duration: 1 day (practice-focused)</li>
                <li>Work on 2 models</li>
                <li>Techniques: Safe cuticle work with e-file, gel polish application under the cuticle</li>
              </ul>

              <Button />

              {/* SMALL SCREENS: video after button */}
              <div className="mt-6 md:hidden">
                <div className="relative w-full overflow-hidden rounded-lg">
                  <Gallery images={manicureImages} showArrows={false} />
                </div>
              </div>
            </div>

            {/* RIGHT: Video for md+ */}
            <div className="hidden md:flex md:w-1/2 flex-col items-center">
              <div className="relative w-full overflow-hidden rounded-lg">
                <Gallery images={manicureImages} />
              </div>
            </div>
          </div>
        </Card>
      </AnimatedElement>
    </div>
  );
}
