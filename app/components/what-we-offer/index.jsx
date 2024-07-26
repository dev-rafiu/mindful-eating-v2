import Image from "next/image";
import DieticienImg from "/public/images/offer/dieticien.png";
import YogaImg from "/public/images/offer/yoga.png";
import WeightManagement from "/public/images/offer/weightmgt.png";

function WhatWeOffer() {
  return (
    <section className="py-16" id="services">
      <div className="container space-y-8">
        <header className="space-y-2">
          <h2 className="text-secondary">What we offer</h2>
          <h3>Service $ Program</h3>
        </header>

        <ul className="grid gap-8 lg:grid-cols-3">
          <li>
            <div className="relative h-[21.938rem] overflow-hidden rounded">
              <Image
                src={DieticienImg}
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
                src={YogaImg}
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
                src={WeightManagement}
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

export default WhatWeOffer;
