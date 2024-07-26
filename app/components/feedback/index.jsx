"use client";

import PaginatedItems from "./Pagination";

const FEEDBACKS = [
  {
    id: 1,
    name: "Emily Wilson",
    active: false,
    feedback:
      "I lost 15 pounds in just 3 months with this program! The meal plans and workout routines were easy to follow and tailored to my needs.",
  },
  {
    id: 2,
    name: "Sarah Thompson",
    active: true,
    feedback:
      "I was struggling to stick to a diet, but this program's supportive community and accountability features kept me on track. I've lost 20 pounds and feel amazing",
  },
  {
    id: 3,
    name: "Olivia Martinez",
    active: false,
    feedback:
      "I was skeptical at first, but the personalized coaching and nutrition advice helped me achieve my weight loss goals. I feel more confident and energized than ever",
  },
];

function Feedback() {
  return (
    <section className="py-10">
      <div className="container space-y-6">
        <header className="">
          <h2>Feedback corner</h2>
        </header>

        <PaginatedItems data={FEEDBACKS} />
      </div>
    </section>
  );
}

export default Feedback;
