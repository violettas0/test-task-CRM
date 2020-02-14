import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from "./store";

import App from "./components/app";
import ErrorBoundary from "./components/error-boundary";
import CRMService from "./services/crm-service";
import { CRMServiceProvider } from './components/crm-service-context'

const crmService = new CRMService();

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundary>
            <CRMServiceProvider value={crmService}>
                <App/>
            </CRMServiceProvider>
        </ErrorBoundary>
    </Provider>, document.getElementById('root')
);