const ARTICLE = [
  {
    id: 1,
    img: "",
    label: "Best Weight-Loss Programs of 2024",
    text: `
    WeightWatchers: This weight loss program focuses on long-term weight loss through behavioral change,
    nutrition science and social support. - Mediterranean Diet: This diet emphasizes quality and lifestyle
    rather than a single nutrient or food group. It reduces the risk of chronic health conditions.
  `,
  },

  {
    id: 2,
    img: "",
    label: "Best Diet Plans Of 2024",
    text: `
    These diet plans prioritize nutrient-dense foods, portion control, and mindful eating habits.
    Say goodbye to fad diets and hello to a healthier, happier you! Choose the best diet plan that suits
    your lifestyle and goals, and start your weight loss journey today.
   `,
  },

  {
    id: 3,
    img: "",
    label: "Mayo Clinic Diet",
    text: `
    Mayo Clinic Diet: A 12-week program for sustainable weight loss and healthy habits.
    Emphasizes whole, unprocessed foods, portion control, and mindful eating. Phased approach:
  `,
  },
];

function Article() {
  return (
    <section className="">
      <header className="">
        <h2 className="">Article </h2>
        <p className="">Our Latest Article</p>
      </header>

      <ul className="">
        {ARTICLE.map((item) => {
          const { id, img, label, text } = item;

          return (
            <li key={id}>
              <h3>{label}</h3>
              <p>{text}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default Article;
