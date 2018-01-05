import React from 'react';
import renderer from 'react-test-renderer';

import { Component, styles, Container } from '../Container';

it('renders successfully', () => {
  const rendered = renderer.create(<Container />).toJSON();
  expect(rendered).toBeTruthy();
});

it('styles is an object', () => {
  expect(typeof styles).toBe('object');
});
