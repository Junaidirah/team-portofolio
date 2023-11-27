import React, { useState, useEffect } from "react";

const Search = () => {
  const [query, setQuery] = useState("");
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch(`http://localhost:3030/api/${query}`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const result = await response.json();
      setData(result);
      setError(null); // Clear error on successful fetch
    } catch (error) {
      setError("Error fetching data");
    }
  };

  useEffect(() => {
    if (query) {
      fetchData();
    }
  }, [query]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">FETCH API</h1>
      <div className="mb-4 flex">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter name to search"
          className="p-2 border rounded-l"
        />
        <button
          onClick={() => fetchData()}
          className="bg-blue-500 text-white p-2 rounded-r">
          Search
        </button>
      </div>

      {error ? (
        <p className="text-red-500">{error}</p>
      ) : data ? (
        <div className="text-left">
          <h2 className="text-xl font-bold mb-2">Search Result:</h2>
          <ul>
            <li>
              <strong>Nama:</strong> {data.nama}
            </li>
            <li>
              <strong>ID Provinsi:</strong> {data.provinsi}
            </li>
            <li>
              <strong>ID Kabupaten:</strong> {data.kabupaten}
            </li>
            {/* Add other fields as needed */}
          </ul>
        </div>
      ) : null}
    </div>
  );
};

export default Search;
