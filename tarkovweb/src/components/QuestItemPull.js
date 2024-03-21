import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box } from '@mui/material';
import { flexbox } from '@mui/system';

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
            lang: 'en',
            limit: 10,
            offset: 0
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
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className='QuestItemBox'>
        <Box
          height={'100%'}
          width={'100%'}
          my={1}
          display={'flex'}
          alignItems={'left'}
          gap={7}
          p={1}
          mx={0.2}
          float={'left'}
          flexDirection={"column"}
          //flex-flow={"column wrap"}
          flexWrap={'nowrap'}
          list-style={'none'}
          sx={{border: '2px solid grey'}}
          >
        {barters?.map(barter => (
              <li key={barter.id}>
                <h3>Barter ID: {barter.id}</h3>
                <p>Level: {barter.level}</p>
                <p>Task Unlock: {barter.taskUnlock ? barter.taskUnlock.name : "None"}</p>
                <h4>Required Items:</h4>
                  {barter.requiredItems.map(requiredItem => (
                    <li key={requiredItem.item.id}>
                      {requiredItem.item.name} - Quantity: {requiredItem.quantity}
                    </li>
                  ))}
              </li>
        ))}
        </Box>
        </div>
    </div>
  );
};

export default DisplayQuestAPI;
