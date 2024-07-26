import Image from "next/image";
import Img1 from "/public/images/diet-plan/img1.png";
import Img2 from "/public/images/diet-plan/img2.png";
import Img3 from "/public/images/diet-plan/img3.png";

const TABS = ["monday", "tuesday", "wednesday", "thursday", "friday"];

function DietPlan() {
  return (
    <section className="py-16" id="services">
      <div className="container space-y-[2rem]">
        <header className="space-y-2">
          <h2 className="text-secondary">Diet plan</h2>
          <p className="font-bold leading-5">Weekly Diet Plan</p>
        </header>

        {/* tabs */}
        <div className="scrollbar-hide py-1 grid snap-x snap-mandatory grid-flow-col gap-8 overflow-x-auto overscroll-contain scroll-smooth whitespace-nowrap max-w-4xl mx-auto">
          {TABS.map((item) => (
            <button
              key={item}
              className={`capitalize py-4 px-4 rounded font-bold ${
                item === "monday"
                  ? "bg-[#4F771C] text-background"
                  : "bg-[#F0F5EA] border border-black/20"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Image gallery */}
        <ul className="grid gap-8 lg:grid-cols-3">
          <li>
            <div className="relative h-[21.938rem] overflow-hidden rounded">
              <Image
                src={Img1}
                alt=""
                fill
                sizes="100vw"
                placeholder="blur"
                className="object-cover"
              />
            </div>
          </li>

          <li>
            <div className="relative h-[21.938rem] overflow-hidden rounded-md">
              <Image
                src={Img2}
                alt=""
                fill
                sizes="100vw"
                placeholder="blur"
                className="object-cover"
              />
            </div>
          </li>

          <li>
            <div className="relative h-[21.938rem] overflow-hidden rounded-md">
              <Image
                src={Img3}
                alt=""
                fill
                sizes="100vw"
                placeholder="blur"
                className="object-cover"
              />
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default DietPlan;
