import { defineConfig } from 'vitepress'

// 判断是不是部署在 Github
const isGitHub = typeof window !== 'undefined' && window.location.hostname.includes('github.io');

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "CraftingTableServer",
  description: "服务器搭建指南",
  base: isGitHub ? '/CraftingTableServer/' : '/', // 如果是部署在Github上, 则将 base 改为 /CraftingTableServer/
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' },
          
        ]
      },
      {
        text: 'Examoles2',
        items: [
          { text: 'Test page', link: '/api-hello'}
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/StaRainorigin/CraftingTableServer' }
    ]
  }
})
