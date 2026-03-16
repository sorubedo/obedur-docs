// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://sorubedo.github.io',
	base: '/obedur-docs',
	integrations: [
		starlight({
			title: 'obedur-os Docs',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/sorubedo/obedur-os' }],
			sidebar: [
				{
					label: '开始使用',
					items: [
						{ label: '简介', slug: 'index' },
						{ label: '安装指南', slug: 'getting-started' },
						{ label: '初始化指南', slug: 'initialization' },
						{ label: '使用技巧', slug: 'tips' },
					],
				},
				{
					label: '系统特性',
					items: [
						{ label: 'Niri 窗口管理器', slug: 'features/niri' },
					],
				},
				{
					label: '常见问题',
					slug: 'faq',
				},
				{
					label: '参考',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
