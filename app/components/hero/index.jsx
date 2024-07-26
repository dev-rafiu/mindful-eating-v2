import Image from "next/image";
import HeroImg from "/public/images/hero/hero-img.png";
import Link from "next/link";

function Hero() {
  return (
    <section className="py-16">
      <div className="container grid gap-10 lg:grid-cols-2">
        {/* text wrapper */}
        <div className="self-center space-y-10">
          <div className="space-y-4 lg:space-y-[2.125rem]">
            <h1 className="max-w-[29.5rem] font-medium lg:leading-[3.8rem] lg:text-[3.5rem]">
              Discover a New You with Our Expert Guidance
            </h1>

            <p className="text-sm leading-[1.625rem]">
              Transform your health, one bite at a time. Nourish your body with
              wholesome foods, fuel your mind with nutrient-rich ingredients,
              and discover a happier, healthier you. Eat well.
            </p>
          </div>

          {/* call to actions */}
          <div className="flex items-center gap-6">
            <Link
              href=""
              className="bg-secondary rounded px-5 py-3 capitalize text-background font-medium"
            >
              get started now
            </Link>

            <Link
              href=""
              className="border-secondary text-secondary rounded border px-5 py-3 capitalize font-medium"
            >
              enroll now
            </Link>
          </div>
        </div>

        {/* img wrapper */}
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
