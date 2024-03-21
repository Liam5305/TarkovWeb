import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DisplayQuestAPI = () => {
  const [barters, setBarters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post('https://api.tarkov.dev/graphql', {
          query: `
            query GetBarters($lang: LanguageCode, $limit: Int, $offset: Int) {
              barters(lang: $lang, limit: $limit, offset: $offset) {
                id
                level
                taskUnlock {
                  id
                  name
                }
                requiredItems {
                  item {
                    id
                    name
                  }
                  quantity
                }
              }
            }
          `,
          variables: {
            lang: 'en', // Provide your language code here
            limit: 10, // Provide the limit of barters to fetch
            offset: 0 // Provide the offset if needed
          }
        });

        setBarters(response.data.data.barters);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Make sure to pass an empty dependency array to useEffect to run it only once

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Barters</h2>
      <ul>
        {barters?.map(barter => (
          <li key={barter.id}>
            <h3>Barter ID: {barter.id}</h3>
            <p>Level: {barter.level}</p>
            <p>Task Unlock: {barter.taskUnlock ? barter.taskUnlock.name : "None"}</p>
            <h4>Required Items:</h4>
            <ul>
              {barter.requiredItems.map(requiredItem => (
                <li key={requiredItem.item.id}>
                  {requiredItem.item.name} - Quantity: {requiredItem.quantity}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DisplayQuestAPI;
