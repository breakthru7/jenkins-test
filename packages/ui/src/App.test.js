import React from 'react';
import ReactDOM from 'react-dom';
import {App , helo, testcallback} from './App';

/* test render 
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
*/

test('expect callback output' , done =>{
  function callback(data){
    expect(data).toBe("appended test to callback");

    done();
  }

  testcallback("test" , callback);
})
