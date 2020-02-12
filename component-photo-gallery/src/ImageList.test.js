import React from 'react';
import { render } from '@testing-library/react';
import images from './data.js';
import ImageList from './ImageList';
import renderer from "react-test-renderer";

test('renders ImageList.js correctly', () => {
  const tree = renderer
  .create(<ImageList images={images} />)
  .toJSON();
  expect(tree).toMatchSnapshot();
});