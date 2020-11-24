import React from 'react';
import PhotoGet from './endPoints/PhotoGet';
import PhotoPost from './endPoints/PhotoPost';
import TokenPost from './endPoints/TokenPost';
import UserPost from './endPoints/UserPost';

const Api = () => {
  return (
    <>
      <UserPost />
      <TokenPost />
      <PhotoPost />
      <PhotoGet />
    </>
  );
};

export default Api;
