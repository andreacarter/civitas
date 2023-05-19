// assets
import {
    IconChartCircles,
    IconUsers,
    IconUserPlus,
    IconMap,
    IconGraph,
    IconReportAnalytics,
    IconFileDollar,
    IconHomeDollar
} from '@tabler/icons';

// constant
const icons = {
    IconChartCircles,
    IconUsers,
    IconUserPlus,
    IconMap,
    IconGraph,
    IconReportAnalytics,
    IconFileDollar,
    IconHomeDollar
};

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

const pages = {
    id: 'pages',
    type: 'group',
    children: [
        {
            id: 'organizations',
            title: 'Organizations',
            type: 'collapse',
            icon: icons.IconChartCircles,

            children: [
                {
                    id: 'engaged',
                    title: 'Engaged Organizations',
                    type: 'item',
                    url: '/organizations/engaged',
                    icon: icons.IconUsers
                },
                {
                    id: 'prospective',
                    title: 'Prospective Organizations',
                    type: 'item',
                    url: '/organizations/prospective',
                    icon: icons.IconUserPlus
                }
            ]
        },
        {
            id: 'tracking',
            title: 'CRA Tracking',
            type: 'collapse',
            icon: icons.IconGraph,

            children: [
                {
                    id: 'hours',
                    title: 'Employee Service Hours',
                    type: 'item',
                    url: '/tracking/hours',
                    icon: icons.IconReportAnalytics
                },
                {
                    id: 'investments',
                    title: 'Community Investments',
                    type: 'item',
                    url: '/tracking/investments',
                    icon: icons.IconFileDollar
                },
                {
                    id: 'lending',
                    title: 'Community Lending',
                    type: 'item',
                    url: '/tracking/lending',
                    icon: icons.IconHomeDollar
                }
            ]
        },
        {
            id: 'map',
            title: 'CRA Map',
            type: 'item',
            url: '/organizations/map',
            icon: icons.IconMap
        }
    ]
};

export default pages;
