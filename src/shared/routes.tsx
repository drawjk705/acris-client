import { PropertyCardContainer } from '../client/components/PropertyCard/PropertyCardContainer';
import { AddressSearch } from '../client/components/SearchHeader/AddressSearch/AddressSearch';

export interface IRoute {
    path: string;
    exact?: boolean;
    component: React.FC;
}

export const routes: Array<IRoute> = [
    {
        path: '/',
        exact: true,
        component: AddressSearch,
    },
    {
        path: '/property',
        exact: true,
        component: PropertyCardContainer,
    },
];
