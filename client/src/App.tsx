import React from 'react';
import '../src/sass/main.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navigation from './components/navigation/Navigation';

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
                        <section className="screen-structure">
                            <Navigation />
                            <Route path="/bills">
                                <span>Bills</span>
                            </Route>
                            <Route path="/graphs">
                                <span>Graphs</span>
                            </Route>
                            <Route path="/overview">
                                <span>Overview</span>
                            </Route>
                        </section>
                    </main>
                </BrowserRouter>
            </div>
        )
    }
}

export default App;
