import React from 'react';
import styled from 'styled-components';
import {ExampleComponent} from '../components';

const RootLayoutContainer = styled.div`
    width: calc(100% - 80px);
    height: calc(100% - 80px);
    margin: 40px;
    overflow: hidden;
`;

const Root = () => {
    return (
        <RootLayoutContainer>
            <ExampleComponent />
        </RootLayoutContainer>
    );
};

export default Root;
