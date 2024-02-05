import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 

export default function Search() {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const searchMappings = [
    { term: 'insolventa', route: '/insolventa' },
    { term: 'creanta', route: '/recuperari-creante' },
    { term: 'juridica', route: '/legalAdvice' },
    { term: 'juridic', route: '/legalAdvice' },
    { term: 'faliment', route: '/insolventa' },
  
  ];
  //Adauga keywords 

  const handleSearch = () => {
    const lowercaseQuery = searchQuery.toLowerCase();
    const matchingMapping = searchMappings.find((mapping) => lowercaseQuery.includes(mapping.term));

    if (matchingMapping) {
      navigate(matchingMapping.route);
    } else {
      
      console.log('No match found.');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <>
      <input
        id="searchBar"
        className="w-[845px] h-[35px] border p-3 outline-0 text-gray_text placeholder-gray_text text-[12px] font-['inter'] font-bold uppercase"
        placeholder="ENTER KEYWORDS HERE ..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <button
        onClick={handleSearch}
        className="text-center w-6 h-6 ml-1 hover:bg-gray-300 rounded-sm"
      >
        <i className="fa-solid fa-magnifying-glass text-xs"></i>
      </button>
    </>
  );
}
