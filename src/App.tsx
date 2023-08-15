import React from 'react';

import { NavigationRouter } from 'router';
import { StoreProvider } from 'stores/initStore';

// test

export const App = () => {
    return (
        <StoreProvider>
            <NavigationRouter />
        </StoreProvider>
    );
};
