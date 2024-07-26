import { Icons } from "../Icons";

const PRICING = [
  {
    id: 1,
    label: "Standard",
    price: 99,
    active: false,
    features: [
      "Access to a library of healthy recipes",
      "Weekly meal planning guide",
      "Limited access to expert support",
      "Personalized meal planning based on dietary needs and goals",
    ],
  },

  {
    id: 2,
    label: "Premium",
    price: 99,
    active: false,
    features: [
      " Unlimited access to expert support (nutritionists, coaches)",
      "Personalized meal planning based on dietary needs and goals",
      "Progress tracking and monitoring",
    ],
  },

  {
    id: 3,
    label: "Customized",
    price: "$$",
    active: true,
    features: [
      "Access to a library of healthy recipes",
      "Weekly meal planning guide",
      "Limited access to expert support",
      "Personalized meal planning based on dietary needs and goals",
    ],
  },
];

function Pricing() {
  return (
    <section className="py-16" id="pricing">
      <div className="container space-y-6">
        <header className="space-y-1 text-center">
          <h2 className="text-secondary">Pricing</h2>
          <p className="font-bold leading-5">Flexible Subscription Plans</p>
        </header>

        <ul className="grid gap-8 lg:grid-cols-3">
          {PRICING.map((item) => {
            const { id, label, price, active, features } = item;

            return (
              <li
                key={id}
                className={`${
                  active ? "bg-[#4F771C] text-background" : "bg-[#F0F5EA]"
                } grid space-y-12 rounded-md py-6 px-4`}
              >
                <header className="space-y-4 text-center">
                  <p className="text-lg font-bold">{label}</p>
                  <h3 className="">
                    <sub>$</sub>
                    <span className="text-[3rem]"> {price}</span>
                    <sub> / yr.</sub>
                  </h3>
                </header>

                {/* features */}
                <ul className="grid gap-2 text-sm">
                  {features.map((item, idx) => {
                    return (
                      <li key={idx} className="flex items-center gap-4">
                        <span
                          className={`${
                            active ? "text-primary" : "text-background"
                          }`}
                        >
                          <Icons.Check
                            fill={`${active ? "#fff" : "#4F771C"}`}
                          />
                        </span>

                        <p
                          className={`max-w-xs leading-5 ${
                            active ? "text-background" : "text-foreground"
                          }`}
                        >
                          {item}
                        </p>
                      </li>
                    );
                  })}
                </ul>

                <button
                  className={`${
                    active && "bg-background text-secondary"
                  } mx-auto block w-[90%] rounded-md bg-[#4F771C] px-6 py-2 capitalize text-background`}
                >
                  book now
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default Pricing;
