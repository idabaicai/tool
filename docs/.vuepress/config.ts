import { defineUserConfig } from 'vuepress';
import type { DefaultThemeOptions } from 'vuepress';

export default defineUserConfig<DefaultThemeOptions>({
  lang: 'en-US',
  title: '前路漫漫 唯键作伴',
  description: '竹杖芒鞋轻胜马，一蓑烟雨任平生。',
  theme: '@vuepress/theme-default',
  // plugins: [
  //   [
  //     '@vuepress/plugin-search',
  //   ],
  // ],
  themeConfig: {
    logo: 'https://vuejs.org/images/logo.png',
    repo: 'idabaicai',
    locales: {
      '/': {
        home: '/',
        navbar: [{ text: '指南', link: '/guide' }],
        sidebar: [
          {
            text: '计算机基础',
            link: '/basic',
            children: [
              {
                text: 'Linux',
                link: '/basic/linux',
              },
              {
                text: '报告',
                link: '/basic/report',
              },
            ],
          },
          {
            text: '大前端',
            link: '/web-pro',
            children: [
              {
                text: 'web3.0',
                link: '/web-pro/web3',
              },
              {
                text: '学无止境',
                link: '/web-pro/learn',
              },
              {
                text: '设计',
                link: '/web-pro/design',
              },
            ],
          },
          {
            text: '阅读',
            link: '/read',
            children: [
              {
                text: '纳瓦尔推荐读物',
                link: '/read/naval',
              },
            ],
          },
          {
            text: '理财',
            link: '/money',
            children: [
              {
                text: '时间的朋友',
                link: '/money/fot', // friend of time
              },
              {
                text: '基金',
                link: '/money/fund',
              },
            ],
          },
          {
            text: '留在青山在',
            link: '/health',
            children: [
              {
                text: 'office',
                link: '/health/office',
              },
              {
                text: '自由时间',
                link: '/health/free',
              },
            ],
          },
        ],
      },
    },
  },
});
