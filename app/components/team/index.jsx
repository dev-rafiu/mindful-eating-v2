import Image from "next/image";

const TEAM = [
  {
    id: 1,
    imgUrl: "/images/team/halima.png",
    name: "Miss Halimah",
    title: "Junior Chef",
  },

  {
    id: 2,
    imgUrl: "/images/team/john.png",
    name: "Mr John",
    title: "Senior Chef",
  },

  {
    id: 3,
    imgUrl: "/images/team/ehinomen.png",
    name: "Miss Ehinomen",
    title: "Junior Chef",
  },
];

function Team() {
  return (
    <section className="bg-[#F0F5EA] py-16">
      <div className="space-y-6 relative container">
        <header className="space-y-2">
          <h2 className="text-secondary">Team</h2>
          <p className="font-bold leading-5">Meet Our Team</p>
        </header>

        <Image
          src="/curvy-line.png"
          alt=""
          width={1000}
          height={100}
          sizes="100vw"
          className="absolute left-0 right-0 mx-auto top-[150px] hidden lg:block"
        />

        <ul className="scrollbar-hide grid snap-x snap-mandatory grid-flow-col gap-8 overflow-x-auto overscroll-contain scroll-smooth max-w-6xl mx-auto">
          {TEAM.map((item) => {
            const { id, name, imgUrl, title } = item;
            return (
              <li
                key={id}
                className="space-y-4 rounded-md bg-[#F0F5EA] p-4 text-center"
              >
                <div className="relative mx-auto h-[15rem] w-[15rem] rounded-full">
                  <Image
                    src={imgUrl}
                    alt={name}
                    fill
                    sizes="100vw"
                    className="object-cover"
                  />
                </div>

                <div className="">
                  <p className="text-base font-bold">{name}</p>
                  <p className="text-sm">{title}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default Team;
