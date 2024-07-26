import Image from "next/image";
import AboutImg from "/public/images/about/about-img.png";

function About() {
  return (
    <section className="py-16" id="about">
      <div className="container grid gap-[3.313rem] lg:grid-cols-2">
        {/* img wrapper */}
        <div className="relative h-[24rem] w-full lg:h-[38rem]">
          <Image
            src={AboutImg}
            alt=""
            fill
            sizes="100vw"
            placeholder="blur"
            className="object-cover"
          />
        </div>

        {/* text wrapper */}
        <div className="space-y-6 self-center">
          <header className="space-y-4">
            <h2 className="text-secondary">
              About Mindful <span className="text-[#4F771C]">Eating</span>
            </h2>

            <h3 className="lg:leading-[2.5rem] max-w-[25rem] leading-9">
              Fuel your body, fuel your life: Better nutrition for optimal
              health and happiness!
            </h3>
          </header>

          <p className="text-[.875rem]">
            Good nutrition provides the body with the necessary building blocks
            for growth, development, and maintenance of optimal health. It
            involves consuming a balanced diet that includes a variety of
            nutrient-dense foods from all food groups, such as
          </p>

          <ul className="grid gap-5 lg:grid-cols-2 text-[.875rem] font-semibold">
            <li className="flex items-center gap-2">
              <Image alt="/check" src="/check.png" width={30} height={30} />
              <p>Wellness Through Nutrients</p>
            </li>

            <li className="flex items-center gap-2">
              <Image alt="/check" src="/check.png" width={30} height={30} />
              <p>Balance eating Lifestyle</p>
            </li>

            <li className="flex items-center gap-2">
              <Image alt="/check" src="/check.png" width={30} height={30} />
              <p>Wholesome Living</p>
            </li>

            <li className="flex items-center gap-2">
              <Image alt="/check" src="/check.png" width={30} height={30} />
              <p>Healthy Food Choice</p>
            </li>

            <li className="flex items-center gap-2">
              <Image alt="/check" src="/check.png" width={30} height={30} />
              <p>Nutrients Way of Life</p>
            </li>

            <li className="flex items-center gap-2">
              <Image alt="/check" src="/check.png" width={30} height={30} />
              <p>Nutritious Living</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
