import { PropertyPreviews } from './Pages/PropertyPreviews';
import { Home } from './Pages/Home';

export interface IRoute {
    path: string;
    exact?: boolean;
    component: React.FC<any>;
}

export const routes: Array<IRoute> = [
    {
        path: '/',
        exact: true,
        component: Home,
    },
    {
        path: '/property-previews',
        exact: true,
        component: PropertyPreviews,
    },
    {
        path: '/property/:id',
        exact: true,
        component: PropertyPreviews,
    },
];
