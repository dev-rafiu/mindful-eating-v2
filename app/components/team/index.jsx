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
      <div className="space-y-6">
        <header className="space-y-2 text-center">
          <h2 className="text-secondary">Team</h2>
          <p className="font-bold">Meet Our Team</p>
        </header>

        <ul className="grid gap-8 lg:grid-cols-3">
          {TEAM.map((item) => {
            const { id, name, imgUrl, title } = item;

            return (
              <li
                key={id}
                className="space-y-4 rounded-md bg-[#F0F5EA] p-4 text-center"
              >
                <div className="relative mx-auto h-[15rem] w-[15rem] rounded-full lg:h-[25rem] lg:w-[25rem]">
                  <Image
                    src={imgUrl}
                    alt={name}
                    fill
                    sizes="100vw"
                    className="object-cover"
                  />
                </div>

                <div>
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
