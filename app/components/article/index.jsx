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
    <section className="py-16">
      <div className="container space-y-6">
        <header className="space-y-2 text-center">
          <h2 className="text-secondary">Article </h2>
          <p className="font-bold">Our Latest Article</p>
        </header>

        <ul className="grid gap-8 lg:grid-cols-3">
          {ARTICLE.map((item) => {
            const { id, label, text, imgUrl } = item;

            return (
              <li key={id} className="space-y-2 rounded-md bg-[#F0F5EA] p-4">
                <img src={imgUrl} alt="" />
                <p className="text-center text-base font-bold">{label}</p>
                <p className="text-sm leading-6">
                  {text}{" "}
                  <a href="" className="text-secondary">
                    Read more
                  </a>
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default Article;
