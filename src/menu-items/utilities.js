// assets
import { IconEdit, IconCalendarPlus } from '@tabler/icons';

// constant
const icons = {
    IconEdit,
    IconCalendarPlus
};

// ==============================|| UTILITIES MENU ITEMS ||============================== //

const utilities = {
    id: 'utilities',
    title: 'CRA Manager Utilities',
    type: 'group',
    children: [
        {
            id: 'goals',
            title: 'Create/Manage CRA Goals',
            type: 'item',
            url: '/utilities/goals',
            icon: icons.IconEdit,
            breadcrumbs: false
        },
        {
            id: 'events',
            title: 'Create/Manage Service Events',
            type: 'item',
            url: '/utilities/events',
            icon: icons.IconCalendarPlus,
            breadcrumbs: false
        }
    ]
};

export default utilities;
