import { Router } from '@reach/router';
import Page from '../pages';

function AppRouter() {
    return (
        <Router>
            <Page path='/' />
        </Router>
    )
}

export default AppRouter;