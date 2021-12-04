import React from 'react';
//import ReactDom, { unmountComponentAtNode } from 'react-dom'; // don't use render from this guy
import TestLib, { fireEvent, render } from '@testing-library/react';

import App from './App';

type RenderResult = TestLib.RenderResult<typeof TestLib.queries, HTMLElement>;

it('app renders without crashing', () => {
  render(<App />);
});

