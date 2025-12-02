import { useState } from "react";
import { SearchScreen } from "./components/SearchScreen";
import { ResultsScreen } from "./components/ResultsScreen";

export interface SearchHistoryItem {
  id: string;
  query: string;
  event: string;
  location: string;
  date: string;
  favorited?: boolean;
}

export default function App() {
  const [currentView, setCurrentView] = useState<"search" | "results">("search");
  const [currentQuery, setCurrentQuery] = useState("");
  const [searchHistory, setSearchHistory] = useState<SearchHistoryItem[]>([
    {
      id: "1",
      query: "What is the average of bottles sold per event for Don Julio in Chicago?",
      event: "Don Julio",
      location: "Chicago",
      date: "Nov. 12th 2024 at 10:40 am",
      favorited: true,
    },
    {
      id: "2",
      query: "What is the average of bottles sold per event for Don Julio in Chicago?",
      event: "Don Julio",
      location: "Chicago",
      date: "Nov. 1st 2024 at 10:30 am",
    },
    {
      id: "3",
      query: "What is the average of bottles sold per event for Don Julio in Chicago?",
      event: "Don Julio",
      location: "Chicago",
      date: "Oct. 15th 2024 at 1:00 pm",
    },
    {
      id: "4",
      query: "What is the average of bottles sold per event for Don Julio in Chicago?",
      event: "Don Julio",
      location: "Chicago",
      date: "Sept. 22nd 2024 at 4:15 pm",
    },
    {
      id: "5",
      query: "What is the average of bottles sold per event for Don Julio in Chicago?",
      event: "Don Julio",
      location: "Chicago",
      date: "Aug. 5th 2024 at 9:45 am",
    },
    {
      id: "6",
      query: "What is the average of bottles sold per event for Don Julio in Chicago?",
      event: "Don Julio",
      location: "Chicago",
      date: "July 18th 2024 at 3:00 pm",
    },
    {
      id: "7",
      query: "What is the average of bottles sold per event for Don Julio in Chicago?",
      event: "Don Julio",
      location: "Chicago",
      date: "June 12th 2024 at 7:50 am",
    },
  ]);

  const handleSearch = (query: string) => {
    setCurrentQuery(query);
    
    // Add to history
    const newSearch: SearchHistoryItem = {
      id: Date.now().toString(),
      query: query,
      event: "Event Analysis",
      location: "Multiple Locations",
      date: new Date().toLocaleDateString("en-US", { 
        day: "numeric", 
        month: "short", 
        year: "numeric" 
      }),
    };
    
    setSearchHistory((prev) => [newSearch, ...prev]);
    setCurrentView("results");
  };

  const handleBackToSearch = () => {
    setCurrentView("search");
  };

  const handleSearchFromHistory = (item: SearchHistoryItem) => {
    setCurrentQuery(item.query);
    setCurrentView("results");
  };

  return (
    <div className="min-h-screen w-full bg-background overflow-hidden">
      {currentView === "search" ? (
        <SearchScreen
          onSearch={handleSearch}
          searchHistory={searchHistory}
          onSelectHistory={handleSearchFromHistory}
        />
      ) : (
        <ResultsScreen
          query={currentQuery}
          onBack={handleBackToSearch}
        />
      )}
    </div>
  );
}