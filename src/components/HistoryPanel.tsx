import { useState } from "react";
import svgPaths from "../imports/svg-e9cc4w98t0";
import { SearchHistoryItem } from "../App";

interface HistoryPanelProps {
  isOpen: boolean;
  onClose: () => void;
  searchHistory: SearchHistoryItem[];
  onSelectHistory: (item: SearchHistoryItem) => void;
  bookmarks: Record<string, { title: string; isVisible: boolean }>;
  onToggleBookmark: (historyId: string, item: SearchHistoryItem) => void;
  onUpdateBookmarkTitle: (historyId: string, newTitle: string) => void;
}

export function HistoryPanel({ 
  isOpen, 
  onClose, 
  searchHistory, 
  onSelectHistory, 
  bookmarks, 
  onToggleBookmark,
  onUpdateBookmarkTitle 
}: HistoryPanelProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editedTitle, setEditedTitle] = useState("");

  // Filter history by search query (including bookmark titles)
  const filteredHistory = searchHistory.filter(item => {
    const bookmark = bookmarks[item.id];
    const matchesQuery = item.query.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTitle = bookmark?.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesQuery || matchesTitle;
  });

  const handleEditClick = (id: string, currentTitle: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setEditingId(id);
    setEditedTitle(currentTitle);
  };

  const handleSaveTitle = (id: string, e?: React.MouseEvent | React.FocusEvent) => {
    e?.stopPropagation();
    if (editedTitle.trim()) {
      onUpdateBookmarkTitle(id, editedTitle.trim());
    }
    setEditingId(null);
    setEditedTitle("");
  };

  const handleKeyDown = (id: string, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSaveTitle(id);
    } else if (e.key === 'Escape') {
      setEditingId(null);
      setEditedTitle("");
    }
  };

  // Extract keywords from item
  const extractKeywords = (item: SearchHistoryItem) => {
    const keywords = [];
    if (item.event && item.event !== "Event Analysis") keywords.push(item.event);
    if (item.location && item.location !== "Multiple Locations") keywords.push(item.location);
    return keywords.join(", ");
  };

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/10 z-40 transition-opacity"
          onClick={onClose}
        />
      )}
      
      {/* Side Panel */}
      <div 
        className={`fixed top-0 right-0 h-full w-full sm:w-[calc(100%/3)] bg-card z-50 transition-transform duration-300 ease-in-out ${ 
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ 
          boxShadow: '-8px 0px 64px 0px rgba(37, 34, 31, 0.25)'
        }}
      >
        <div className="flex flex-col h-full overflow-hidden">
          {/* Header Section */}
          <div className="flex-shrink-0 pt-[24px] pb-[32px]">
            <div className="flex flex-col gap-[32px] px-[24px]">
              {/* Back Button and Title */}
              <div className="flex gap-[16px] items-center">
                <button
                  onClick={onClose}
                  className="flex-shrink-0 size-[32px] rounded-[33px] flex items-center justify-center transition-colors"
                  style={{ backgroundColor: 'var(--secondary)' }}
                >
                  <div className="size-[20px]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                      <path d={svgPaths.pa9bf700} fill="var(--secondary-foreground)" />
                    </svg>
                  </div>
                </button>
                <h2 style={{ 
                  fontSize: 'var(--text-2xl)',
                  fontWeight: 'var(--font-weight-medium)',
                  color: 'var(--foreground)',
                  lineHeight: '1.7'
                }}>
                  History
                </h2>
              </div>

              {/* Search Input */}
              <div className="relative">
                <div className="rounded-[4px] border border-border">
                  <div className="flex items-center gap-[6px] px-[12px] py-[12px] min-h-[48px]">
                    <div className="size-[24px] flex-shrink-0">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                        <path d={svgPaths.paa56300} fill="var(--sidebar-foreground)" />
                      </svg>
                    </div>
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search"
                      className="flex-1 bg-transparent border-none outline-none min-w-0"
                      style={{ 
                        fontSize: 'var(--text-base)',
                        fontWeight: 'var(--font-weight-normal)',
                        color: 'var(--muted)'
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* History Timeline - Scrollable */}
          <div className="flex-1 overflow-y-auto px-[24px]">
            <div className="flex flex-col">
              {filteredHistory.map((item, index) => {
                const isBookmarked = bookmarks[item.id];
                const isFirst = index === 0;
                const isLast = index === filteredHistory.length - 1;
                const keywords = extractKeywords(item);

                return (
                  <div
                    key={item.id}
                    className="flex gap-[11px] w-full"
                  >
                    {/* Timeline Line */}
                    <div className="flex flex-col items-center w-[8px] flex-shrink-0">
                      {/* Top line connector */}
                      {!isFirst && (
                        <div className="h-[12px] w-0 relative">
                          <div className="absolute bottom-0 left-[-0.5px] right-[-0.5px] top-0">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 12">
                              <path d="M0.5 0V12" stroke="var(--muted)" />
                            </svg>
                          </div>
                        </div>
                      )}
                      
                      {/* Circle */}
                      <div className="h-[8px] w-full relative flex-shrink-0">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
                          <circle 
                            cx="4" 
                            cy="4" 
                            r="4" 
                            fill={isBookmarked ? "var(--secondary-foreground)" : "var(--muted)"}
                          />
                        </svg>
                      </div>
                      
                      {/* Bottom line */}
                      {!isLast && (
                        <div className="flex-1 w-0 relative min-h-[93px]">
                          <div className="absolute bottom-0 left-[-0.5px] right-[-0.5px] top-0">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 93">
                              <path d="M0.5 0V93" stroke="var(--muted)" />
                            </svg>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex-1 flex flex-col gap-[16px] pb-[24px]">
                      {/* Date and Bookmark Icon */}
                      <div className="flex gap-[8px] items-center min-h-[32px]">
                        <button
                          onClick={() => {
                            onSelectHistory(item);
                            onClose();
                          }}
                          className="text-left hover:opacity-70 transition-opacity"
                        >
                          <p 
                            className="underline decoration-solid"
                            style={{ 
                              fontSize: 'var(--text-sm)',
                              fontWeight: 'var(--font-weight-normal)',
                              color: 'var(--sidebar-foreground)',
                              lineHeight: '1.5'
                            }}
                          >
                            {item.date}
                          </p>
                        </button>
                        
                        <button
                          onClick={() => onToggleBookmark(item.id, item)}
                          className="size-[20px] flex-shrink-0 cursor-pointer transition-transform hover:scale-110 active:scale-95"
                        >
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                            <path 
                              d={svgPaths.p29384100} 
                              fill={isBookmarked ? "var(--secondary-foreground)" : "var(--muted)"} 
                            />
                          </svg>
                        </button>
                      </div>

                      {/* Query, Keywords, and Emojis */}
                      <div className="flex flex-wrap gap-[8px] items-center pb-[8px]">
                        {/* Query Chip */}
                        <div className="box-border flex gap-[8px] h-[24px] items-center px-[12px] py-[8px] rounded-[8px] border border-border relative">
                          <p style={{ 
                            fontSize: 'var(--text-xs)',
                            fontWeight: 'var(--font-weight-medium)',
                            color: 'var(--sidebar-foreground)',
                            lineHeight: '1.3'
                          }}>
                            {item.query}
                          </p>
                        </div>

                        {/* Keywords */}
                        {keywords && (
                          <div className="flex gap-[10px] items-center pl-[8px]">
                            <p 
                              className="italic"
                              style={{ 
                                fontSize: 'var(--text-xs)',
                                fontWeight: 'var(--font-weight-normal)',
                                color: 'var(--foreground)',
                                lineHeight: '1.3'
                              }}
                            >
                              Keywords: {keywords}
                            </p>
                          </div>
                        )}

                        {/* Emojis */}
                        <div className="flex gap-[8px] items-center">
                          <p style={{ fontSize: 'var(--text-xs)', lineHeight: '1.3' }}>📊</p>
                          <p style={{ fontSize: 'var(--text-xs)', lineHeight: '1.3' }}>📊</p>
                        </div>
                      </div>

                      {/* Bookmarked as (only show if bookmarked) */}
                      {isBookmarked && (
                        <div className="flex gap-[4px] items-center h-[16px] py-[4px]">
                          <div className="size-[16px] flex-shrink-0">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                              <path d={svgPaths.p32782c00} fill="var(--foreground)" />
                            </svg>
                          </div>
                          
                          {editingId === item.id ? (
                            <input
                              type="text"
                              value={editedTitle}
                              onChange={(e) => setEditedTitle(e.target.value)}
                              onKeyDown={(e) => handleKeyDown(item.id, e)}
                              onBlur={(e) => handleSaveTitle(item.id, e)}
                              autoFocus
                              onClick={(e) => e.stopPropagation()}
                              className="flex-1 bg-input-background border border-border rounded-[4px] px-[8px] py-[2px] outline-none focus:ring-2 focus:ring-ring/50"
                              style={{ 
                                fontSize: 'var(--text-xs)',
                                fontWeight: 'var(--font-weight-normal)',
                                color: 'var(--foreground)',
                                lineHeight: '1.5'
                              }}
                            />
                          ) : (
                            <p style={{ 
                              fontSize: 'var(--text-xs)',
                              fontWeight: 'var(--font-weight-normal)',
                              lineHeight: '1.3'
                            }}>
                              <span style={{ color: 'var(--sidebar-foreground)' }}>Bookmarked as </span>
                              <span style={{ color: 'var(--foreground)' }}>{bookmarks[item.id].title}</span>
                            </p>
                          )}
                          
                          {editingId !== item.id && (
                            <button
                              onClick={(e) => handleEditClick(item.id, bookmarks[item.id].title, e)}
                              className="size-[16px] flex-shrink-0 cursor-pointer transition-transform hover:scale-110 active:scale-95"
                            >
                              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                                <path d={svgPaths.p3eadbd80} fill="var(--foreground)" />
                              </svg>
                            </button>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}