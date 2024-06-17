import React from 'react';
import useDataFilter from '/hooks.jsx';
import CelebrityItem from '../components/celebrityItem';

const celebrities = [
  { name: 'Angela Merkel', industry: 'Politics', bio: 'First female Chancellor of Germany.' },
  { name: 'Oprah Winfrey', industry: 'Entertainment', bio: 'American talk show host, television producer, actress, author, and philanthropist.' },
  { name: 'Albert Einstein', industry: 'Intellectuals', bio: 'Theoretical physicist who developed the theory of relativity.' },
  { name: 'Serena Williams', industry: 'Sports', bio: 'American professional tennis player and former world No. 1 in women\'s single tennis.' },
  { name: 'Malala Yousafzai', industry: 'Intellectuals', bio: 'Female education activist and the youngest Nobel Prize laureate.' },
];


const CelebrityList = () => {
  const filteredCelebrities = useDataFilter(celebrities);

  return (
    <div>
      <h1>Female Celebrities</h1>
      {filteredCelebrities.length > 0 ? (
        <ul>
          {filteredCelebrities.map((celeb, index) => (
            <CelebrityItem key={index} celebrity={celeb}/>
          ))}
        </ul>
      ) : (
        <p>No female celebrities found.</p>
      )}
    </div>
  );
};

export default CelebrityList;
