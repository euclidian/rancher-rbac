const Menu = [
    { header: "Apps" },
    {
        title: "User Management",
        group: "apps",
        icon: "face",
        name: "usermanagement",
        href: null
    },
    {
        title: "Online Stack",
        group: "apps",
        icon: "public",
        name: "rancherprojects",
        href: null
    },
    {
        title: "Stack",
        group: "apps",
        icon: "book",
        name: "stack",
        href: null
    },
    {
        title: "Stack Template",
        group: "apps",
        icon: "dashboard",
        name: "stack_template",
        href: null
    },
    {
        title: "Stack Config",
        group: "apps",
        icon: "settings",
        name: "stack_config",
        href: null
    }
];
// reorder menu
Menu.forEach(item => {
    if (item.items) {
        item.items.sort((x, y) => {
            let textA = x.title.toUpperCase();
            let textB = y.title.toUpperCase();
            return textA < textB ? -1 : textA > textB ? 1 : 0;
        });
    }
});

export default Menu;
