import { SearchBar } from './pages/Search/SearchBar/SearchBar';
import { PropertyResultContainer } from './pages/Results/PropertyResult/PropertyResultContainer';

export type RouteProps = {
    path: string;
    exact?: boolean;
    component: React.FC;
};

export const Routes: { [key: string]: RouteProps } = {
    Home: {
        path: '/',
        exact: true,
        component: SearchBar,
    },
    PropertyResult: {
        path: '/property',
        exact: true,
        component: PropertyResultContainer,
    },
};
