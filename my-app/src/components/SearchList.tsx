import React, { useState } from "react";

interface Item {
  id: number;
  name: string;
}

const initialData: Item[] = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
  { id: 4, name: "David" },
  { id: 5, name: "Eve" },
];

export default function SearchList() {
  const [query, setQuery] = useState<string>("");
  const [results, setResults] = useState<Item[]>(initialData);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);

    // simple case-insensitive filter
    const filtered = initialData.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );

    setResults(filtered);
  };

  return (
    <div style={{ padding: 20, fontFamily: "sans-serif", maxWidth: 400 }}>
      <h2>Search in List (by name)</h2>

      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={handleSearch}
        style={{
          width: "100%",
          padding: 8,
          border: "1px solid #ccc",
          borderRadius: 6,
          marginBottom: 12,
        }}
      />

      <ul>
        {results.length > 0 ? (
          results.map((item) => (
            <li key={item.id}>
              <strong>{item.id}</strong> — {item.name}
            </li>
          ))
        ) : (
          <li style={{ color: "gray" }}>No match found</li>
        )}
      </ul>
    </div>
  );
}
