import bookmarkSvg from "../imports/svg-4dl7o2jbmp";

export function EmptyBookmarksState() {
  return (
    <div className="backdrop-blur bg-secondary/25 border border-primary rounded-[16px] sm:rounded-[20px] p-[16px] sm:p-[20px]">
      <div className="flex gap-[12px] items-start">
        <div className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
            <path d={bookmarkSvg.p2bbd0880} fill="var(--primary)" />
          </svg>
        </div>
        <div className="flex flex-col gap-[12px]">
          <p style={{ 
            fontSize: 'clamp(14px, 2.5vw, 16px)',
            fontWeight: 'var(--font-weight-semibold)',
            color: 'var(--foreground)',
            lineHeight: '1.5'
          }}>
            Pro tip:
          </p>
          <p style={{ 
            fontSize: 'clamp(14px, 2.5vw, 16px)',
            fontWeight: 'var(--font-weight-normal)',
            color: 'var(--foreground)',
            lineHeight: '1.5'
          }}>
            Bookmark your most used searches so that they appear on your homepage or set one as default so you see it every time you log in
          </p>
        </div>
      </div>
    </div>
  );
}
