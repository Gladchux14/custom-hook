import { useState, useEffect } from 'react';

const useDataFilter = (data) => {
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    if (data && Array.isArray(data)) {
      const result = data.filter(item => 
        item.bio && item.bio.toLowerCase().includes('female')
      );
      setFilteredData(result);
    } else {
      setFilteredData([]);
    }
  }, [data]);

  return filteredData;
};

export default useDataFilter;
