import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));

// pages routing
const Engaged = Loadable(lazy(() => import('views/pages/organizations/Engaged')));
const Prospective = Loadable(lazy(() => import('views/pages/organizations/Prospective')));
const Map = Loadable(lazy(() => import('views/pages/organizations/Map')));
const Hours = Loadable(lazy(() => import('views/pages/tracking/Hours')));
const Donations = Loadable(lazy(() => import('views/pages/tracking/Donations')));
const Lending = Loadable(lazy(() => import('views/pages/tracking/Lending')));

// utilities routing
const Goals = Loadable(lazy(() => import('views/utilities/Goals')));
const Events = Loadable(lazy(() => import('views/utilities/Events')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: '/',
            element: <DashboardDefault />
        },
        {
            path: 'dashboard',
            children: [
                {
                    path: 'default',
                    element: <DashboardDefault />
                }
            ]
        },
        {
            path: 'organizations',
            children: [
                {
                    path: 'engaged',
                    element: <Engaged />
                }
            ]
        },
        {
            path: 'organizations',
            children: [
                {
                    path: 'prospective',
                    element: <Prospective />
                }
            ]
        },
        {
            path: 'organizations',
            children: [
                {
                    path: 'map',
                    element: <Map />
                }
            ]
        },
        {
            path: 'tracking',
            children: [
                {
                    path: 'hours',
                    element: <Hours />
                }
            ]
        },
        {
            path: 'tracking',
            children: [
                {
                    path: 'donations',
                    element: <Donations />
                }
            ]
        },
        {
            path: 'tracking',
            children: [
                {
                    path: 'lending',
                    element: <Lending />
                }
            ]
        },
        {
            path: 'utilities',
            children: [
                {
                    path: 'goals',
                    element: <Goals />
                }
            ]
        },
        {
            path: 'utilities',
            children: [
                {
                    path: 'events',
                    element: <Events />
                }
            ]
        }
    ]
};

export default MainRoutes;
