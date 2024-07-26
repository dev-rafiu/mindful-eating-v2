const MAGIC_BEHIND = [
  {
    id: 1,
    label: "Healthy Recipe",
    text: `Indulge in the Flavor, Nourish Your Body! Our healthy recipe combines wholesome ingredients and expert techniques to create a dish.`,
    Icon: (
      <svg
        width="60"
        height="60"
        viewBox="0 0 60 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M52.5 24.3751H50.5383C50.0672 19.2537 47.6996 14.4931 43.9001 11.027C40.1005 7.56089 35.143 5.6394 30 5.6394C24.857 5.6394 19.8995 7.56089 16.0999 11.027C12.3004 14.4931 9.93284 19.2537 9.46172 24.3751H7.5C7.00272 24.3751 6.52581 24.5726 6.17417 24.9242C5.82254 25.2759 5.625 25.7528 5.625 26.2501C5.63324 30.7091 6.86037 35.081 9.1737 38.893C11.487 42.7051 14.7985 45.8121 18.75 47.8782V48.7501C18.75 49.7446 19.1451 50.6984 19.8484 51.4017C20.5516 52.105 21.5054 52.5001 22.5 52.5001H37.5C38.4946 52.5001 39.4484 52.105 40.1516 51.4017C40.8549 50.6984 41.25 49.7446 41.25 48.7501V47.8782C45.2015 45.8121 48.513 42.7051 50.8263 38.893C53.1396 35.081 54.3668 30.7091 54.375 26.2501C54.375 25.7528 54.1775 25.2759 53.8258 24.9242C53.4742 24.5726 52.9973 24.3751 52.5 24.3751ZM40.6594 13.179C41.0891 13.5305 41.5008 13.9016 41.8945 14.2922C36.9032 16.0481 32.7785 19.6566 30.375 24.3704H23.4609C24.6328 21.0854 26.7903 18.2424 29.6387 16.2297C32.487 14.217 35.8873 13.1327 39.375 13.1251C39.8039 13.1251 40.2328 13.1462 40.6594 13.179ZM34.7156 24.3751C36.9889 20.9646 40.428 18.5005 44.3883 17.4446C45.6831 19.5508 46.4955 21.9176 46.7672 24.3751H34.7156ZM30 9.37506C31.5046 9.37642 33.0022 9.579 34.4531 9.9774C30.9198 10.8539 27.6799 12.6463 25.06 15.174C22.4402 17.7017 20.5329 20.8753 19.5305 24.3751H13.2328C13.6979 20.2521 15.664 16.4444 18.7563 13.678C21.8487 10.9117 25.8509 9.37999 30 9.37506Z"
          fill="#4F771C"
        />
      </svg>
    ),
    active: false,
  },

  {
    id: 2,
    label: "Nutrition Analysis",
    text: `Our expert analysis reveals the nutrient-dense secrets of your favorite foods, empowering you to make informed choices that fuel your body.`,
    Icon: (
      <svg
        width="60"
        height="60"
        viewBox="0 0 60 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M31.285 6.63594C30.9308 6.32112 30.4734 6.14722 29.9995 6.14722C29.5256 6.14722 29.0682 6.32112 28.714 6.63594C26.8709 8.26918 25.4009 10.28 24.4039 12.5318C23.4069 14.7835 22.9063 17.2235 22.936 19.6859C22.9389 19.944 23.0084 20.1969 23.1377 20.4203C23.2669 20.6436 23.4517 20.8299 23.674 20.9609C25.618 22.1106 27.3752 23.5502 28.885 25.2299C29.0256 25.3861 29.1975 25.5109 29.3895 25.5964C29.5815 25.6818 29.7893 25.726 29.9995 25.726C30.2096 25.726 30.4174 25.6818 30.6094 25.5964C30.8014 25.5109 30.9733 25.3861 31.114 25.2299C32.6241 23.5523 34.3813 22.1148 36.325 20.9669C36.5467 20.8355 36.7308 20.6491 36.8596 20.4258C36.9883 20.2024 37.0573 19.9497 37.06 19.6919C37.0905 17.2292 36.5905 14.7888 35.594 12.5365C34.5975 10.2842 33.1279 8.27279 31.285 6.63894M9.04897 36.6269C9.02552 36.3656 9.05404 36.1021 9.13287 35.8518C9.2117 35.6015 9.33929 35.3692 9.50828 35.1684C9.67727 34.9677 9.88433 34.8023 10.1175 34.6819C10.3507 34.5615 10.6054 34.4885 10.867 34.4669C14.8612 34.1327 18.8592 35.0649 22.2937 37.1311C25.7283 39.1973 28.4249 42.2927 30.001 45.9779C31.5764 42.2926 34.2724 39.197 37.7063 37.1302C41.1403 35.0635 45.1379 34.1306 49.132 34.4639C50.23 34.5539 51.052 35.5199 50.95 36.6239C50.5174 41.372 48.3255 45.7869 44.8048 49.0018C41.284 52.2167 36.6887 53.9994 31.921 53.9999H30.526C30.3476 53.9985 30.1702 53.9743 29.998 53.9279C29.8248 53.9745 29.6463 53.9987 29.467 53.9999H28.072C23.3048 53.9986 18.7102 52.2156 15.1901 49.0008C11.6699 45.7859 9.47854 41.3715 9.04597 36.6239M30.001 32.4779C28.4254 28.7921 25.729 25.6961 22.2944 23.6293C18.8598 21.5625 14.8615 20.63 10.867 20.9639C10.6054 20.9855 10.3507 21.0585 10.1175 21.1789C9.88433 21.2993 9.67727 21.4647 9.50828 21.6655C9.33929 21.8662 9.2117 22.0985 9.13287 22.3488C9.05404 22.5991 9.02552 22.8626 9.04897 23.1239C9.28547 25.7561 10.067 28.3102 11.344 30.6239C11.4728 30.8569 11.6613 31.0513 11.8901 31.1874C12.1189 31.3234 12.3798 31.3961 12.646 31.3979C15.6796 31.4245 18.6753 32.0759 21.446 33.3116C24.2167 34.5473 26.7031 36.3407 28.75 38.5799C28.907 38.7514 29.1018 38.8841 29.3189 38.9674C29.536 39.0507 29.7695 39.0824 30.001 39.0599C30.2319 39.0819 30.4649 39.05 30.6814 38.9667C30.898 38.8834 31.0922 38.751 31.249 38.5799C33.2958 36.3407 35.7822 34.5473 38.5529 33.3116C41.3237 32.0759 44.3193 31.4245 47.353 31.3979C47.6194 31.3958 47.8805 31.3226 48.1094 31.1861C48.3382 31.0495 48.5265 30.8544 48.655 30.6209C49.9315 28.3081 50.7131 25.755 50.95 23.1239C50.9734 22.8626 50.9449 22.5991 50.8661 22.3488C50.7872 22.0985 50.6597 21.8662 50.4907 21.6655C50.3217 21.4647 50.1146 21.2993 49.8814 21.1789C49.6482 21.0585 49.3935 20.9855 49.132 20.9639C45.1379 20.6306 41.1403 21.5635 37.7063 23.6302C34.2724 25.697 31.5764 28.7926 30.001 32.4779Z"
          fill="#4F771C"
        />
      </svg>
    ),
    active: false,
  },

  {
    id: 3,
    label: "Nutrition Plan",
    text: ` Our expertly crafted plan provides a tailored roadmap to optimal wellness, balancing nutrient-dense foods and healthy habits to fuel.`,
    Icon: (
      <svg
        width="60"
        height="60"
        viewBox="0 0 60 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M36.5 30H35C34.2917 30 33.6983 30.24 33.22 30.72C32.7417 31.2 32.5017 31.7933 32.5 32.5C32.4983 33.2067 32.7383 33.8008 33.22 34.2825C33.7017 34.7642 34.295 35.0033 35 35H42.5C43.2083 35 43.8025 34.76 44.2825 34.28C44.7625 33.8 45.0017 33.2067 45 32.5V25C45 24.2917 44.76 23.6983 44.28 23.22C43.8 22.7417 43.2067 22.5017 42.5 22.5C41.7933 22.4983 41.2 22.7383 40.72 23.22C40.24 23.7017 40 24.295 40 25V26.375C38.6667 24.7917 37.0733 23.5417 35.22 22.625C33.3667 21.7083 31.335 21.25 29.125 21.25C25.6667 21.25 22.6767 22.2817 20.155 24.345C17.6333 26.4083 16.02 29.0017 15.315 32.125C15.1483 32.875 15.2942 33.5417 15.7525 34.125C16.2108 34.7083 16.7933 35 17.5 35C18.2067 35 18.8217 34.74 19.345 34.22C19.8683 33.7 20.2325 33.085 20.4375 32.375C21.0208 30.5833 22.1042 29.115 23.6875 27.97C25.2708 26.825 27.0833 26.2517 29.125 26.25C30.625 26.25 32.0208 26.5942 33.3125 27.2825C34.6042 27.9708 35.6667 28.8767 36.5 30ZM30 55C26.5417 55 23.2917 54.3433 20.25 53.03C17.2083 51.7167 14.5625 49.9358 12.3125 47.6875C10.0625 45.4392 8.28167 42.7933 6.97 39.75C5.65834 36.7067 5.00167 33.4567 5 30C4.99834 26.5433 5.655 23.2933 6.97 20.25C8.285 17.2067 10.0658 14.5608 12.3125 12.3125C14.5592 10.0642 17.205 8.28333 20.25 6.97C23.295 5.65667 26.545 5 30 5C33.455 5 36.705 5.65667 39.75 6.97C42.795 8.28333 45.4408 10.0642 47.6875 12.3125C49.9342 14.5608 51.7158 17.2067 53.0325 20.25C54.3492 23.2933 55.005 26.5433 55 30C54.995 33.4567 54.3383 36.7067 53.03 39.75C51.7217 42.7933 49.9408 45.4392 47.6875 47.6875C45.4342 49.9358 42.7883 51.7175 39.75 53.0325C36.7117 54.3475 33.4617 55.0033 30 55Z"
          fill="white"
        />
      </svg>
    ),
    active: true,
  },

  {
    id: 4,
    label: "Progress Track",
    text: `Our progress tracking feature helps you monitor your journey, celebrate small wins, and stay motivated.`,
    Icon: (
      <svg
        width="60"
        height="60"
        viewBox="0 0 60 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M30 55C43.8075 55 55 43.8075 55 30C55 16.1925 43.8075 5 30 5C16.1925 5 5 16.1925 5 30C5 43.8075 16.1925 55 30 55ZM30 20C29.337 20 28.7011 19.7366 28.2322 19.2678C27.7634 18.7989 27.5 18.163 27.5 17.5V10C27.5 9.33696 27.7634 8.70107 28.2322 8.23223C28.7011 7.76339 29.337 7.5 30 7.5C30.663 7.5 31.2989 7.76339 31.7678 8.23223C32.2366 8.70107 32.5 9.33696 32.5 10V17.5C32.5 18.163 32.2366 18.7989 31.7678 19.2678C31.2989 19.7366 30.663 20 30 20ZM30 52.5C29.337 52.5 28.7011 52.2366 28.2322 51.7678C27.7634 51.2989 27.5 50.663 27.5 50V45C27.5 44.337 27.7634 43.7011 28.2322 43.2322C28.7011 42.7634 29.337 42.5 30 42.5C30.663 42.5 31.2989 42.7634 31.7678 43.2322C32.2366 43.7011 32.5 44.337 32.5 45V50C32.5 50.663 32.2366 51.2989 31.7678 51.7678C31.2989 52.2366 30.663 52.5 30 52.5ZM45 27.5C44.337 27.5 43.7011 27.7634 43.2322 28.2322C42.7634 28.7011 42.5 29.337 42.5 30C42.5 30.663 42.7634 31.2989 43.2322 31.7678C43.7011 32.2366 44.337 32.5 45 32.5H50C50.663 32.5 51.2989 32.2366 51.7678 31.7678C52.2366 31.2989 52.5 30.663 52.5 30C52.5 29.337 52.2366 28.7011 51.7678 28.2322C51.2989 27.7634 50.663 27.5 50 27.5H45ZM7.5 30C7.5 29.337 7.76339 28.7011 8.23223 28.2322C8.70107 27.7634 9.33696 27.5 10 27.5H17.5C18.163 27.5 18.7989 27.7634 19.2678 28.2322C19.7366 28.7011 20 29.337 20 30C20 30.663 19.7366 31.2989 19.2678 31.7678C18.7989 32.2366 18.163 32.5 17.5 32.5H10C9.33696 32.5 8.70107 32.2366 8.23223 31.7678C7.76339 31.2989 7.5 30.663 7.5 30ZM40.58 15.8825C40.3477 16.1148 40.1635 16.3905 40.0378 16.694C39.9121 16.9975 39.8474 17.3228 39.8474 17.6513C39.8474 17.9797 39.9121 18.305 40.0378 18.6085C40.1635 18.912 40.3477 19.1877 40.58 19.42C40.8123 19.6523 41.088 19.8365 41.3915 19.9622C41.695 20.0879 42.0203 20.1526 42.3488 20.1526C42.6772 20.1526 43.0025 20.0879 43.306 19.9622C43.6095 19.8365 43.8852 19.6523 44.1175 19.42L45.885 17.65C46.1171 17.4177 46.3012 17.142 46.4268 16.8386C46.5523 16.5352 46.6169 16.21 46.6168 15.8816C46.6166 15.5532 46.5518 15.2281 46.4261 14.9248C46.3003 14.6215 46.116 14.3459 45.8838 14.1138C45.6515 13.8816 45.3758 13.6976 45.0723 13.572C44.7689 13.4464 44.4437 13.3819 44.1154 13.382C43.787 13.3821 43.4619 13.4469 43.1585 13.5727C42.8552 13.6984 42.5796 13.8827 42.3475 14.115L40.58 15.8825ZM14.09 45.9075C13.6221 45.4388 13.3593 44.8035 13.3593 44.1413C13.3593 43.479 13.6221 42.8437 14.09 42.375L17.625 38.8375C18.0941 38.3684 18.7303 38.1049 19.3938 38.1049C20.0572 38.1049 20.6934 38.3684 21.1625 38.8375C21.6316 39.3066 21.8951 39.9428 21.8951 40.6063C21.8951 41.2697 21.6316 41.9059 21.1625 42.375L17.625 45.91C17.1562 46.3787 16.5204 46.642 15.8575 46.642C15.1946 46.642 14.5588 46.3762 14.09 45.9075ZM42.375 38.8425C41.9035 38.3871 41.272 38.1351 40.6165 38.1408C39.961 38.1465 39.334 38.4094 38.8705 38.873C38.4069 39.3365 38.144 39.9635 38.1383 40.619C38.1326 41.2745 38.3846 41.906 38.84 42.3775L42.375 45.9125C42.8465 46.3679 43.478 46.6199 44.1335 46.6142C44.789 46.6085 45.416 46.3456 45.8795 45.882C46.3431 45.4185 46.606 44.7915 46.6117 44.136C46.6174 43.4805 46.3654 42.849 45.91 42.3775L42.375 38.8425ZM14.09 14.0925C14.5588 13.6238 15.1946 13.3605 15.8575 13.3605C16.5204 13.3605 17.1562 13.6238 17.625 14.0925L22.93 19.3975C23.1621 19.6298 23.3462 19.9055 23.4718 20.2089C23.5973 20.5123 23.6619 20.8375 23.6618 21.1659C23.6616 21.4943 23.5968 21.8194 23.4711 22.1227C23.3453 22.4261 23.161 22.7016 22.9288 22.9338C22.6965 23.1659 22.4208 23.3499 22.1173 23.4755C21.8139 23.6011 21.4887 23.6656 21.1604 23.6655C20.832 23.6654 20.5069 23.6006 20.2035 23.4748C19.9002 23.3491 19.6246 23.1648 19.3925 22.9325L14.0925 17.625C13.8601 17.3928 13.6757 17.1171 13.5499 16.8136C13.424 16.5101 13.3593 16.1848 13.3593 15.8563C13.3593 15.5277 13.424 15.2024 13.5499 14.8989C13.6757 14.5954 13.8601 14.3197 14.0925 14.0875"
          fill="#4F771C"
        />
      </svg>
    ),
    active: false,
  },
];

function MagicBehind() {
  return (
    <section className="py-16">
      <div className="container space-y-[2.5rem]">
        <header className="lg:text-center">
          <h2 className="leading-4">The Magic Behind</h2>
        </header>

        <ul className="grid gap-4 lg:grid-cols-4">
          {MAGIC_BEHIND.map((item) => {
            const { id, label, text, Icon, active } = item;
            return (
              <li
                key={id}
                className={`${
                  active && "bg-[#4F771C] text-background"
                } space-y-3 rounded border border-[#808080] p-5 lg:text-center`}
              >
                <span className="block w-max lg:mx-auto">{Icon}</span>

                <h3
                  className={`${
                    active ? "text-background" : "text-[#4F771C]"
                  } text-[1.5rem]`}
                >
                  {label}
                </h3>
                <p className="leading-6 text-[.938rem]">{text}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default MagicBehind;
