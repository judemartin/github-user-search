import ModeToggle from "./ModeToggle";

export default function Hero() {
  return (
    <div className="pt-[31px] md:pt-[30px] 2xl:pt-[55px]">
      <div className="mx-auto flex h-[38px] w-[327px] items-center  text-white md:h-[38px] md:w-[573px] 2xl:h-[38px] 2xl:w-[730px]">
        <h3 className="text-left font-SpaceMono text-[26px] font-bold text-black dark:text-white">
          devfinder
        </h3>
        <div className="mx-[92px] md:mx-[359px] 2xl:mx-[515px]">
          <ModeToggle />
        </div>
      </div>
    </div>
  );
}
