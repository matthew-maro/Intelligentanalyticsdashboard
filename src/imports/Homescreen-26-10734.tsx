import svgPaths from "./svg-sqx5ihdltb";

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

function Frame8() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.5] not-italic relative shrink-0 text-[#25221f] text-[16px] text-nowrap whitespace-pre">My Daily Dashboard</p>
      <Edit />
    </div>
  );
}

function SearchCardText() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Search card text">
      <Frame8 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] min-w-full not-italic relative shrink-0 text-[#4e4e4e] text-[16px] w-[min-content]">What is the average of bottles sold per event for Don Julio in Chicago?</p>
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
    <div className="content-center flex flex-wrap gap-[8px] items-center relative shrink-0 w-full" data-name="Search card tags">
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
      <Bookmark />
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

function Frame9() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.5] not-italic relative shrink-0 text-[#25221f] text-[16px] text-nowrap whitespace-pre">Weekly Goals Overview</p>
      <Edit1 />
    </div>
  );
}

function SearchCardText1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Search card text">
      <Frame9 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] min-w-full not-italic relative shrink-0 text-[#4e4e4e] text-[16px] w-[min-content]">What is the total revenue generated from sales of Patron in New York?</p>
    </div>
  );
}

function Chips4() {
  return (
    <div className="box-border content-stretch flex gap-[8px] h-[24px] items-center px-[12px] py-[8px] relative rounded-[8px] shrink-0" data-name="chips">
      <div aria-hidden="true" className="absolute border border-[rgba(78,78,78,0.5)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.3] not-italic relative shrink-0 text-[#020202] text-[12px] text-nowrap whitespace-pre">Patron</p>
    </div>
  );
}

function Chips5() {
  return (
    <div className="box-border content-stretch flex gap-[8px] h-[24px] items-center px-[12px] py-[8px] relative rounded-[8px] shrink-0" data-name="chips">
      <div aria-hidden="true" className="absolute border border-[rgba(78,78,78,0.5)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.3] not-italic relative shrink-0 text-[#020202] text-[12px] text-nowrap whitespace-pre">New York</p>
    </div>
  );
}

function Chips6() {
  return (
    <div className="box-border content-stretch flex gap-[8px] h-[24px] items-center px-[12px] py-[8px] relative rounded-[8px] shrink-0" data-name="chips">
      <div aria-hidden="true" className="absolute border border-[rgba(78,78,78,0.5)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.3] not-italic relative shrink-0 text-[#4e4e4e] text-[12px] text-nowrap whitespace-pre">💰</p>
    </div>
  );
}

function Chips7() {
  return (
    <div className="box-border content-stretch flex gap-[8px] h-[24px] items-center px-[12px] py-[8px] relative rounded-[8px] shrink-0" data-name="chips">
      <div aria-hidden="true" className="absolute border border-[rgba(78,78,78,0.5)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.3] not-italic relative shrink-0 text-[#4e4e4e] text-[12px] text-nowrap whitespace-pre">📉</p>
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
        <p className="leading-[1.3] whitespace-pre">LAST SEARCHED 4 DEC 2025</p>
      </div>
    </div>
  );
}

function SearchCardContent1() {
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
          <SearchCardContent1 />
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

function Frame10() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.5] not-italic relative shrink-0 text-[#25221f] text-[16px] text-nowrap whitespace-pre">Upcoming Project Deadlines</p>
      <Edit2 />
    </div>
  );
}

function SearchCardText2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Search card text">
      <Frame10 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] not-italic relative shrink-0 text-[#4e4e4e] text-[16px] w-full">How many events featured Belvedere vodka in Los Angeles last year?</p>
    </div>
  );
}

function Chips8() {
  return (
    <div className="box-border content-stretch flex gap-[8px] h-[24px] items-center px-[12px] py-[8px] relative rounded-[8px] shrink-0" data-name="chips">
      <div aria-hidden="true" className="absolute border border-[rgba(78,78,78,0.5)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.3] not-italic relative shrink-0 text-[#020202] text-[12px] text-nowrap whitespace-pre">Belvedere</p>
    </div>
  );
}

function Chips9() {
  return (
    <div className="box-border content-stretch flex gap-[8px] h-[24px] items-center px-[12px] py-[8px] relative rounded-[8px] shrink-0" data-name="chips">
      <div aria-hidden="true" className="absolute border border-[rgba(78,78,78,0.5)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.3] not-italic relative shrink-0 text-[#020202] text-[12px] text-nowrap whitespace-pre">Los Angeles</p>
    </div>
  );
}

function Chips10() {
  return (
    <div className="box-border content-stretch flex gap-[8px] h-[24px] items-center px-[12px] py-[8px] relative rounded-[8px] shrink-0" data-name="chips">
      <div aria-hidden="true" className="absolute border border-[rgba(78,78,78,0.5)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.3] not-italic relative shrink-0 text-[#4e4e4e] text-[12px] text-nowrap whitespace-pre">🍸</p>
    </div>
  );
}

function Chips11() {
  return (
    <div className="box-border content-stretch flex gap-[8px] h-[24px] items-center px-[12px] py-[8px] relative rounded-[8px] shrink-0" data-name="chips">
      <div aria-hidden="true" className="absolute border border-[rgba(78,78,78,0.5)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.3] not-italic relative shrink-0 text-[#4e4e4e] text-[12px] text-nowrap whitespace-pre">🎉</p>
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
        <p className="leading-[1.3] whitespace-pre">LAST SEARCHED 5 DEC 2025</p>
      </div>
    </div>
  );
}

function SearchCardContent2() {
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
          <SearchCardContent2 />
          <Button3 />
        </div>
      </div>
    </div>
  );
}

function SearchCardsContainer() {
  return (
    <div className="content-stretch flex gap-[26px] items-center relative shrink-0 w-full" data-name="Search cards container">
      <Card />
      <Card1 />
      <Card2 />
    </div>
  );
}

function SearchSection() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-end relative shrink-0 w-full" data-name="Search section">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.5] not-italic relative shrink-0 text-[#4e4e4e] text-[20px] w-full">Bookmarks</p>
      <SearchCardsContainer />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <SearchSection />
    </div>
  );
}

function Frame5() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[54px] items-start left-1/2 top-[calc(50%+84px)] translate-x-[-50%] translate-y-[-50%] w-[1142px]">
      <GreetingSection />
      <Frame7 />
    </div>
  );
}

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

function Bookmark3() {
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

function StatusTitle() {
  return (
    <div className="content-stretch flex gap-[8px] items-center min-h-[32px] relative shrink-0 w-full" data-name="status title">
      <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid font-['Inter:Regular',sans-serif] font-normal leading-[1.5] not-italic relative shrink-0 text-[#676767] text-[14px] text-nowrap underline whitespace-pre">Nov. 12th 2024 at 10:40 am</p>
      <Bookmark3 />
    </div>
  );
}

function Chips12() {
  return (
    <div className="box-border content-stretch flex gap-[8px] h-[24px] items-center px-[12px] py-[8px] relative rounded-[8px] shrink-0" data-name="chips">
      <div aria-hidden="true" className="absolute border border-[#e2dfdd] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.3] not-italic relative shrink-0 text-[#676767] text-[12px] text-nowrap whitespace-pre">What is the average of bottles sold per event for Don Julio in Chicago?</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center pl-[8px] pr-0 py-0 relative shrink-0">
      <p className="font-['Inter:Italic',sans-serif] font-normal italic leading-[1.3] relative shrink-0 text-[#47423c] text-[12px] text-nowrap whitespace-pre">Keywords: Don Julio, Chicago</p>
    </div>
  );
}

function Frame4() {
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
      <Chips12 />
      <Frame3 />
      <Frame4 />
    </div>
  );
}

function Bookmark4() {
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

function Edit3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="edit">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="edit">
          <path d={svgPaths.p3eadbd80} fill="var(--fill-0, #47423C)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Action() {
  return (
    <div className="content-stretch flex gap-[4px] h-[16px] items-center relative shrink-0" data-name="action">
      <Bookmark4 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] not-italic relative shrink-0 text-[#47423c] text-[0px] text-[12px] text-nowrap whitespace-pre">
        <span className="text-[#676767]">Bookmarked as</span> <span className="text-[#020202]">My Daily Dashboard</span>
      </p>
      <Edit3 />
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

function Bookmark5() {
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
      <Bookmark5 />
    </div>
  );
}

function Chips13() {
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

function Frame11() {
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
      <Chips13 />
      <Frame6 />
      <Frame11 />
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
    </div>
  );
}

function Bookmark6() {
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

function StatusTitle2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center min-h-[32px] relative shrink-0 w-full" data-name="status title">
      <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid font-['Inter:Regular',sans-serif] font-normal leading-[1.5] not-italic relative shrink-0 text-[#676767] text-[14px] text-nowrap underline whitespace-pre">Nov. 12th 2024 at 10:40 am</p>
      <Bookmark6 />
    </div>
  );
}

function Chips14() {
  return (
    <div className="box-border content-stretch flex gap-[8px] h-[24px] items-center px-[12px] py-[8px] relative rounded-[8px] shrink-0" data-name="chips">
      <div aria-hidden="true" className="absolute border border-[#e2dfdd] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.3] not-italic relative shrink-0 text-[#676767] text-[12px] text-nowrap whitespace-pre">What is the average of bottles sold per event for Don Julio in Chicago?</p>
    </div>
  );
}

function Frame12() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center pl-[8px] pr-0 py-0 relative shrink-0">
      <p className="font-['Inter:Italic',sans-serif] font-normal italic leading-[1.3] relative shrink-0 text-[#47423c] text-[12px] text-nowrap whitespace-pre">Keywords: Don Julio, Chicago</p>
    </div>
  );
}

function Frame13() {
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
      <Chips14 />
      <Frame12 />
      <Frame13 />
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

function HistoryExpandedPortion() {
  return (
    <div className="bg-neutral-50 relative shrink-0 w-full" data-name="history - expanded portion">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col items-start px-[24px] py-0 relative w-full">
          <StatusHistoryItem />
          {[...Array(5).keys()].map((_, i) => (
            <StatusHistoryItem1 key={i} />
          ))}
          <StatusHistoryItem2 />
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

function Favorites() {
  return (
    <div className="absolute bg-neutral-50 box-border content-stretch flex flex-col h-[1080px] items-start justify-between overflow-clip right-0 rounded-bl-[48px] rounded-tl-[48px] shadow-[-8px_0px_64px_0px_rgba(37,34,31,0.25)] top-0 w-[607px]" data-name="favorites">
      <FiltersSidePeek />
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
      <Frame5 />
      <Favorites />
    </div>
  );
}