import svgPaths from "./svg-4dl7o2jbmp";

function Bookmark() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="bookmark">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="bookmark">
          <path d={svgPaths.p2bbd0880} fill="var(--fill-0, #5D2671)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function TipCardTextContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start leading-[1.5] not-italic relative shrink-0 text-[#676767] text-[16px] w-[439px]" data-name="Tip card text container">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 w-full">Pro tip:</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 w-full">Bookmark your most used searches so that they appear on your homepage or set one as default so you see it every time you log in</p>
    </div>
  );
}

function SearchCardContent() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-[465px]" data-name="Search card content">
      <Bookmark />
      <TipCardTextContainer />
    </div>
  );
}

export default function TipCardContainer() {
  return (
    <div className="backdrop-blur backdrop-filter bg-[rgba(255,255,255,0.25)] relative rounded-[20px] size-full" data-name="Tip card container">
      <div aria-hidden="true" className="absolute border border-[#8536a1] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[24px] items-start p-[20px] relative size-full">
          <SearchCardContent />
        </div>
      </div>
    </div>
  );
}