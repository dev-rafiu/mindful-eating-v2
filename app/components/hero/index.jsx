import Image from "next/image";
import HeroImg from "/public/images/hero/hero-img.png";

function Hero() {
  return (
    <section>
      <div className="container grid gap-10 lg:grid-cols-2">
        <div className="space-y-4 self-center pt-10 lg:space-y-8 lg:py-0">
          <h1 className="max-w-sm font-medium lg:leading-[3.2rem]">
            Discover a New You with Our Expert Guidance
          </h1>

          <p>
            Transform Your Health, One Bite at a Time. Nourish Your Body with
            Wholesome Foods, Fuel Your Mind with Nutrient-Rich Ingredients, and
            Discover a Happier, Healthier You. Eat Well.
          </p>

          <div className="flex items-center gap-4">
            <button className="bg-secondary rounded px-6 py-3 capitalize text-background">
              get started now
            </button>
            <button className="border-secondary text-secondary rounded border px-6 py-3 capitalize">
              enroll now
            </button>
          </div>
        </div>

        <div className="relative h-[25rem] lg:h-[35rem]">
          <Image
            src={HeroImg}
            alt=""
            fill
            sizes="100vw"
            placeholder="blur"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
export default Hero;
