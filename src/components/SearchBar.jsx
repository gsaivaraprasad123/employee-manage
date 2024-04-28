import React from 'react';

const SearchBar = ({ value, onChange }) => {
    return (
        <div className="search-bar">
            <input
                type="text"
                placeholder="Search by ID"
                value={value}
                onChange={onChange}
            />
            <button>Search</button>
        </div>
    );
};

export default SearchBar;
