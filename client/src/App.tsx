import React from 'react';
import '../src/sass/main.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Invoices from './pages/invoices/Invoices';

interface Props {

}

interface State {

}

class App extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        return (
            <div className="app">
                <BrowserRouter>
                    <main className="main-component">
                        <Switch>
                            <Route path="/" exact>
                                <Invoices />
                            </Route>
                        </Switch>
                    </main>
                </BrowserRouter>
            </div>
        )
    }
}

export default App;
