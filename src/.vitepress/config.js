import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'en-US',
  title: 'Wiki.js',
  description: 'The most powerful and extensible open source Wiki software.',

  lastUpdated: true,
  ignoreDeadLinks: true,

  markdown: {
    // lineNumbers: true
  },

  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }]
  ],

  themeConfig: {
    logo: '/logo.svg',
    nav: [
      { text: 'Docs', link: '/docs/', activeMatch: '/docs/' },
      { text: 'News', link: 'https://blog.js.wiki/' },
      {
        text: 'Sponsor',
        activeMatch: '/about/',
        items: [
          {
            text: 'Become a Sponsor',
            link: '/about/sponsor'
          },
          {
            text: 'Backers',
            link: '/about/backers'
          },
          {
            text: 'Developers',
            link: '/about/devs'
          },
          {
            text: 'Translators',
            link: '/about/translators'
          }
        ]
      },
      {
        text: 'Support',
        items: [
          {
            text: 'Questions / Help',
            link: 'https://github.com/Requarks/wiki/discussions'
          },
          {
            text: 'Report a Bug',
            link: 'https://github.com/Requarks/wiki/discussions/categories/error-bug-report'
          },
          {
            text: 'Suggest a New Feature',
            link: 'https://requarks.canny.io/wiki'
          },
          {
            text: 'Report a security vulnerability',
            link: 'https://github.com/Requarks/wiki/security/policy'
          }
        ]
      },
      {
        text: '3.0.0-alpha.1',
        items: [
          {
            text: 'Changelog',
            link: 'https://github.com/requarks/wiki/releases'
          },
          {
            text: 'How to upgrade',
            link: '/docs/upgrade'
          },
          {
            text: 'Contributing',
            link: 'https://github.com/requarks/wiki/blob/main/.github/CONTRIBUTING.md'
          },
          {
            text: '2.x Docs',
            link: 'https://docs.requarks.io'
          },
          {
            text: '1.x Docs',
            link: 'https://docs-legacy.requarks.io/wiki'
          },
        ],
      },
    ],

    sidebar: {
      '/docs/': [
        {
          items: [
            { text: 'Getting Started', link: '/docs/' },
            { text: 'Prerequisites', link: '/docs/prerequisites' },
            { text: 'Install', link: '/docs/install' },
            { text: 'Config Reference', link: '/docs/config' },
            { text: 'Upgrade', link: '/docs/upgrade' }
          ]
        },
        {
          text: 'User Guide',
          collapsible: true,
          items: [
            { text: 'Basics', link: '/docs/guide/basics' },
            { text: 'Pages', link: '/docs/guide/pages' },
            { text: 'Writing', link: '/docs/guide/writing' },
            { text: 'Media Assets', link: '/docs/guide/assets' }
          ]
        },
        {
          text: 'Administration',
          collapsible: true,
          items: [
            { text: 'Site Management', link: '/docs/admin/sites' },
            { text: 'Analytics', link: '/docs/admin/analytics' },
            { text: 'Approvals', link: '/docs/admin/approvals' },
            { text: 'Authentication', link: '/docs/admin/auth' },
            { text: 'Comments', link: '/docs/admin/comments' },
            { text: 'Editors', link: '/docs/admin/editors' },
            { text: 'Localisation', link: '/docs/admin/localisation' },
            { text: 'Navigation', link: '/docs/admin/nav' },
            { text: 'Storage', link: '/docs/admin/storage' },
            { text: 'Theme', link: '/docs/admin/theme' },
            { text: 'Users, Groups & Permissions', link: '/docs/admin/groups' },
          ]
        },
        {
          text: 'System',
          collapsible: true,
          // collapsed: true,
          items: [
            { text: 'Auditing', link: '/docs/system/auditing' },
            { text: 'Extensions', link: '/docs/system/extensions' },
            { text: 'Mail', link: '/docs/system/mail' },
            { text: 'Security', link: '/docs/system/security' },
            { text: 'Utilities', link: '/docs/system/utilities' },
            { text: 'Webhooks', link: '/docs/system/webhooks' },
          ]
        },
        {
          text: 'Developers',
          collapsible: true,
          // collapsed: true,
          items: [
            { text: 'Environment', link: '/docs/dev/environment' },
            { text: 'GraphQL API', link: '/docs/dev/api' },
            { text: 'Modules', link: '/docs/dev/modules' },
            { text: 'Translations', link: '/docs/dev/translations' }
          ]
        }
      ],
      '/about/': [
        {
          items: [
            { text: 'Become a Sponsor', link: '/about/sponsor' },
            { text: 'Backers', link: '/about/backers' },
            { text: 'Developers', link: '/about/developers' },
            { text: 'Translators', link: '/about/translators' },
            { text: 'Special Thanks', link: '/about/special-thanks' }
          ]
        }
      ]
    },

    editLink: {
      pattern: 'https://github.com/requarks/wiki-site/edit/main/src/:path',
      text: 'Suggest changes to this page'
    },

    socialLinks: [
      { icon: 'twitter', link: 'https://twitter.com/requarks' },
      { icon: 'discord', link: 'https://discord.gg/rcxt9QS2jd' },
      { icon: 'slack', link: 'https://wiki.requarks.io/slack' },
      { icon: 'github', link: 'https://github.com/requarks/wiki' }
    ],

    footer: {
      message: 'Released under the AGPLv3 License.',
      copyright: `Copyright © 2016-${new Date().getFullYear()} Nicolas Giard & Wiki.js Contributors`
    }
  }
})
