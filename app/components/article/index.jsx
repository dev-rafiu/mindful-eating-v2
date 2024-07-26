import Image from "next/image";
import Img1 from "/public/images/article/img-1.png";
import Img2 from "/public/images/article/img-2.png";
import Img3 from "/public/images/article/img-3.png";

const ARTICLE = [
  {
    id: 1,
    label: "Best Weight-Loss Programs of 2024",
    text: `WeightWatchers: This weight loss program focuses on long-term weight loss through behavioral change,
       nutrition science and social support. - Mediterranean Diet: This diet emphasizes quality and lifestyle
       rather than a single nutrient or food group. It reduces the risk of chronic health conditions.`,
    imgUrl: "/images/article/img-1.png",
  },

  {
    id: 2,
    label: "Best Diet Plans Of 2024",
    text: `These diet plans prioritize nutrient-dense foods, portion control, and mindful eating habits.
       Say goodbye to fad diets and hello to a healthier, happier you! Choose the best diet plan that suits your
       lifestyle and goals, and start your weight loss journey today.`,
    imgUrl: "/images/article/img-2.png",
  },

  {
    id: 3,
    label: "Mayo Clinic Diet",
    text: `Mayo Clinic Diet: A 12-week program for sustainable weight loss and healthy habits.
        Emphasizes whole, unprocessed foods, portion control, and mindful eating. Phased approach: 
        Lose It! (weeks 1-2): Jumpstart weight loss with a strict meal plan`,
    imgUrl: "/images/article/img-3.png",
  },
];

function Article() {
  return (
    <section className="py-16" id="blog">
      <div className="container space-y-6">
        <header className="space-y-1">
          <h2 className="text-secondary">Article </h2>
          <p className="font-bold leading-5">Our Latest Article</p>
        </header>

        <ul className="grid gap-8 lg:grid-cols-3 lg:text-center text-left">
          <li className="space-y-2 rounded-md bg-[#F0F5EA] p-4">
            <div className="relative w-full h-[15.75rem]">
              <Image
                src={Img1}
                alt=""
                fill
                placeholder="blur"
                className="object-cover"
              />
            </div>

            <p className="text-center text-base font-bold">
              Best Weight-Loss Programs of 2024
            </p>

            <p className="text-sm leading-6">
              WeightWatchers: This weight loss program focuses on long-term
              weight loss through behavioral change, nutrition science and
              social support. - Mediterranean Diet: This diet emphasizes quality
              and lifestyle rather than a single nutrient or food group. It
              reduces the risk of chronic health conditions.
              <a href="" className="text-secondary ml-2">
                Read more
              </a>
            </p>
          </li>

          <li className="space-y-2 rounded-md bg-[#F0F5EA] p-4">
            <div className="relative w-full h-[15.75rem]">
              <Image
                src={Img2}
                alt=""
                fill
                placeholder="blur"
                className="object-cover"
              />
            </div>

            <p className="text-center text-base font-bold">
              Best Diet Plans Of 2024
            </p>

            <p className="text-sm leading-6">
              These diet plans prioritize nutrient-dense foods, portion control,
              and mindful eating habits. Say goodbye to fad diets and hello to a
              healthier, happier you! Choose the best diet plan that suits your
              lifestyle and goals, and start your weight loss journey today.
              <a href="" className="text-secondary ml-2">
                Read more
              </a>
            </p>
          </li>

          <li className="space-y-2 rounded-md bg-[#F0F5EA] p-4">
            <div className="relative w-full h-[15.75rem]">
              <Image
                src={Img3}
                alt=""
                fill
                placeholder="blur"
                className="object-cover"
              />
            </div>

            <p className="text-center text-base font-bold">Mayo Clinic Diet</p>

            <p className="text-sm leading-6">
              Mayo Clinic Diet: A 12-week program for sustainable weight loss
              and healthy habits. Emphasizes whole, unprocessed foods, portion
              control, and mindful eating. Phased approach: Lose It! (weeks
              1-2): Jumpstart weight loss with a strict meal plan
              <a href="" className="text-secondary ml-2">
                Read more
              </a>
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Article;
