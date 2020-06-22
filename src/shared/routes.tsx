import { SearchBar } from '../client/pages/Search/SearchBar/SearchBar';
import { PropertyCardContainer } from '../client/components/PropertyCard/PropertyCardContainer';

export interface IRoute {
    path: string;
    exact?: boolean;
    component: React.FC;
}

export interface IRoutes {
    Home: IRoute;
    PropertyResult: IRoute;
}

export const Routes: IRoutes = {
    Home: {
        path: '/',
        exact: true,
        component: SearchBar,
    },
    PropertyResult: {
        path: '/property',
        exact: true,
        component: PropertyCardContainer,
    },
};
