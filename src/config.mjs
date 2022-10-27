export const SITE = {
	name: 'One Up Digital',

	origin: 'https://astrowind.vercel.app',
	basePathname: '/',

	title: 'One Up Digital',
	description: 'One Up Digital',

	googleAnalyticsId: false, // or "G-XXXXXXXXXX",
	googleSiteVerificationId: '',
};

export const BLOG = {
	disabled: false,
	postsPerPage: 4,

	blog: {
		disabled: false,
		pathname: 'blog', // blog main path, you can change this to "articles" (/articles)
	},

	post: {
		disabled: false,
		pathname: '', // empty for /some-post, value for /pathname/some-post 
	},

	category: {
		disabled: false,
		pathname: 'category', // set empty to change from /category/some-category to /some-category
	},

	tag: {
		disabled: true,
		pathname: 'tag', // set empty to change from /tag/some-tag to /some-tag
	},
};
