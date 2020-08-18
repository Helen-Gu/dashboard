const menuList = [
	{
		title: 'Home',
		key: '/home',
		icon: 'home',
		isPublic: true,
	},
	{
		title: 'Products',
		key: '/products',
		icon: 'appstore',
		children: [
			{
				title: 'Category',
				key: '/category',
				icon: 'bars',
			},
			{
				title: 'Product',
				key: '/product',
				icon: 'tool',
			},
		],
	},
	{
		title: 'User',
		key: '/user',
		icon: 'user',
	},
	{
		title: 'Role',
		key: '/role',
		icon: 'safety',
	},
	{
		title: 'Charts',
		key: '/charts',
		icon: 'area-chart',
		children: [
			{
				title: 'Bar-chart',
				key: '/charts/bar',
				icon: 'bar-chart',
			},
			{
				title: 'line-chart',
				key: '/charts/line',
				icon: 'line-chart',
			},
			{
				title: 'Pie-chart',
				key: '/charts/pie',
				icon: 'pie-chart',
			},
		],
	},
];
export default menuList;
