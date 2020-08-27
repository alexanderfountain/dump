import React from 'react';
import { Provider } from 'react-redux';
import { createStore as reduxCreateStore } from 'redux';
import rootReducer from '.';

import { Location } from '@reach/router';

import SiteWrapper from './SiteWrapper';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const createStore = () => reduxCreateStore(rootReducer);

const THEME = createMuiTheme({
    typography: {
        "fontFamily": "\"system-ui\", \"-apple-system\", \"BlinkMacSystemFont\", \"Helvetica Neue\", \"Lucida Grande\", \"Segoe UI\", sans-serif",
        fontSize: 16,
        "fontWeightLight": 300,
        "fontWeightRegular": 400,
        "fontWeightMedium": 500
    },
    palette: {
        primary: {
            main: '#2979FF'
        },
        secondary: {
            main: '#3F51B5'
        }
    },
    overrides: {
        MuiPickersCalendarHeader: {
            transitionContainer: {
                height: '1.7rem'
            }
        },
    }
});

export default ({ element }) => (
    <Provider store={createStore()}>
        <MuiThemeProvider theme={THEME}>
            <Location>
                {
                    locationProps => <SiteWrapper
                        {...locationProps}
                        element={element}
                    />
                }
            </Location>
        </MuiThemeProvider>
    </Provider>
);