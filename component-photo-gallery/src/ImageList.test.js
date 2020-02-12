import React from 'react';
// import { render } from '@testing-library/react';
import ImageList from './ImageList';
import renderer from "react-test-renderer";

test('renders ImageList.js correctly', () => {
  const tree = renderer
  .create(<ImageList />)
  .toJSON();
  expect(tree).toMatchSnapshot();
});