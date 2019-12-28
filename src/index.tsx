// index.tsx
import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { ExampleFeature } from './features';

const AppContainer = styled.div`
    width: calc(100% - 80px);
    height: calc(100% - 80px);
    margin: 40px;
    overflow: hidden;
`;

const App = () => {
    return (
        <AppContainer>
            <ExampleFeature />
        </AppContainer >)
};

ReactDOM.render(<App />, document.getElementById('root'));
