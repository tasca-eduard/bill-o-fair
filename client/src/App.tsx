import React from 'react';
import '../src/sass/main.scss';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter, Switch, Route, RouteComponentProps } from 'react-router-dom';
import Navigation from './components/navigation/Navigation';
import Bills from './pages/bills/Bills';

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
                        <Navigation />
                        <div className="container">
                            <Route 
                                path="/bills"
                                render={(props: RouteComponentProps) => 
                                    <Bills {...props} />
                                }
                            />
                            <Route path="/graphs">
                                <span>Graphs</span>
                            </Route>
                            <Route path="/overview">
                                <span>Overview</span>
                            </Route>
                        </div>
                    </main>
                </BrowserRouter>
            </div>
        )
    }
}

export default App;
