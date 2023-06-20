import React from 'react';

import renderer from 'react-test-renderer';

import { BrowserRouter } from 'react-router-dom';

import { Provider } from "react-redux";

import store from "redux/store";

import TourDetailsPage from '../components/pages/Home';

describe('Tests Tour Details component', () => {
  it('Should render Tour Details Page Component', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
        <BrowserRouter>
          <TourDetailsPage />
        </BrowserRouter>
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
