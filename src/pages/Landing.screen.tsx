import { useQuery, gql } from '@apollo/client';
import React from 'react';
import { Locations } from '../components/Locations'


export const LoadingScreen = () => {
  return (
    <div>
      <h2>My first Apollo app</h2>
      <Locations/>
    </div>
  );
}

export default LoadingScreen;