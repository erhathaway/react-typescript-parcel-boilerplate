import React from 'react';
import ExampleComponent from './index';
import renderer from 'react-test-renderer';

describe('ExampleComponent', () => {
    it('renders correctly', () => {
        const tree = renderer.create(<ExampleComponent />).toJSON();
        expect(tree).toMatchInlineSnapshot(`
            <div
              className="sc-bdVaJa fYXGIz"
              id="example-feature-animation"
              onClick={[Function]}
            >
              My State is: 
              TRUE
            </div>
        `);
    });
});
