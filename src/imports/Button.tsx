import svgPaths from "./svg-jeyjhjr0ow";

export default function Button() {
  return (
    <div className="relative size-full" data-name="button">
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