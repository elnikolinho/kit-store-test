"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ShopFiltersProps {
  type?: "vintage" | "merch"
}

export function ShopFilters({ type = "vintage" }: ShopFiltersProps) {
  const [openSections, setOpenSections] = useState<string[]>(["price", "era"])

  const toggleSection = (section: string) => {
    setOpenSections(prev => 
      prev.includes(section) 
        ? prev.filter(s => s !== section)
        : [...prev, section]
    )
  }

  const vintageFilters = {
    era: {
      label: "ERA",
      options: ["1980s", "1990s", "2000s", "2010s"]
    },
    team: {
      label: "TEAM TYPE",
      options: ["National Teams", "Club Teams"]
    },
    league: {
      label: "LEAGUE",
      options: ["Premier League", "La Liga", "Serie A", "Bundesliga", "Ligue 1", "International"]
    }
  }

  const merchFilters = {
    category: {
      label: "CATEGORY",
      options: ["T-Shirts", "Hoodies", "Caps", "Accessories"]
    },
    size: {
      label: "SIZE",
      options: ["S", "M", "L", "XL", "XXL"]
    }
  }

  const filters = type === "vintage" ? vintageFilters : merchFilters

  const priceFilter = {
    label: "PRICE",
    options: type === "vintage" 
      ? ["Under $150", "$150 - $200", "$200 - $250", "Over $250"]
      : ["Under $30", "$30 - $50", "$50 - $80", "Over $80"]
  }

  return (
    <div className="space-y-6">
      <div>
        <h3 className="font-serif text-xs tracking-engravers text-foreground mb-4">FILTERS</h3>
      </div>

      {/* Price Filter */}
      <div className="border-t border-border pt-4">
        <button
          onClick={() => toggleSection("price")}
          className="flex items-center justify-between w-full text-left"
        >
          <span className="text-xs tracking-wide text-foreground">{priceFilter.label}</span>
          <ChevronDown 
            className={`h-4 w-4 text-muted-foreground transition-transform ${
              openSections.includes("price") ? "rotate-180" : ""
            }`} 
          />
        </button>
        {openSections.includes("price") && (
          <div className="mt-3 space-y-2">
            {priceFilter.options.map((option) => (
              <label key={option} className="flex items-center gap-2 cursor-pointer group">
                <input 
                  type="checkbox" 
                  className="rounded border-border bg-input text-accent focus:ring-accent"
                />
                <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                  {option}
                </span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Dynamic Filters */}
      {Object.entries(filters).map(([key, filter]) => (
        <div key={key} className="border-t border-border pt-4">
          <button
            onClick={() => toggleSection(key)}
            className="flex items-center justify-between w-full text-left"
          >
            <span className="text-xs tracking-wide text-foreground">{filter.label}</span>
            <ChevronDown 
              className={`h-4 w-4 text-muted-foreground transition-transform ${
                openSections.includes(key) ? "rotate-180" : ""
              }`} 
            />
          </button>
          {openSections.includes(key) && (
            <div className="mt-3 space-y-2">
              {filter.options.map((option) => (
                <label key={option} className="flex items-center gap-2 cursor-pointer group">
                  <input 
                    type="checkbox" 
                    className="rounded border-border bg-input text-accent focus:ring-accent"
                  />
                  <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                    {option}
                  </span>
                </label>
              ))}
            </div>
          )}
        </div>
      ))}

      {/* Clear filters */}
      <div className="pt-4">
        <Button 
          variant="outline" 
          size="sm" 
          className="w-full text-xs tracking-wide border-border text-muted-foreground hover:text-foreground"
        >
          CLEAR ALL
        </Button>
      </div>
    </div>
  )
}
