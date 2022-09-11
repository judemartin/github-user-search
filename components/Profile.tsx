import { SVGProps } from "react";

function Search(props: SVGProps<SVGSVGElement>) {
  return (
    <svg height="24" width="25" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M10.609 0c5.85 0 10.608 4.746 10.608 10.58 0 2.609-.952 5-2.527 6.847l5.112 5.087a.87.87 0 01-1.227 1.233l-5.118-5.093a10.58 10.58 0 01-6.848 2.505C4.759 21.16 0 16.413 0 10.58 0 4.747 4.76 0 10.609 0zm0 1.74c-4.891 0-8.87 3.965-8.87 8.84 0 4.874 3.979 8.84 8.87 8.84a8.855 8.855 0 006.213-2.537l.04-.047a.881.881 0 01.058-.053 8.786 8.786 0 002.558-6.203c0-4.875-3.979-8.84-8.87-8.84z"
        fill="#0079ff"
      />
    </svg>
  );
}

function Location(props: SVGProps<SVGSVGElement>) {
  return (
    <svg height="20" width="14" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M12.797 3.425C11.584 1.33 9.427.05 7.03.002a7.483 7.483 0 00-.308 0C4.325.05 2.17 1.33.955 3.425a6.963 6.963 0 00-.09 6.88l4.959 9.077.007.012c.218.38.609.606 1.045.606.437 0 .828-.226 1.046-.606l.007-.012 4.96-9.077a6.963 6.963 0 00-.092-6.88zm-5.92 5.638c-1.552 0-2.813-1.262-2.813-2.813s1.261-2.812 2.812-2.812S9.69 4.699 9.69 6.25 8.427 9.063 6.876 9.063z" />
    </svg>
  );
}

function Website(props: SVGProps<SVGSVGElement>) {
  return (
    <svg height="20" width="20" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g>
        <path d="M7.404 5.012c-2.355 2.437-1.841 6.482.857 8.273.089.06.207.048.283-.027.568-.555 1.049-1.093 1.47-1.776a.213.213 0 00-.084-.3A2.743 2.743 0 018.878 10.1a2.64 2.64 0 01-.223-1.803c.168-.815 1.043-1.573 1.711-2.274l-.004-.002 2.504-2.555a2.568 2.568 0 013.648-.019 2.6 2.6 0 01.037 3.666l-1.517 1.56a.266.266 0 00-.06.273c.35 1.012.435 2.44.201 3.519-.006.03.031.05.053.028l3.228-3.295c2.062-2.105 2.044-5.531-.04-7.615a5.416 5.416 0 00-7.691.04L7.417 4.998l-.013.014z" />
        <path d="M13.439 13.75a.401.401 0 00.006-.003c.659-1.204.788-2.586.48-3.933l-.002.002-.001-.001a5.434 5.434 0 00-2.19-3.124.3.3 0 00-.333.015c-.553.448-1.095 1.021-1.452 1.754a.243.243 0 00.096.317c.415.24.79.593 1.04 1.061h.001c.196.33.388.958.263 1.632-.116.894-1.019 1.714-1.736 2.453-.546.559-1.935 1.974-2.49 2.542a2.6 2.6 0 01-3.666.037 2.6 2.6 0 01-.038-3.666l1.521-1.564A.266.266 0 005 11.004c-.338-1.036-.43-2.432-.217-3.51.006-.03-.031-.049-.053-.027l-3.179 3.245c-2.083 2.126-2.066 5.588.04 7.693 2.125 2.083 5.57 2.048 7.653-.078.723-.81 3.821-3.678 4.195-4.577z" />
      </g>
    </svg>
  );
}

function Twitter(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} height="18" width="20" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 2.799a8.549 8.549 0 01-2.363.647 4.077 4.077 0 001.804-2.266 8.194 8.194 0 01-2.6.993A4.099 4.099 0 009.75 4.977c0 .324.027.637.095.934-3.409-.166-6.425-1.8-8.452-4.288a4.128 4.128 0 00-.56 2.072c0 1.42.73 2.679 1.82 3.408A4.05 4.05 0 01.8 6.598v.045a4.119 4.119 0 003.285 4.028 4.092 4.092 0 01-1.075.135c-.263 0-.528-.015-.776-.07.531 1.624 2.038 2.818 3.831 2.857A8.239 8.239 0 01.981 15.34 7.68 7.68 0 010 15.285a11.543 11.543 0 006.29 1.84c7.545 0 11.67-6.25 11.67-11.667 0-.182-.006-.357-.015-.53A8.18 8.18 0 0020 2.798z" />
    </svg>
  );
}

function Company(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} height="20" width="20" xmlns="http://www.w3.org/2000/svg">
      <g>
        <path d="M10.858 1.558L1.7.167A1.477 1.477 0 00.517.492 1.49 1.49 0 000 1.608v17.559c0 .458.375.833.833.833h2.709v-4.375c0-.808.65-1.458 1.458-1.458h2.083c.809 0 1.459.65 1.459 1.458V20h3.541V3a1.46 1.46 0 00-1.225-1.442zM4.583 12.292h-1.25a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5h-1.25a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5h-1.25a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5h-1.25a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm4.167 7.5H7.5a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5H7.5a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5H7.5a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5H7.5a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zM18.85 9.035l-5.933-1.242V20h5.625A1.46 1.46 0 0020 18.542V10.46c0-.688-.47-1.274-1.15-1.425zM16.875 17.5h-1.25a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5h-1.25a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5h-1.25a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25z" />
      </g>
    </svg>
  );
}
export default function Profile() {
  return (
    <>
      <div className="mx-auto mt-9 flex h-[60px] w-[327px] items-center rounded-2xl bg-[#FFFFFF] dark:bg-[#1E2A47] md:h-[69px] md:w-[573px]  2xl:h-[69px] 2xl:w-[730px]">
        <Search className="ml-4 md:ml-8" />
        <input
          type={"text"}
          className="ml-[7px] h-[25px] w-[184px] font-SpaceMono text-[13px] font-[200] text-[#4B6A9B] focus:outline-none dark:bg-[#1E2A47] dark:text-white md:ml-6 md:h-[25px] md:w-[254px]"
          placeholder="Search GitHub username…"
        />
        <button className="bg-[0079FF] ml-[6px] h-[46px] w-[84px] justify-center rounded-xl bg-[#0079FF] font-SpaceMono text-[14px]  font-bold text-white md:ml-[123px] md:h-[50px] md:w-[106px] 2xl:ml-[280px]">
          Search
        </button>
      </div>
      <div className="mx-auto mt-4 mb-[79px] h-[517px] w-[327px] rounded-2xl bg-[#FFFFFF] dark:bg-[#1E2A47] md:mb-[236px]  md:mt-6 md:h-[481px] md:w-[573px] 2xl:mb-[145px] 2xl:mt-6 2xl:h-[444px] 2xl:w-[730px]">
        <div className="pt-8" />
        {/* Profile Image and Description Mobile Tablet */}
        <div className="mt-1 ml-6 flex h-[70px] w-[233px] space-x-5 md:ml-10 md:h-[117px]  md:w-[334px] md:space-x-10 2xl:hidden">
          <div className="h-[70px] w-[70px] rounded-full bg-orange-50 md:h-[117px] md:w-[117px]"></div>
          <div className="flex-col">
            <h2 className="font-SpaceMono text-[16px] font-bold text-[#2B3442] dark:text-white md:text-[26px]">
              The Octocat
            </h2>
            <h2 className="font-SpaceMono text-[13px] font-normal text-[#0079FF] md:text-[16px]">
              @octocat
            </h2>
            <h2 className="font-SpaceMono text-[12.9px] font-normal text-[#697C9A] dark:text-white md:text-[15px]">
              Joined 25 Jan 2011
            </h2>
          </div>
        </div>
        <h2 className="mx-auto mt-[33px] w-[279px] font-SpaceMono text-[13px] font-normal text-[#697C9A] dark:text-white md:w-[493px] md:text-[15px] 2xl:hidden">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.
          Quisque volutpat mattis eros.
        </h2>

        <div className="mx-6 mt-6 h-[85px] w-[279px] rounded-2xl bg-[#F6F8FF] dark:bg-[#141D2F] md:w-[493px] 2xl:hidden">
          <div className="pt-[14px]" />
          <div className="ml-4 mt-1 flex  h-[48px] w-[250px] justify-evenly text-center md:mt-0 md:ml-11 md:h-[53px] md:w-[365px] md:justify-start">
            <div className="flex-col">
              <h2 className="font-SpaceMono text-[11px] font-normal text-[#4B6A9B] dark:text-white md:text-[13px]">
                Repos
              </h2>
              <h2 className="mt-2  font-SpaceMono text-[16px] font-bold text-[#2B3442] dark:text-white md:text-[22px]">
                8
              </h2>
            </div>
            <div className="flex-col md:ml-[99px]">
              <h2 className="font-SpaceMono text-[11px] font-normal text-[#4B6A9B] dark:text-white md:text-[13px]">
                Followers
              </h2>
              <h2 className="mt-2 font-SpaceMono text-[16px] font-bold text-[#2B3442] dark:text-white md:text-[22px]">
                3938
              </h2>
            </div>
            <div className="flex-col md:ml-[82px]">
              <h2 className="font-SpaceMono text-[11px] font-normal text-[#4B6A9B] dark:text-white md:text-[13px]">
                Following
              </h2>
              <h2 className="mt-2 font-SpaceMono text-[16px] font-bold text-[#2B3442] dark:text-white md:text-[22px]">
                9
              </h2>
            </div>
          </div>
        </div>
        <div className="mx-6  mt-[26px] h-[127px] w-[185px] md:hidden">
          <div className="flex">
            <Location className="fill-[#4B6A9B] dark:fill-white" />
            <h2 className="ml-[19px] font-SpaceMono text-[13px] font-normal text-[#4B6A9B] dark:text-white">
              San Francisco
            </h2>
          </div>
          <div className="mt-4 flex">
            <Website className="fill-[#4B6A9B] dark:fill-white" />
            <h2 className="ml-[14px] font-SpaceMono text-[13px] font-normal text-[#4B6A9B] dark:text-white">
              https://github.blog
            </h2>
          </div>
          <div className="mt-4 flex">
            <Twitter className="fill-[#A4B4CC] dark:fill-[#8E94A3]" />
            <h2 className="ml-[14px] font-SpaceMono text-[13px] font-normal text-[#A4B4CC] dark:text-[#8E94A3]">
              Not Available
            </h2>
          </div>
          <div className="mt-4 flex">
            <Company className="fill-[#4B6A9B] dark:fill-white" />
            <h2 className="ml-[14px] font-SpaceMono text-[13px] font-normal text-[#4B6A9B] hover:underline dark:text-white">
              @github
            </h2>
          </div>
        </div>

        {/*Profile Image and Description  Laptop */}
        <div className="hidden 2xl:ml-12 2xl:flex 2xl:h-[135px] 2xl:w-[634px] 2xl:space-x-[37px]">
          <div className="rounded-full bg-orange-50 2xl:h-[117px] 2xl:w-[117px]"></div>
          <div className="h-[135px] w-[480px]">
            <div className="flex space-x-[138px]">
              <div>
                <h2 className="font-SpaceMono  text-[26px] font-bold text-[#2B3442] dark:text-white">
                  The Octocat
                </h2>
                <h2 className="font-SpaceMono   text-[16px] font-normal text-[#0079FF]">
                  @octocat
                </h2>
              </div>
              <h2 className="font-SpaceMono text-[15px] font-normal text-[#697C9A] dark:text-white">
                Joined 25 Jan 2011
              </h2>
            </div>
            <h2 className="mt-5 font-SpaceMono text-[15px] font-normal text-[#697C9A] dark:text-white">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
              odio. Quisque volutpat mattis eros.
            </h2>
            <div className="mt-8 h-[85px] w-[480px] rounded-2xl bg-[#F6F8FF] dark:bg-[#141D2F]">
              <div className="pt-[10px]" />
              <div className="mt-[5px] ml-8 flex justify-between  2xl:h-[53px] 2xl:w-[365px]">
                <div className="flex-col">
                  <h2 className="font-SpaceMono text-[11px] font-normal text-[#4B6A9B] dark:text-white md:text-[13px]">
                    Repos
                  </h2>
                  <h2 className="font-SpaceMono text-[16px] font-bold text-[#2B3442] dark:text-white md:text-[22px]">
                    8
                  </h2>
                </div>
                <div className="flex-col">
                  <h2 className="font-SpaceMono text-[11px] font-normal text-[#4B6A9B] dark:text-white md:text-[13px]">
                    Followers
                  </h2>
                  <h2 className="font-SpaceMono text-[16px] font-bold text-[#2B3442] dark:text-white md:text-[22px]">
                    3938
                  </h2>
                </div>
                <div className="flex-col">
                  <h2 className="font-SpaceMono text-[11px] font-normal text-[#4B6A9B] dark:text-white md:text-[13px]">
                    Following
                  </h2>
                  <h2 className="font-SpaceMono text-[16px] font-bold text-[#2B3442] dark:text-white md:text-[22px]">
                    9
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden space-x-12 rounded-2xl  md:ml-[40px] md:mt-[30px] md:flex md:h-[63px] md:w-[429px] 2xl:mt-[154px] 2xl:ml-[202px] 2xl:space-x-12">
          <div className="flex-col">
            <div className="flex">
              <Location className="fill-[#4B6A9B] dark:fill-white" />
              <h2 className="ml-[19px] font-SpaceMono text-[15px] font-normal text-[#4B6A9B] dark:text-white">
                San Francisco
              </h2>
            </div>
            <div className="mt-5 flex">
              <Website className="fill-[#4B6A9B] dark:fill-white" />
              <h2 className="ml-[14px] font-SpaceMono text-[15px] font-normal text-[#4B6A9B] dark:text-white">
                https://github.blog
              </h2>
            </div>
          </div>
          <div className="flex-col">
            <div className="flex">
              <Twitter className="fill-[#A4B4CC] dark:fill-[#8E94A3]" />
              <h2 className="ml-[14px] font-SpaceMono text-[15px] font-normal text-[#A4B4CC] dark:text-[#8E94A3]">
                Not Available
              </h2>
            </div>
            <div className="mt-5 flex">
              <Company className="fill-[#4B6A9B] dark:fill-white" />
              <h2 className="ml-[14px] font-SpaceMono text-[15px] font-normal text-[#4B6A9B] dark:text-white">
                @github
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
