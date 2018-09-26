const siteArray = [
    //Ticketing Sites =============
    {
        siteName: 'Compass',
        siteURL: '',
        category: 'ticketing'
    },
    {
        siteName: 'Ticket Watcher',
        siteURL: '',
        category: 'ticketing'
    },
    {
        siteName: 'Ticket Archive',
        siteURL: '',
        category: 'ticketing'
    },
    {
        siteName: 'Tickets',
        siteURL: '',
        category: 'ticketing'
    },
    //Inventory Sites ==============
    {
        siteName: 'Assets',
        siteURL: '',
        category: 'inventory'
    },
    {
        siteName: 'CyberArk',
        siteURL: '',
        category: 'inventory'
    },
    {
        siteName: 'EM7 Dashboard',
        siteURL: '',
        category: 'inventory'
    },
    {
        siteName: 'WASP',
        siteURL: '',
        category: 'inventory'
    },
    {
        siteName: 'Hardware Tracking',
        siteURL: '',
        category: 'inventory'
    },
    //Projects/MOP Sites =============
    {
        siteName: 'CM MOPS',
        siteURL: '',
        category: 'projects'
    },
    {
        siteName: 'Customer MOPS',
        siteURL: '',
        category: 'projects'
    },
    {
        siteName: 'Trello',
        siteURL: '',
        category: 'projects'
    },
    {
        siteName: 'Project Insight',
        siteURL: '',
        category: 'projects'
    },
    {
        siteName: 'Cust. CrossConnect Form',
        siteURL: '',
        category: 'projects'
    },
    {
        siteName: 'CrossConnect Express Form',
        siteURL: '',
        category: 'projects'
    },
    //Personal Sites ================
    {
        siteName: 'Expense Reporting',
        siteURL: '',
        category: 'personal'
    },
    {
        siteName: 'Paycom',
        siteURL: '',
        category: 'personal'
    },
    {
        siteName: 'Signature Tool',
        siteURL: '',
        category: 'personal'
    },
    {
        siteName: 'Outlook Web Access',
        siteURL: '',
        category: 'personal'
    },
    {
        siteName: 'Cisco Phone Management',
        siteURL: '',
        category: 'personal'
    },
    //Other Tools =========================
    {
        siteName: 'Amber Light Notice',
        siteURL: '',
        category: 'otherTools'
    },
    {
        siteName: 'Cardboard Sweep',
        siteURL: '',
        category: 'otherTools'
    },
    {
        siteName: 'Cust. Cab Locations',
        siteURL: '',
        category: 'otherTools'
    },
    {
        siteName: 'Shift Handoff',
        siteURL: '',
        category: 'otherTools'
    },
    {
        siteName: 'Utility',
        siteURL: '',
        category: 'otherTools'
    },
    {
        siteName: 'Webex',
        siteURL: '',
        category: 'otherTools'
    },
    {
        siteName: 'Customer Lookup',
        siteURL: '',
        category: 'otherTools'
    },
    {
        siteName: 'IP Block Tool',
        siteURL: '',
        category: 'otherTools'
    },
    //Wiki Sites ===========================
    {
        siteName: 'Main Page',
        siteURL: '',
        category: 'wiki'
    },
    {
        siteName: 'CLT DC Stats',
        siteURL: '',
        category: 'wiki'
    },
    {
        siteName: 'CL2 DC Stats',
        siteURL: '',
        category: 'wiki'
    },
    {
        siteName: 'CL4 DC Stats',
        siteURL: '',
        category: 'wiki'
    },
    {
        siteName: 'Phone List',
        siteURL: '',
        category: 'wiki'
    },
    {
        siteName: 'Vendors',
        siteURL: '',
        category: 'wiki'
    },
    //Facility Sites ========================
    {
        siteName: 'CLT JACE',
        siteURL: '',
        category: 'facility'
    },
    {
        siteName: 'CL2 Temps',
        siteURL: '',
        category: 'facility'
    },
    {
        siteName: 'CL4 JACE',
        siteURL: '',
        category: 'facility'
    },
    {
        siteName: 'CL4 NOC RTU',
        siteURL: '',
        category: 'facility'
    },
    {
        siteName: 'Power Order',
        siteURL: '',
        category: 'facility'
    },
    {
        siteName: 'Power Reporting',
        siteURL: '',
        category: 'facility'
    },
    //Tape Rotation Sites ======================
    {
        siteName: 'Belk',
        siteURL: '',
        category: 'tapeRotation'
    },
    {
        siteName: 'CBC',
        siteURL: '',
        category: 'tapeRotation'
    },
    {
        siteName: 'ICA',
        siteURL: '',
        category: 'tapeRotation'
    },
    {
        siteName: 'Skanska - Alan',
        siteURL: '',
        category: 'tapeRotation'
    },
    {
        siteName: 'Skanska - Art',
        siteURL: '',
        category: 'tapeRotation'
    },
    {
        siteName: 'Sompo',
        siteURL: '',
        category: 'tapeRotation'
    },
    {
        siteName: 'SecureSync',
        siteURL: '',
        category: 'tapeRotation'
    },
    //Sharepoint Sites =============================
    {
        siteName: 'CLT',
        siteURL: '',
        category: 'sharepoint'
    },
    {
        siteName: 'CL2',
        siteURL: '',
        category: 'sharepoint'
    },
    {
        siteName: 'CL4',
        siteURL: '',
        category: 'sharepoint'
    },
    //Purchasing Sites ==============================
    {
        siteName: 'Purchasing Wiki',
        siteURL: '',
        category: 'purchasing'
    },
    {
        siteName: 'Install Supply Checklist',
        siteURL: '',
        category: 'purchasing'
    },
    {
        siteName: 'Office Supply Checklist',
        siteURL: '',
        category: 'purchasing'
    },
    {
        siteName: 'ReQlogic',
        siteURL: '',
        category: 'purchasing'
    },
    {
        siteName: 'Staples',
        siteURL: '',
        category: 'purchasing'
    },
    //Management Sites ================================
    {
        siteName: 'Ascent',
        siteURL: '',
        category: 'management'
    },
    {
        siteName: 'Netsuite',
        siteURL: '',
        category: 'management'
    },
    {
        siteName: 'SEI Portal',
        siteURL: '',
        category: 'management'
    },
    //Training Sites ===================================
    {
        siteName: 'Udemy',
        siteURL: '',
        category: 'training'
    },
    {
        siteName: 'Schneider Energy University',
        siteURL: '',
        category: 'training'
    }
];