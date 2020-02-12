import React from 'react';
import { render } from '@testing-library/react';
import images from './data.js';
import ImageItem from './ImageItem.js';
import renderer from "react-test-renderer";

test('renders ImageItem.js correctly', () => {
  const tree = renderer
  .create(<ImageItem horned={images} />)
  .toJSON();
  expect(tree).toMatchSnapshot();
});