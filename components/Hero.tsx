import ModeToggle from "./ModeToggle";

export default function Hero() {
  return (
    <div className="pt-[31px]">
      <div className="mx-auto flex h-[38px] w-[327px] items-center text-white">
        <h3 className=" text-left font-SpaceMono text-[26px] font-bold text-black dark:text-white">
          devfinder
        </h3>
        <div className="mx-[110px]">
          <ModeToggle />
        </div>
      </div>
    </div>
  );
}
