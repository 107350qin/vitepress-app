import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "6点下班",
  base: '/vitepress-app/',
  description: "6点下班，给生活腾一点时间",
  head: [['link', { rel: 'icon', href: '/vitepress-app/logo.svg' }]],
  themeConfig: {
    logo: '/logo.svg',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '权益', link: '/权益/劳动法条例' },
      { text: '吐槽', link: '/吐槽/996' },
      { text: '突围', link: '/突围/远程' }
    ],

    sidebar: [
      {
        text: '简介',
        items: [
          { text: '关于我', link: '/简介/关于我' },
          { text: '关于网站', link: '/简介/关于网站' },
        ]
      },
      {
        text: '权益',
        items: [
          { text: '劳动法条例', link: '/权益/劳动法条例' },
          { text: '仲裁流程', link: '/权益/仲裁流程' },
          { text: '起诉流程', link: '/权益/起诉流程' }
        ]
      },
      {
        text: '吐槽',
        items: [
          { text: '996', link: '/吐槽/996' },
          { text: 'KPI', link: '/吐槽/KPI' },
          { text: '内卷', link: '/吐槽/内卷' },
          { text: '裁员', link: '/吐槽/裁员' },
          { text: '外包', link: '/吐槽/外包' },
        ]
      },
      {
        text: '突围',
        items: [
          { text: '远程', link: '/突围/远程' },
          { text: '创业', link: '/突围/创业' },
          { text: '独立开发', link: '/突围/独立开发' },
          { text: '出海', link: '/突围/出海' },
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/107350qin/vitepress-app' }
    ]
  }
})
