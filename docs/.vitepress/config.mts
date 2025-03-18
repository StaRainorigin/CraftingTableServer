import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "CraftingTableServer",
  description: "服务器搭建指南",
  base: process.env.GITHUB_ACTIONS ? '/CraftingTableServer/' : '/',  // 判断是不是部署在 Github
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
