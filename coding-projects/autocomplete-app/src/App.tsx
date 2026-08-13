import { useState, useEffect } from "react";
import {fruits} from './data';
import "./App.css";

function App() {

  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);

  //debounce + search
  useEffect(() => {
    if(!query) {
      return;
    }

    const timer = setTimeout(() => {
      setLoading(true);
      setTimeout(() => {
        const result = fruits.filter((fruit: string) => {
          return fruit.toLowerCase().includes(query.toLowerCase());
        })
        setSuggestions(result);
        setLoading(false);
        setSelectedIndex(-1);
      }, 300);

    }, 300);

    return () => clearTimeout(timer);
  }, [query]);

  const handleKeydown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if(!suggestions) {
      return;
    }

    switch(e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setSelectedIndex((prev) => {
          return prev === suggestions.length-1 ? 0 : prev + 1;
        });
        break;
      case 'ArrowUp':
        e.preventDefault();
        setSelectedIndex((prev) => {
          return prev <=0 ? suggestions.length-1 : prev-1;
        });
        break;
      case 'Enter':
        if(selectedIndex >=0) {
          setQuery(suggestions[selectedIndex]);
          setSuggestions([]);
          setSelectedIndex(-1);
        }
        break;
      case 'Escape':
        setQuery("");
        setSuggestions([]);
        break;
    }
  }

  const handleSelect = (value: string) => {
    setQuery(value);
    setSuggestions([]);
    setSelectedIndex(-1);
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setQuery(value);

    if(!value.trim()) {
      setSuggestions([]);
      setSelectedIndex(-1);
      setLoading(false);
    }
  }

  return (
    <div className="app">
      <h1>Autocomplete</h1>
      <div className="autocomplete">
        <input
          value={query}
          onChange={handleChange}
          onKeyDown={handleKeydown}
          placeholder="Search fruits"
          autoFocus
          >
        </input>

        {loading && (
          <div className="loading">
            loading...
          </div>
        )}

        {!loading && suggestions.length > 0 && (
          <ul className="suggestions">
            {suggestions.map((item, index) => {
              return <li key={item} 
                      className={selectedIndex === index ? "active" : ""} onClick={() => handleSelect(item)}>
                {item}
              </li>
            })}
          </ul>
        )}

        {!loading && query && suggestions.length === 0 && (
          <div className="no-results">
            No results found
          </div>
        )}

      </div>
    </div>
  )
}

export default App;

