import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test ("round the bases", ()=> {
  const {findAllByDisplayValue} = (<App/>)
})

test ( 'we found fouls', ()=> {
  const {getByText} = ('foulsw')
})