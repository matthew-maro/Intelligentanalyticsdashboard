import svgPaths from "./svg-q7k3mdj43z";

function Grid() {
  return <div className="absolute bottom-0 left-[13.13%] right-0 top-0" data-name="grid" />;
}

function GreetingTextContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start not-italic relative shrink-0 text-center w-[1111px]" data-name="Greeting text container">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.3] relative shrink-0 text-[#676767] text-[20px] tracking-[0.4px] uppercase w-full">Hi MATTHEW,</p>
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#4e4e4e] text-[48px] tracking-[0.48px] w-full">What are you looking for?</p>
    </div>
  );
}

function Button() {
  return (
    <div className="h-[48px] relative shrink-0 w-[120px]" data-name="button">
      <div className="absolute inset-0" style={{ "--fill-0": "rgba(221, 189, 233, 1)" } as React.CSSProperties}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 120 48">
          <g id="button">
            <path d={svgPaths.p26898100} fill="var(--fill-0, #DDBDE9)" fillOpacity="0.25" />
            <g id="history">
              <path d={svgPaths.pb193000} fill="var(--fill-0, #FAFAFA)" id="Vector" />
            </g>
            <path d="M60.5 12L60.5 36" id="Line 331" stroke="var(--stroke-0, #B064CB)" strokeLinecap="round" />
            <g id="arrow_forward">
              <path d={svgPaths.p297d000} fill="var(--fill-0, #FAFAFA)" id="Vector_2" />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

function SearchInputContainer() {
  return (
    <div className="backdrop-blur-[6px] backdrop-filter bg-[#5d2671] relative rounded-[48px] shrink-0 w-full" data-name="Search input container">
      <div aria-hidden="true" className="absolute border border-[#818181] border-solid inset-0 pointer-events-none rounded-[48px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.2)]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center justify-between pl-[32px] pr-[20px] py-[20px] relative w-full">
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.5] not-italic relative shrink-0 text-[18px] text-neutral-50 text-nowrap whitespace-pre">What is the average of bottles sold per event for Don Julio in Chicago?</p>
          <Button />
        </div>
      </div>
    </div>
  );
}

function GreetingContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-name="Greeting container">
      <GreetingTextContainer />
      <SearchInputContainer />
    </div>
  );
}

function GreetingSection() {
  return (
    <div className="content-stretch flex flex-col gap-[30px] items-center justify-center relative shrink-0 w-full" data-name="Greeting section">
      <GreetingContainer />
    </div>
  );
}

function History() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="history">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="history">
          <path d={svgPaths.p2b35ab00} fill="var(--fill-0, #5D2671)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function SearchCardText() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start leading-[1.5] not-italic relative shrink-0 text-[16px] w-full" data-name="Search card text">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#25221f] w-full">Previous Search</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#4e4e4e] w-full">What is the average of bottles sold per event for Don Julio in Chicago?</p>
    </div>
  );
}

function Chips() {
  return (
    <div className="box-border content-stretch flex gap-[8px] h-[24px] items-center px-[12px] py-[8px] relative rounded-[8px] shrink-0" data-name="chips">
      <div aria-hidden="true" className="absolute border border-[rgba(78,78,78,0.5)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.3] not-italic relative shrink-0 text-[#020202] text-[12px] text-nowrap whitespace-pre">Don Julio</p>
    </div>
  );
}

function Chips1() {
  return (
    <div className="box-border content-stretch flex gap-[8px] h-[24px] items-center px-[12px] py-[8px] relative rounded-[8px] shrink-0" data-name="chips">
      <div aria-hidden="true" className="absolute border border-[rgba(78,78,78,0.5)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.3] not-italic relative shrink-0 text-[#020202] text-[12px] text-nowrap whitespace-pre">Chicago</p>
    </div>
  );
}

function Chips2() {
  return (
    <div className="box-border content-stretch flex gap-[8px] h-[24px] items-center px-[12px] py-[8px] relative rounded-[8px] shrink-0" data-name="chips">
      <div aria-hidden="true" className="absolute border border-[rgba(78,78,78,0.5)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.3] not-italic relative shrink-0 text-[#4e4e4e] text-[12px] text-nowrap whitespace-pre">📊</p>
    </div>
  );
}

function Chips3() {
  return (
    <div className="box-border content-stretch flex gap-[8px] h-[24px] items-center px-[12px] py-[8px] relative rounded-[8px] shrink-0" data-name="chips">
      <div aria-hidden="true" className="absolute border border-[rgba(78,78,78,0.5)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.3] not-italic relative shrink-0 text-[#4e4e4e] text-[12px] text-nowrap whitespace-pre">📈</p>
    </div>
  );
}

function SearchCardTags() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Search card tags">
      <Chips />
      <Chips1 />
      <Chips2 />
      <Chips3 />
    </div>
  );
}

function SearchCardTextContainer() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[16px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Search card text container">
      <SearchCardText />
      <SearchCardTags />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#4e4e4e] text-[12px] text-nowrap tracking-[0.36px] uppercase">
        <p className="leading-[1.3] whitespace-pre">LAST SEARCHED 3 DEC 2025</p>
      </div>
    </div>
  );
}

function SearchCardContent() {
  return (
    <div className="basis-0 content-stretch flex gap-[12px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Search card content">
      <History />
      <SearchCardTextContainer />
    </div>
  );
}

function ArrowForward() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="arrow_forward">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="arrow_forward">
          <path d={svgPaths.p19ea9500} fill="var(--fill-0, #FEFCFC)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#6a2b81] box-border content-stretch flex gap-[4px] items-center justify-center px-[16px] py-[8px] relative rounded-[48px] shrink-0 size-[40px]" data-name="button">
      <ArrowForward />
    </div>
  );
}

function Card() {
  return (
    <div className="backdrop-blur backdrop-filter basis-0 bg-[rgba(221,189,233,0.25)] grow min-h-px min-w-px relative rounded-[20px] shrink-0" data-name="card">
      <div aria-hidden="true" className="absolute border border-[#8536a1] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <div className="flex flex-row items-end size-full">
        <div className="box-border content-stretch flex gap-[24px] items-end p-[20px] relative w-full">
          <SearchCardContent />
          <Button1 />
        </div>
      </div>
    </div>
  );
}

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

function SearchCardContent1() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-[465px]" data-name="Search card content">
      <Bookmark />
      <TipCardTextContainer />
    </div>
  );
}

function TipCardContainer() {
  return (
    <div className="backdrop-blur backdrop-filter basis-0 bg-[rgba(255,255,255,0.25)] grow h-full min-h-px min-w-px relative rounded-[20px] shrink-0" data-name="Tip card container">
      <div aria-hidden="true" className="absolute border border-[#8536a1] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[24px] items-start p-[20px] relative size-full">
          <SearchCardContent1 />
        </div>
      </div>
    </div>
  );
}

function SearchCardsContainer() {
  return (
    <div className="content-stretch flex gap-[26px] items-center relative shrink-0 w-full" data-name="Search cards container">
      <Card />
      <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
        <TipCardContainer />
      </div>
    </div>
  );
}

function Bookmark1() {
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

function Edit() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="edit">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="edit">
          <path d={svgPaths.p38d1c00} fill="var(--fill-0, #5D2671)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.5] not-italic relative shrink-0 text-[#25221f] text-[16px] text-nowrap whitespace-pre">My Daily Dashboard</p>
      <Edit />
    </div>
  );
}

function SearchCardText1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Search card text">
      <Frame2 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] min-w-full not-italic relative shrink-0 text-[#4e4e4e] text-[16px] w-[min-content]">What is the average of bottles sold per event for Don Julio in Chicago?</p>
    </div>
  );
}

function Chips4() {
  return (
    <div className="box-border content-stretch flex gap-[8px] h-[24px] items-center px-[12px] py-[8px] relative rounded-[8px] shrink-0" data-name="chips">
      <div aria-hidden="true" className="absolute border border-[rgba(78,78,78,0.5)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.3] not-italic relative shrink-0 text-[#020202] text-[12px] text-nowrap whitespace-pre">Don Julio</p>
    </div>
  );
}

function Chips5() {
  return (
    <div className="box-border content-stretch flex gap-[8px] h-[24px] items-center px-[12px] py-[8px] relative rounded-[8px] shrink-0" data-name="chips">
      <div aria-hidden="true" className="absolute border border-[rgba(78,78,78,0.5)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.3] not-italic relative shrink-0 text-[#020202] text-[12px] text-nowrap whitespace-pre">Chicago</p>
    </div>
  );
}

function Chips6() {
  return (
    <div className="box-border content-stretch flex gap-[8px] h-[24px] items-center px-[12px] py-[8px] relative rounded-[8px] shrink-0" data-name="chips">
      <div aria-hidden="true" className="absolute border border-[rgba(78,78,78,0.5)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.3] not-italic relative shrink-0 text-[#4e4e4e] text-[12px] text-nowrap whitespace-pre">📊</p>
    </div>
  );
}

function Chips7() {
  return (
    <div className="box-border content-stretch flex gap-[8px] h-[24px] items-center px-[12px] py-[8px] relative rounded-[8px] shrink-0" data-name="chips">
      <div aria-hidden="true" className="absolute border border-[rgba(78,78,78,0.5)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.3] not-italic relative shrink-0 text-[#4e4e4e] text-[12px] text-nowrap whitespace-pre">📈</p>
    </div>
  );
}

function SearchCardTags1() {
  return (
    <div className="content-center flex flex-wrap gap-[8px] items-center relative shrink-0 w-full" data-name="Search card tags">
      <Chips4 />
      <Chips5 />
      <Chips6 />
      <Chips7 />
    </div>
  );
}

function SearchCardTextContainer1() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[16px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Search card text container">
      <SearchCardText1 />
      <SearchCardTags1 />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#4e4e4e] text-[12px] text-nowrap tracking-[0.36px] uppercase">
        <p className="leading-[1.3] whitespace-pre">LAST SEARCHED 3 DEC 2025</p>
      </div>
    </div>
  );
}

function SearchCardContent2() {
  return (
    <div className="basis-0 content-stretch flex gap-[12px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Search card content">
      <Bookmark1 />
      <SearchCardTextContainer1 />
    </div>
  );
}

function ArrowForward1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="arrow_forward">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="arrow_forward">
          <path d={svgPaths.p19ea9500} fill="var(--fill-0, #FEFCFC)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#6a2b81] box-border content-stretch flex gap-[4px] items-center justify-center px-[16px] py-[8px] relative rounded-[48px] shrink-0 size-[40px]" data-name="button">
      <ArrowForward1 />
    </div>
  );
}

function Card1() {
  return (
    <div className="backdrop-blur backdrop-filter basis-0 bg-[rgba(221,189,233,0.25)] grow min-h-px min-w-px relative rounded-[20px] shrink-0" data-name="card">
      <div aria-hidden="true" className="absolute border border-[#8536a1] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <div className="flex flex-row items-end size-full">
        <div className="box-border content-stretch flex gap-[24px] items-end p-[20px] relative w-full">
          <SearchCardContent2 />
          <Button2 />
        </div>
      </div>
    </div>
  );
}

function Bookmark2() {
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

function Edit1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="edit">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="edit">
          <path d={svgPaths.p38d1c00} fill="var(--fill-0, #5D2671)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.5] not-italic relative shrink-0 text-[#25221f] text-[16px] text-nowrap whitespace-pre">Weekly Goals Overview</p>
      <Edit1 />
    </div>
  );
}

function SearchCardText2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Search card text">
      <Frame3 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] min-w-full not-italic relative shrink-0 text-[#4e4e4e] text-[16px] w-[min-content]">What is the total revenue generated from sales of Patron in New York?</p>
    </div>
  );
}

function Chips8() {
  return (
    <div className="box-border content-stretch flex gap-[8px] h-[24px] items-center px-[12px] py-[8px] relative rounded-[8px] shrink-0" data-name="chips">
      <div aria-hidden="true" className="absolute border border-[rgba(78,78,78,0.5)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.3] not-italic relative shrink-0 text-[#020202] text-[12px] text-nowrap whitespace-pre">Patron</p>
    </div>
  );
}

function Chips9() {
  return (
    <div className="box-border content-stretch flex gap-[8px] h-[24px] items-center px-[12px] py-[8px] relative rounded-[8px] shrink-0" data-name="chips">
      <div aria-hidden="true" className="absolute border border-[rgba(78,78,78,0.5)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.3] not-italic relative shrink-0 text-[#020202] text-[12px] text-nowrap whitespace-pre">New York</p>
    </div>
  );
}

function Chips10() {
  return (
    <div className="box-border content-stretch flex gap-[8px] h-[24px] items-center px-[12px] py-[8px] relative rounded-[8px] shrink-0" data-name="chips">
      <div aria-hidden="true" className="absolute border border-[rgba(78,78,78,0.5)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.3] not-italic relative shrink-0 text-[#4e4e4e] text-[12px] text-nowrap whitespace-pre">💰</p>
    </div>
  );
}

function Chips11() {
  return (
    <div className="box-border content-stretch flex gap-[8px] h-[24px] items-center px-[12px] py-[8px] relative rounded-[8px] shrink-0" data-name="chips">
      <div aria-hidden="true" className="absolute border border-[rgba(78,78,78,0.5)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.3] not-italic relative shrink-0 text-[#4e4e4e] text-[12px] text-nowrap whitespace-pre">📉</p>
    </div>
  );
}

function SearchCardTags2() {
  return (
    <div className="content-center flex flex-wrap gap-[8px] items-center relative shrink-0 w-full" data-name="Search card tags">
      <Chips8 />
      <Chips9 />
      <Chips10 />
      <Chips11 />
    </div>
  );
}

function SearchCardTextContainer2() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[16px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Search card text container">
      <SearchCardText2 />
      <SearchCardTags2 />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#4e4e4e] text-[12px] text-nowrap tracking-[0.36px] uppercase">
        <p className="leading-[1.3] whitespace-pre">LAST SEARCHED 4 DEC 2025</p>
      </div>
    </div>
  );
}

function SearchCardContent3() {
  return (
    <div className="basis-0 content-stretch flex gap-[12px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Search card content">
      <Bookmark2 />
      <SearchCardTextContainer2 />
    </div>
  );
}

function ArrowForward2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="arrow_forward">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="arrow_forward">
          <path d={svgPaths.p19ea9500} fill="var(--fill-0, #FEFCFC)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-[#6a2b81] box-border content-stretch flex gap-[4px] items-center justify-center px-[16px] py-[8px] relative rounded-[48px] shrink-0 size-[40px]" data-name="button">
      <ArrowForward2 />
    </div>
  );
}

function Card2() {
  return (
    <div className="backdrop-blur backdrop-filter basis-0 bg-[rgba(221,189,233,0.25)] grow min-h-px min-w-px relative rounded-[20px] shrink-0" data-name="card">
      <div aria-hidden="true" className="absolute border border-[#8536a1] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <div className="flex flex-row items-end size-full">
        <div className="box-border content-stretch flex gap-[24px] items-end p-[20px] relative w-full">
          <SearchCardContent3 />
          <Button3 />
        </div>
      </div>
    </div>
  );
}

function Bookmark3() {
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

function Edit2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="edit">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="edit">
          <path d={svgPaths.p38d1c00} fill="var(--fill-0, #5D2671)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.5] not-italic relative shrink-0 text-[#25221f] text-[16px] text-nowrap whitespace-pre">Upcoming Project Deadlines</p>
      <Edit2 />
    </div>
  );
}

function SearchCardText3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Search card text">
      <Frame4 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] not-italic relative shrink-0 text-[#4e4e4e] text-[16px] w-full">How many events featured Belvedere vodka in Los Angeles last year?</p>
    </div>
  );
}

function Chips12() {
  return (
    <div className="box-border content-stretch flex gap-[8px] h-[24px] items-center px-[12px] py-[8px] relative rounded-[8px] shrink-0" data-name="chips">
      <div aria-hidden="true" className="absolute border border-[rgba(78,78,78,0.5)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.3] not-italic relative shrink-0 text-[#020202] text-[12px] text-nowrap whitespace-pre">Belvedere</p>
    </div>
  );
}

function Chips13() {
  return (
    <div className="box-border content-stretch flex gap-[8px] h-[24px] items-center px-[12px] py-[8px] relative rounded-[8px] shrink-0" data-name="chips">
      <div aria-hidden="true" className="absolute border border-[rgba(78,78,78,0.5)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.3] not-italic relative shrink-0 text-[#020202] text-[12px] text-nowrap whitespace-pre">Los Angeles</p>
    </div>
  );
}

function Chips14() {
  return (
    <div className="box-border content-stretch flex gap-[8px] h-[24px] items-center px-[12px] py-[8px] relative rounded-[8px] shrink-0" data-name="chips">
      <div aria-hidden="true" className="absolute border border-[rgba(78,78,78,0.5)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.3] not-italic relative shrink-0 text-[#4e4e4e] text-[12px] text-nowrap whitespace-pre">🍸</p>
    </div>
  );
}

function Chips15() {
  return (
    <div className="box-border content-stretch flex gap-[8px] h-[24px] items-center px-[12px] py-[8px] relative rounded-[8px] shrink-0" data-name="chips">
      <div aria-hidden="true" className="absolute border border-[rgba(78,78,78,0.5)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.3] not-italic relative shrink-0 text-[#4e4e4e] text-[12px] text-nowrap whitespace-pre">🎉</p>
    </div>
  );
}

function SearchCardTags3() {
  return (
    <div className="content-center flex flex-wrap gap-[8px] items-center relative shrink-0 w-full" data-name="Search card tags">
      <Chips12 />
      <Chips13 />
      <Chips14 />
      <Chips15 />
    </div>
  );
}

function SearchCardTextContainer3() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[16px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Search card text container">
      <SearchCardText3 />
      <SearchCardTags3 />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#4e4e4e] text-[12px] text-nowrap tracking-[0.36px] uppercase">
        <p className="leading-[1.3] whitespace-pre">LAST SEARCHED 5 DEC 2025</p>
      </div>
    </div>
  );
}

function SearchCardContent4() {
  return (
    <div className="basis-0 content-stretch flex gap-[12px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Search card content">
      <Bookmark3 />
      <SearchCardTextContainer3 />
    </div>
  );
}

function ArrowForward3() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="arrow_forward">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="arrow_forward">
          <path d={svgPaths.p19ea9500} fill="var(--fill-0, #FEFCFC)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-[#6a2b81] box-border content-stretch flex gap-[4px] items-center justify-center px-[16px] py-[8px] relative rounded-[48px] shrink-0 size-[40px]" data-name="button">
      <ArrowForward3 />
    </div>
  );
}

function Card3() {
  return (
    <div className="backdrop-blur backdrop-filter basis-0 bg-[rgba(221,189,233,0.25)] grow min-h-px min-w-px relative rounded-[20px] shrink-0" data-name="card">
      <div aria-hidden="true" className="absolute border border-[#8536a1] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <div className="flex flex-row items-end size-full">
        <div className="box-border content-stretch flex gap-[24px] items-end p-[20px] relative w-full">
          <SearchCardContent4 />
          <Button4 />
        </div>
      </div>
    </div>
  );
}

function SearchCardsContainer1() {
  return (
    <div className="content-stretch flex gap-[26px] items-center relative shrink-0 w-full" data-name="Search cards container">
      <Card1 />
      <Card2 />
      <Card3 />
    </div>
  );
}

function SearchSection() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-end relative shrink-0 w-full" data-name="Search section">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.5] not-italic relative shrink-0 text-[#4e4e4e] text-[20px] w-full">Bookmarks</p>
      <SearchCardsContainer1 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <SearchCardsContainer />
      <SearchSection />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[54px] items-start left-1/2 top-[calc(50%+84px)] translate-x-[-50%] translate-y-[-50%] w-[1142px]">
      <GreetingSection />
      <Frame1 />
    </div>
  );
}

export default function Homescreen() {
  return (
    <div className="bg-[#e1e1e1] relative size-full" data-name="homescreen">
      <Grid />
      <div className="absolute flex h-[989px] items-center justify-center left-[-584px] top-[115px] w-[5016px]">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <div className="h-[989px] relative w-[5016px]" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5016 989">
              <path clipRule="evenodd" d={svgPaths.p2813bc80} fill="var(--fill-0, #949494)" fillOpacity="0.25" fillRule="evenodd" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 h-[866.491px] left-[-1055px] w-[5979px]" data-name="Vector">
        <div className="absolute inset-[-4.62%_-0.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6059 947">
            <g filter="url(#filter0_d_6_5997)" id="Vector">
              <path clipRule="evenodd" d={svgPaths.p17741e80} fill="var(--fill-0, #EBEBEB)" fillOpacity="0.37" fillRule="evenodd" shapeRendering="crispEdges" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="946.491" id="filter0_d_6_5997" width="6059" x="0" y="-1.43779e-06">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset />
                <feGaussianBlur stdDeviation="20" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_6_5997" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_6_5997" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <Frame />
    </div>
  );
}