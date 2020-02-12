import React from 'react';
// import { render } from '@testing-library/react';
import ImageItem from './ImageItem';
import renderer from "react-test-renderer";

test('renders ImageItem.js correctly', () => {
  const tree = renderer
  .create(<ImageItem />)
  .toJSON();
  expect(tree).toMatchSnapshot();
});