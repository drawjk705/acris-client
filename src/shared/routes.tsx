import { SearchBar } from '../client/pages/Search/SearchBar/SearchBar';
import { PropertyCardContainer } from '../client/components/PropertyCard/PropertyCardContainer';

export interface IRoute {
    path: string;
    exact?: boolean;
    component: React.FC;
}

export const routes: Array<IRoute> = [
    {
        path: '/',
        exact: true,
        component: SearchBar,
    },
    {
        path: '/property',
        exact: true,
        component: PropertyCardContainer,
    },
];
