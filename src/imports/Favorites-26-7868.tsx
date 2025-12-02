import svgPaths from "./svg-uxor11ybor";

function ArrowBack() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="arrow_back">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="arrow_back">
          <path d={svgPaths.pa9bf700} fill="var(--fill-0, #6A2B81)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function BackButton() {
  return (
    <div className="bg-[#ddbde9] box-border content-stretch flex gap-[8px] items-center justify-center p-[8px] relative rounded-[33px] shrink-0 size-[32px]" data-name="back button">
      <ArrowBack />
    </div>
  );
}

function FiltersTitle() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="filters title">
      <BackButton />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-end leading-[0] not-italic relative shrink-0 text-[#25221f] text-[24px] text-nowrap tracking-[0.24px]">
        <p className="leading-[1.7] whitespace-pre">History</p>
      </div>
    </div>
  );
}

function Search() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="search">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="search">
          <path d={svgPaths.paa56300} fill="var(--fill-0, #676767)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function TextField() {
  return (
    <div className="relative rounded-[4px] shrink-0 w-full" data-name="Text field">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[6px] items-center p-[12px] relative w-full">
          <Search />
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#4e4e4e] text-[16px] text-nowrap tracking-[0.16px]">
            <p className="leading-[1.5] whitespace-pre">Search</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#818181] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Input() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Input">
      <TextField />
    </div>
  );
}

function FiltersSearchTitle() {
  return (
    <div className="relative shrink-0 w-full" data-name="filters + search + title">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[32px] items-start px-[24px] py-0 relative w-full">
          <FiltersTitle />
          <Input />
        </div>
      </div>
    </div>
  );
}

function Line() {
  return (
    <div className="content-stretch flex flex-col items-center relative self-stretch shrink-0 w-[8px]" data-name="line">
      <div className="h-[12px] relative shrink-0 w-0">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(93, 38, 113, 1)", "--stroke-0": "rgba(93, 38, 113, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
            <path d="M0 0V12" id="Vector 17" opacity="0" stroke="var(--stroke-0, #5D2671)" />
          </svg>
        </div>
      </div>
      <div className="h-[8px] relative shrink-0 w-full">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(93, 38, 113, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
            <circle cx="4" cy="4" fill="var(--fill-0, #5D2671)" id="Ellipse 60" r="4" />
          </svg>
        </div>
      </div>
      <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-0">
        <div className="absolute bottom-0 left-[-0.5px] right-[-0.5px] top-0" style={{ "--fill-0": "rgba(93, 38, 113, 1)", "--stroke-0": "rgba(225, 225, 225, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 141">
            <path d="M0.5 0V141" id="Vector 16" stroke="var(--stroke-0, #E1E1E1)" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function StatusTitle() {
  return (
    <div className="content-stretch flex items-center justify-between min-h-[32px] relative shrink-0 w-full" data-name="status title">
      <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] basis-0 decoration-solid font-['Inter:Regular',sans-serif] font-normal grow leading-[1.5] min-h-px min-w-px not-italic relative shrink-0 text-[#676767] text-[14px] underline">Nov. 12th 2024 at 10:40 am</p>
    </div>
  );
}

function Chips() {
  return (
    <div className="box-border content-stretch flex gap-[8px] h-[24px] items-center px-[12px] py-[8px] relative rounded-[8px] shrink-0" data-name="chips">
      <div aria-hidden="true" className="absolute border border-[#e2dfdd] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.3] not-italic relative shrink-0 text-[#676767] text-[12px] text-nowrap whitespace-pre">What is the average of bottles sold per event for Don Julio in Chicago?</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center pl-[8px] pr-0 py-0 relative shrink-0">
      <p className="font-['Inter:Italic',sans-serif] font-normal italic leading-[1.3] relative shrink-0 text-[#47423c] text-[12px] text-nowrap whitespace-pre">Keywords: Don Julio, Chicago</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex font-['Montserrat:Italic',sans-serif] font-normal gap-[8px] italic items-center leading-[1.3] relative shrink-0 text-[#47423c] text-[12px] text-nowrap whitespace-pre">
      <p className="relative shrink-0">📊</p>
      <p className="relative shrink-0">📊</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="box-border content-center flex flex-wrap gap-[8px] items-center pb-[8px] pt-0 px-0 relative shrink-0 w-full">
      <Chips />
      <Frame4 />
      <Frame5 />
    </div>
  );
}

function Bookmark() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="bookmark">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="bookmark">
          <path d={svgPaths.p32782c00} fill="var(--fill-0, #47423C)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Action() {
  return (
    <div className="content-stretch flex gap-[4px] h-[16px] items-center relative shrink-0" data-name="action">
      <Bookmark />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] not-italic relative shrink-0 text-[#47423c] text-[0px] text-[12px] text-nowrap whitespace-pre">
        <span className="text-[#6a6159]">Bookmarked</span> <span className="text-[#25221f]">My Daily Dashboard</span>
      </p>
    </div>
  );
}

function HistoryItem() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[12px] items-start px-0 py-[4px] relative shrink-0" data-name="history item">
      <Action />
    </div>
  );
}

function TitleHistory() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="title + history">
      <StatusTitle />
      <Frame />
      <HistoryItem />
    </div>
  );
}

function Status() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-col gap-[16px] grow items-start min-h-px min-w-px pb-[24px] pt-0 px-0 relative shrink-0" data-name="status">
      <TitleHistory />
    </div>
  );
}

function StatusHistoryItem() {
  return (
    <div className="bg-neutral-50 content-stretch flex gap-[11px] items-start relative shrink-0 w-full" data-name="status + history item">
      <Line />
      <Status />
    </div>
  );
}

function Line1() {
  return (
    <div className="content-stretch flex flex-col items-center relative self-stretch shrink-0 w-[8px]" data-name="line">
      <div className="h-[12px] relative shrink-0 w-0">
        <div className="absolute bottom-0 left-[-0.5px] right-[-0.5px] top-0" style={{ "--fill-0": "rgba(225, 225, 225, 1)", "--stroke-0": "rgba(225, 225, 225, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 12">
            <path d="M0.5 0V12" id="Vector 17" stroke="var(--stroke-0, #E1E1E1)" />
          </svg>
        </div>
      </div>
      <div className="h-[8px] relative shrink-0 w-full">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(225, 225, 225, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
            <circle cx="4" cy="4" fill="var(--fill-0, #E1E1E1)" id="Ellipse 60" r="4" />
          </svg>
        </div>
      </div>
      <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-0">
        <div className="absolute bottom-0 left-[-0.5px] right-[-0.5px] top-0" style={{ "--fill-0": "rgba(225, 225, 225, 1)", "--stroke-0": "rgba(225, 225, 225, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 93">
            <path d="M0.5 0V93" id="Vector 16" stroke="var(--stroke-0, #E1E1E1)" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Bookmark1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="bookmark">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="bookmark">
          <path d={svgPaths.p29384100} fill="var(--fill-0, #5D2671)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function StatusTitle1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center min-h-[32px] relative shrink-0 w-full" data-name="status title">
      <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid font-['Inter:Regular',sans-serif] font-normal leading-[1.5] not-italic relative shrink-0 text-[#676767] text-[14px] text-nowrap underline whitespace-pre">Nov. 12th 2024 at 10:40 am</p>
      <Bookmark1 />
    </div>
  );
}

function Chips1() {
  return (
    <div className="box-border content-stretch flex gap-[8px] h-[24px] items-center px-[12px] py-[8px] relative rounded-[8px] shrink-0" data-name="chips">
      <div aria-hidden="true" className="absolute border border-[#e2dfdd] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.3] not-italic relative shrink-0 text-[#676767] text-[12px] text-nowrap whitespace-pre">What is the average of bottles sold per event for Don Julio in Chicago?</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center pl-[8px] pr-0 py-0 relative shrink-0">
      <p className="font-['Inter:Italic',sans-serif] font-normal italic leading-[1.3] relative shrink-0 text-[#47423c] text-[12px] text-nowrap whitespace-pre">Keywords: Don Julio, Chicago</p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex font-['Montserrat:Italic',sans-serif] font-normal gap-[8px] italic items-center leading-[1.3] relative shrink-0 text-[#47423c] text-[12px] text-nowrap whitespace-pre">
      <p className="relative shrink-0">📊</p>
      <p className="relative shrink-0">📊</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="box-border content-center flex flex-wrap gap-[8px] items-center pb-[8px] pt-0 px-0 relative shrink-0 w-full">
      <Chips1 />
      <Frame6 />
      <Frame7 />
    </div>
  );
}

function TitleHistory1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="title + history">
      <StatusTitle1 />
      <Frame1 />
    </div>
  );
}

function Status1() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-col gap-[16px] grow items-start min-h-px min-w-px pb-[24px] pt-0 px-0 relative shrink-0" data-name="status">
      <TitleHistory1 />
    </div>
  );
}

function StatusHistoryItem1() {
  return (
    <div className="bg-neutral-50 content-stretch flex gap-[11px] items-start relative shrink-0 w-full" data-name="status + history item">
      <Line1 />
      <Status1 />
    </div>
  );
}

function Line2() {
  return (
    <div className="content-stretch flex flex-col items-center relative self-stretch shrink-0 w-[8px]" data-name="line">
      <div className="h-[12px] relative shrink-0 w-0">
        <div className="absolute bottom-0 left-[-0.5px] right-[-0.5px] top-0" style={{ "--fill-0": "rgba(225, 225, 225, 1)", "--stroke-0": "rgba(225, 225, 225, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 12">
            <path d="M0.5 0V12" id="Vector 17" stroke="var(--stroke-0, #E1E1E1)" />
          </svg>
        </div>
      </div>
      <div className="h-[8px] relative shrink-0 w-full">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(225, 225, 225, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
            <circle cx="4" cy="4" fill="var(--fill-0, #E1E1E1)" id="Ellipse 60" r="4" />
          </svg>
        </div>
      </div>
      <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-0">
        <div className="absolute bottom-0 left-[-0.5px] right-[-0.5px] top-0" style={{ "--fill-0": "rgba(225, 225, 225, 1)", "--stroke-0": "rgba(225, 225, 225, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 93">
            <path d="M0.5 0V93" id="Vector 16" stroke="var(--stroke-0, #E1E1E1)" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function StatusTitle2() {
  return (
    <div className="content-stretch flex items-center justify-between min-h-[32px] relative shrink-0 w-full" data-name="status title">
      <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] basis-0 decoration-solid font-['Inter:Regular',sans-serif] font-normal grow leading-[1.5] min-h-px min-w-px not-italic relative shrink-0 text-[#676767] text-[14px] underline">Nov. 12th 2024 at 10:40 am</p>
    </div>
  );
}

function Chips2() {
  return (
    <div className="box-border content-stretch flex gap-[8px] h-[24px] items-center px-[12px] py-[8px] relative rounded-[8px] shrink-0" data-name="chips">
      <div aria-hidden="true" className="absolute border border-[#e2dfdd] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.3] not-italic relative shrink-0 text-[#676767] text-[12px] text-nowrap whitespace-pre">What is the average of bottles sold per event for Don Julio in Chicago?</p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center pl-[8px] pr-0 py-0 relative shrink-0">
      <p className="font-['Inter:Italic',sans-serif] font-normal italic leading-[1.3] relative shrink-0 text-[#47423c] text-[12px] text-nowrap whitespace-pre">Keywords: Don Julio, Chicago</p>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex font-['Montserrat:Italic',sans-serif] font-normal gap-[8px] italic items-center leading-[1.3] relative shrink-0 text-[#47423c] text-[12px] text-nowrap whitespace-pre">
      <p className="relative shrink-0">📊</p>
      <p className="relative shrink-0">📊</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="box-border content-center flex flex-wrap gap-[8px] items-center pb-[8px] pt-0 px-0 relative shrink-0 w-full">
      <Chips2 />
      <Frame8 />
      <Frame9 />
    </div>
  );
}

function TitleHistory2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="title + history">
      <StatusTitle2 />
      <Frame2 />
    </div>
  );
}

function Status2() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-col gap-[16px] grow items-start min-h-px min-w-px pb-[24px] pt-0 px-0 relative shrink-0" data-name="status">
      <TitleHistory2 />
    </div>
  );
}

function StatusHistoryItem2() {
  return (
    <div className="bg-neutral-50 content-stretch flex gap-[11px] items-start relative shrink-0 w-full" data-name="status + history item">
      <Line2 />
      <Status2 />
    </div>
  );
}

function Line3() {
  return (
    <div className="content-stretch flex flex-col items-center relative self-stretch shrink-0 w-[8px]" data-name="line">
      <div className="h-[12px] relative shrink-0 w-0">
        <div className="absolute bottom-0 left-[-0.5px] right-[-0.5px] top-0" style={{ "--fill-0": "rgba(225, 225, 225, 1)", "--stroke-0": "rgba(225, 225, 225, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 12">
            <path d="M0.5 0V12" id="Vector 17" stroke="var(--stroke-0, #E1E1E1)" />
          </svg>
        </div>
      </div>
      <div className="h-[8px] relative shrink-0 w-full">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(225, 225, 225, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
            <circle cx="4" cy="4" fill="var(--fill-0, #E1E1E1)" id="Ellipse 60" r="4" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function StatusTitle3() {
  return (
    <div className="content-stretch flex items-center justify-between min-h-[32px] relative shrink-0 w-full" data-name="status title">
      <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] basis-0 decoration-solid font-['Inter:Regular',sans-serif] font-normal grow leading-[1.5] min-h-px min-w-px not-italic relative shrink-0 text-[#676767] text-[14px] underline">Nov. 12th 2024 at 10:40 am</p>
    </div>
  );
}

function Chips3() {
  return (
    <div className="box-border content-stretch flex gap-[8px] h-[24px] items-center px-[12px] py-[8px] relative rounded-[8px] shrink-0" data-name="chips">
      <div aria-hidden="true" className="absolute border border-[#e2dfdd] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.3] not-italic relative shrink-0 text-[#676767] text-[12px] text-nowrap whitespace-pre">What is the average of bottles sold per event for Don Julio in Chicago?</p>
    </div>
  );
}

function Frame10() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center pl-[8px] pr-0 py-0 relative shrink-0">
      <p className="font-['Inter:Italic',sans-serif] font-normal italic leading-[1.3] relative shrink-0 text-[#47423c] text-[12px] text-nowrap whitespace-pre">Keywords: Don Julio, Chicago</p>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex font-['Montserrat:Italic',sans-serif] font-normal gap-[8px] italic items-center leading-[1.3] relative shrink-0 text-[#47423c] text-[12px] text-nowrap whitespace-pre">
      <p className="relative shrink-0">📊</p>
      <p className="relative shrink-0">📊</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="box-border content-center flex flex-wrap gap-[8px] items-center pb-[8px] pt-0 px-0 relative shrink-0 w-full">
      <Chips3 />
      <Frame10 />
      <Frame11 />
    </div>
  );
}

function TitleHistory3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="title + history">
      <StatusTitle3 />
      <Frame3 />
    </div>
  );
}

function Status3() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-col gap-[16px] grow items-start min-h-px min-w-px pb-[24px] pt-0 px-0 relative shrink-0" data-name="status">
      <TitleHistory3 />
    </div>
  );
}

function StatusHistoryItem3() {
  return (
    <div className="bg-neutral-50 content-stretch flex gap-[11px] items-start relative shrink-0 w-full" data-name="status + history item">
      <Line3 />
      <Status3 />
    </div>
  );
}

function HistoryExpandedPortion() {
  return (
    <div className="bg-neutral-50 relative shrink-0 w-full" data-name="history - expanded portion">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col items-start px-[24px] py-0 relative w-full">
          <StatusHistoryItem />
          {[...Array(2).keys()].map((_, i) => (
            <StatusHistoryItem1 key={i} />
          ))}
          {[...Array(3).keys()].map((_, i) => (
            <StatusHistoryItem2 key={i} />
          ))}
          <StatusHistoryItem3 />
        </div>
      </div>
    </div>
  );
}

function FiltersSidePeek() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-col gap-[32px] grow items-start min-h-px min-w-px pb-0 pt-[24px] px-0 relative shrink-0 w-full" data-name="filters side peek">
      <FiltersSearchTitle />
      <HistoryExpandedPortion />
    </div>
  );
}

export default function Favorites() {
  return (
    <div className="bg-neutral-50 box-border content-stretch flex flex-col items-start justify-between overflow-clip relative rounded-bl-[48px] rounded-tl-[48px] shadow-[-8px_0px_64px_0px_rgba(37,34,31,0.25)] size-full" data-name="favorites">
      <FiltersSidePeek />
    </div>
  );
}