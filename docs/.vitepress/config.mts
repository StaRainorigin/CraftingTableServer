import { defineConfig } from 'vitepress'
import { groupIconMdPlugin, groupIconVitePlugin } from 'vitepress-plugin-group-icons'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "CraftingTableServer",
  description: "服务器搭建指南",
  base: process.env.GITHUB_ACTIONS ? '/CraftingTableServer/' : '/',  // 判断是不是部署在 Github

  markdown: {
    config(md) {
      md.use(groupIconMdPlugin)
    },
  },
  vite: {
    plugins: [
      groupIconVitePlugin()
    ],
  },

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Documents', link: '/阅读指南' }
    ],

    sidebar: [
      {
        text: '准备工作',
        items: [
          { text: '配置Java环境', link: '/environment' },
          { text: '下载server core', link: '/download-core' },
          
        ]
      },
      {
        text: '插件服核心',
        items: [
          { text: 'Paper', link: '/paper'},
          { text: 'Purpur', link: '/purpur' },
          { text: 'Folia', link: '/folia'},
        ]
      },
      {
        text: '基本搭建',
        items: [
          { text: '阅读指南', link: '/阅读指南' },
          { text: '必要环境', link: '/必要环境' },
          { text: '快速开始', link: '/快速开始' },
          { text: '概念介绍', link: '/概念介绍' },
          { text: '网络连接', link: '/网络连接' },
        ]
      },
      {
        text: '插件服搭建',
        items: [
          { text: '开启一个插件服', link: '/开启一个插件服'},
          { text: '插件服资源汇总', link: '/插件服资源汇总'}
        ]
      },
      {
        text: '模组服搭建',
        items: [
          { text: '开启一个模组服', link: '/开启一个模组服'},
          { text: '模组服资源汇总', link: '/模组服资源汇总'}
        ]
      },
      {
        text: '模组服核心',
        items: [
          { text: 'Forge/NeoForge', link: '/forge'},
          { text: 'Fabric', link: '/fabric' },
          { text: 'Arclight/Ketting', link: '/arclight-ketting' },
        ]
      },
      {
        text: '基岩版核心',
        items: [
          { text: 'BDS(Bedrock Dedicated Server)', link: '/official-bedrock'},
          { text: 'PocketMine-MP (PMMP)', link: '/pmmp' },
        ]
      },
      {
        text: '代理服核心',
        items: [
          { text: 'Velocity', link: '/velocity'},
          { text: 'BungeeCord/Waterfall', link: '/bungeecord-waterfall'},
        ]
      },
      {
        text: '跨平台',
        items: [
          { text: 'Linux -> Windows', link: '/windows'},
        ]
      },
      {
        text: '进阶',
        items: [
          { text: '内网穿透', link: '/port-forward'},
          { text: '自定义域名', link: '/domain'},
          { text: '添加MCDR', link: '/mcdr'},
          { text: '间歇泉(Geyser)', link: '/geyser'},
          { text: '备份', link: '/backup'},
          { text: 'MCSM面板服', link: '/mcsm'},
          { text: 'Docker搭建', link: '/docker'},
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/StaRainorigin/CraftingTableServer' }
    ]
  }
})
