import React, { useState } from 'react';

const SearchComponent = () => {
  const [filter, setFilter] = useState({
    from: '',
    to: '',
    date: '',
  });
  const [searchResults, setSearchResults] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilter((prevFilter) => ({
      ...prevFilter,
      [name]: value,
    }));
  };

  const handleSearch = () => {
    const filteredResults = searchData.filter((item) => {
      const isFromMatch = filter.from ? item.from.toLowerCase().includes(filter.from.toLowerCase()) : true;
      const isToMatch = filter.to ? item.to.toLowerCase().includes(filter.to.toLowerCase()) : true;
      const isDateMatch = filter.date ? new Date(item.date).toDateString() === new Date(filter.date).toDateString() : true;

      return isFromMatch && isToMatch && isDateMatch;
    });

    setSearchResults(filteredResults);
  };

  return (
    <div>
      <div>
        <label>From:</label>
        <input type="text" name="from" value={filter.from} onChange={handleInputChange} />
      </div>

      <div>
        <label>To:</label>
        <input type="text" name="to" value={filter.to} onChange={handleInputChange} />
      </div>

      <div>
        <label>Date:</label>
        <input type="date" name="date" value={filter.date} onChange={handleInputChange} />
      </div>

      <button onClick={handleSearch}>Search</button>

      <ul>
        {searchResults.map((result, index) => (
          <li key={index}>
            <p>From: {result.from}</p>
            <p>To: {result.to}</p>
            <p>Date: {result.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

const searchData = [
  { from: 'Hyderabad', to: 'Vijayawada', date: '2023-05-28' },
  { from: 'Vijayawada', to: 'Hyderabad', date: '2023-05-28' },
  { from: 'Chennai', to: 'Goa', date: '2023-05-28' },
];

export default SearchComponent;