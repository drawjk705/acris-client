import { Home } from './Pages/Home';
import { PropertyPreviewsPage } from './Pages/PropertyPreviewsPage';
import { PropertyResultPage } from './Pages/PropertyResultPage';

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
        component: PropertyPreviewsPage,
    },
    {
        path: '/property',
        exact: true,
        component: PropertyResultPage,
    },
];
