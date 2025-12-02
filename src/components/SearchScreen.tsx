import { useState, FormEvent } from "react";
import { ArrowRight, Clock } from "lucide-react";
import { SearchHistoryItem } from "../App";
import svgPaths from "../imports/svg-v2lzqvvs8h";
import bookmarkSvg from "../imports/svg-4dl7o2jbmp";
import iconSvg from "../imports/svg-q7k3mdj43z";
import Button from "../imports/Button";
import { HistoryPanel } from "./HistoryPanel";
import { EmptyBookmarksState } from "./EmptyBookmarksState";

interface SearchScreenProps {
  onSearch: (query: string) => void;
  searchHistory: SearchHistoryItem[];
  onSelectHistory: (item: SearchHistoryItem) => void;
}

function BackgroundDecoration() {
  return (
    <>
      {/* Top wave decoration */}
      <div className="absolute flex h-[989px] items-center justify-center left-[-584px] top-[115px] w-[5016px] pointer-events-none">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <div className="h-[989px] relative w-[5016px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5016 989">
              <path 
                clipRule="evenodd" 
                d={svgPaths.p2813bc80} 
                fill="var(--muted)" 
                fillOpacity="0.25" 
                fillRule="evenodd" 
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 h-[866.491px] left-[-1055px] w-[5979px] pointer-events-none">
        <div className="absolute inset-[-4.62%_-0.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6059 947">
            <g filter="url(#filter0_d_6_5997)">
              <path 
                clipRule="evenodd" 
                d={svgPaths.p17741e80} 
                fill="var(--card)" 
                fillOpacity="0.37" 
                fillRule="evenodd" 
                shapeRendering="crispEdges" 
              />
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
    </>
  );
}

export function SearchScreen({ onSearch, searchHistory, onSelectHistory }: SearchScreenProps) {
  const [query, setQuery] = useState("");
  const [isHistoryOpen, setIsHistoryOpen] = useState(false);
  
  // Store bookmarks by history item ID
  const [bookmarks, setBookmarks] = useState<Record<string, {
    title: string;
    isVisible: boolean;
  }>>({
    "1": {
      title: "My Daily Dashboard",
      isVisible: true
    },
    "2": {
      title: "Weekly Goals Overview",
      isVisible: true
    },
    "3": {
      title: "Social Presence",
      isVisible: true
    }
  });

  // Helper function to extract tags from query and history item
  const extractTags = (item: SearchHistoryItem) => {
    const tags = [];
    if (item.event && item.event !== "Event Analysis") tags.push(item.event);
    if (item.location && item.location !== "Multiple Locations") tags.push(item.location);
    tags.push("📊");
    return tags;
  };

  // Helper function to generate default title from query
  const generateDefaultTitle = (query: string) => {
    // Take first 5 words or up to 40 characters
    const words = query.split(' ').slice(0, 5).join(' ');
    return words.length > 40 ? words.substring(0, 40) + '...' : words;
  };

  const handleToggleBookmark = (historyId: string, item: SearchHistoryItem) => {
    setBookmarks(prev => {
      const existing = prev[historyId];
      
      if (existing) {
        // Toggle visibility if already bookmarked
        return {
          ...prev,
          [historyId]: {
            ...existing,
            isVisible: !existing.isVisible
          }
        };
      } else {
        // Create new bookmark
        return {
          ...prev,
          [historyId]: {
            title: generateDefaultTitle(item.query),
            isVisible: true
          }
        };
      }
    });
  };

  const handleUpdateBookmarkTitle = (historyId: string, newTitle: string) => {
    setBookmarks(prev => ({
      ...prev,
      [historyId]: {
        ...prev[historyId],
        title: newTitle
      }
    }));
  };

  const handleRemoveBookmark = (historyId: string) => {
    setBookmarks(prev => ({
      ...prev,
      [historyId]: {
        ...prev[historyId],
        isVisible: false
      }
    }));
  };

  // Get visible bookmarks for display on homescreen
  const visibleBookmarks = searchHistory
    .filter(item => bookmarks[item.id]?.isVisible)
    .map(item => ({
      historyItem: item,
      bookmarkData: bookmarks[item.id]
    }));

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query);
      setQuery("");
    }
  };

  const handleButtonClick = (e: React.MouseEvent) => {
    const target = e.currentTarget as HTMLElement;
    const rect = target.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    
    // If click is on the left half (clock icon), open history
    if (clickX < rect.width / 2) {
      setIsHistoryOpen(true);
    } else {
      // If click is on the right half (arrow icon), submit form
      handleSubmit(e as any);
    }
  };

  return (
    <div className="relative min-h-screen w-full bg-background overflow-hidden">
      <BackgroundDecoration />
      
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="w-full max-w-[1142px] space-y-[32px] sm:space-y-[54px]">
          {/* Greeting Section */}
          <div className="flex flex-col gap-[20px] sm:gap-[32px] items-start w-full">
            {/* Greeting Text */}
            <div className="flex flex-col gap-[12px] sm:gap-[16px] items-start w-full text-center">
              <p className="w-full tracking-[0.4px]" style={{ 
                fontSize: 'clamp(16px, 4vw, 20px)',
                fontWeight: 'var(--font-weight-semibold)',
                color: 'var(--sidebar-foreground)',
                lineHeight: '1.3'
              }}>
                Hi, Matthew
              </p>
              <h1 className="w-full" style={{ 
                fontSize: 'clamp(28px, 6vw, 48px)',
                fontWeight: 'var(--font-weight-bold)',
                color: 'var(--muted)',
                letterSpacing: '0.48px'
              }}>
                What are you looking for?
              </h1>
            </div>

            {/* Search Input */}
            <form onSubmit={handleSubmit} className="w-full">
              <div className="relative backdrop-blur-[6px] bg-secondary-foreground rounded-[48px] border border-border shadow-[0px_4px_20px_0px_rgba(0,0,0,0.2)]">
                <div className="flex items-center justify-between pl-[16px] sm:pl-[24px] lg:pl-[32px] pr-[12px] sm:pr-[16px] lg:pr-[20px] py-[12px] sm:py-[16px] lg:py-[20px] gap-2">
                  <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Example: What is the average of bottles sold per event for Don Julio in Chicago?"
                    className="flex-1 bg-transparent border-none outline-none text-primary-foreground placeholder:text-primary-foreground/70 placeholder:italic placeholder:font-[var(--font-weight-normal)] min-w-0"
                    style={{ fontSize: 'clamp(14px, 2.5vw, 18px)', fontWeight: 'var(--font-weight-medium)' }}
                  />
                  
                  {/* Split Button */}
                  <div 
                    className="h-[36px] w-[90px] sm:h-[42px] sm:w-[105px] lg:h-[48px] lg:w-[120px] cursor-pointer flex-shrink-0" 
                    onClick={handleButtonClick}
                  >
                    <Button />
                  </div>
                </div>
              </div>
            </form>
          </div>

          {/* Bookmarks Section */}
          <div className="flex flex-col gap-[12px] w-full">
            <h3 style={{ 
              fontSize: 'clamp(16px, 3vw, 20px)',
              fontWeight: 'var(--font-weight-semibold)',
              color: 'var(--muted)',
              lineHeight: '1.5'
            }}>
              Bookmarks
            </h3>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-[16px] sm:gap-[20px] lg:gap-[26px] w-full">
              {visibleBookmarks.map(({ historyItem, bookmarkData }) => (
                <BookmarkCard
                  key={historyItem.id}
                  title={bookmarkData.title}
                  query={historyItem.query}
                  tags={extractTags(historyItem)}
                  lastSearched={historyItem.date}
                  onSelect={() => onSelectHistory(historyItem)}
                  onRemove={() => handleRemoveBookmark(historyItem.id)}
                  onUpdateTitle={(newTitle) => handleUpdateBookmarkTitle(historyItem.id, newTitle)}
                />
              ))}
              {visibleBookmarks.length === 0 && <EmptyBookmarksState />}
            </div>
          </div>
        </div>
      </div>
      
      <HistoryPanel 
        isOpen={isHistoryOpen}
        onClose={() => setIsHistoryOpen(false)}
        searchHistory={searchHistory}
        onSelectHistory={onSelectHistory}
        bookmarks={bookmarks}
        onToggleBookmark={handleToggleBookmark}
        onUpdateBookmarkTitle={handleUpdateBookmarkTitle}
      />
    </div>
  );
}

interface BookmarkCardProps {
  title: string;
  query: string;
  tags: string[];
  lastSearched: string;
  onSelect: () => void;
  onRemove: () => void;
  onUpdateTitle: (newTitle: string) => void;
}

function BookmarkCard({ title, query, tags, lastSearched, onSelect, onRemove, onUpdateTitle }: BookmarkCardProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);

  const handleEditClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsEditing(true);
  };

  const handleSave = (e: React.MouseEvent | React.KeyboardEvent) => {
    e.stopPropagation();
    setIsEditing(false);
    onUpdateTitle(editedTitle);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSave(e);
    } else if (e.key === 'Escape') {
      e.stopPropagation();
      setEditedTitle(title);
      setIsEditing(false);
    }
  };

  const handleBookmarkClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onRemove();
  };

  return (
    <div
      className="w-full backdrop-blur bg-secondary rounded-[16px] sm:rounded-[20px] border border-primary p-[16px] sm:p-[20px] transition-all hover:bg-secondary/80 group"
    >
      <div className="flex gap-[16px] sm:gap-[24px] items-end">
        <div className="flex-1 flex gap-[8px] sm:gap-[12px] items-start">
          <button 
            onClick={handleBookmarkClick}
            className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 mt-1 cursor-pointer transition-transform hover:scale-110 active:scale-95"
          >
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
              <path d={bookmarkSvg.p2bbd0880} fill="var(--secondary-foreground)" />
            </svg>
          </button>
          
          <div className="flex flex-col gap-[8px] w-full">
            <div className="flex gap-[8px] items-center">
              {isEditing ? (
                <input
                  type="text"
                  value={editedTitle}
                  onChange={(e) => setEditedTitle(e.target.value)}
                  onKeyDown={handleKeyDown}
                  onBlur={handleSave}
                  autoFocus
                  onClick={(e) => e.stopPropagation()}
                  className="flex-1 bg-background/50 border border-primary rounded-[8px] px-[8px] py-[4px] outline-none focus:ring-2 focus:ring-primary/50"
                  style={{ 
                    fontSize: 'clamp(14px, 2.5vw, 16px)',
                    fontWeight: 'var(--font-weight-semibold)',
                    color: 'var(--foreground)',
                    lineHeight: '1.5'
                  }}
                />
              ) : (
                <p style={{ 
                  fontSize: 'clamp(14px, 2.5vw, 16px)',
                  fontWeight: 'var(--font-weight-semibold)',
                  color: 'var(--foreground)',
                  lineHeight: '1.5'
                }}>
                  {editedTitle}
                </p>
              )}
              <div 
                onClick={handleEditClick}
                className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 cursor-pointer transition-transform hover:scale-110 active:scale-95"
              >
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                  <path d={iconSvg.p38d1c00} fill="var(--secondary-foreground)" />
                </svg>
              </div>
            </div>
            
            <p style={{ 
              fontSize: 'clamp(14px, 2.5vw, 16px)',
              fontWeight: 'var(--font-weight-normal)',
              color: 'var(--muted)',
              lineHeight: '1.5'
            }}>
              {query}
            </p>

            {/* Tags */}
            <div className="flex gap-[6px] sm:gap-[8px] flex-wrap mt-2">
              {tags.map((tag, index) => (
                <div key={index} className="px-[10px] sm:px-[12px] py-[6px] sm:py-[8px] rounded-[8px] border border-muted/50 h-[22px] sm:h-[24px] flex items-center">
                  <span className="caption" style={{ color: 'var(--foreground)', fontSize: 'clamp(10px, 2vw, 12px)' }}>
                    {tag}
                  </span>
                </div>
              ))}
            </div>

            <p className="caption uppercase tracking-[0.36px] mt-2" style={{ 
              color: 'var(--muted)',
              fontSize: 'clamp(10px, 2vw, 12px)'
            }}>
              {lastSearched}
            </p>
          </div>
        </div>

        <button 
          onClick={onSelect}
          className="w-[36px] h-[36px] sm:w-[40px] sm:h-[40px] bg-secondary-foreground rounded-full flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110 hover:scale-125 active:scale-100 cursor-pointer"
        >
          <div className="w-4 h-4 sm:w-5 sm:h-5">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
              <path d={iconSvg.p19ea9500} fill="var(--primary-foreground)" />
            </svg>
          </div>
        </button>
      </div>
    </div>
  );
}