// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Julie Chandler',
  tagline: 'Senior Technical Writer & Knowledge Systems Specialist — documentation for complex systems, from procedural guides to specs to information architecture.',
  favicon: 'img/favicon.svg',

  stylesheets: [
    {
      href: 'https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600;700&display=swap',
      type: 'text/css',
    },
  ],

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // v4's forward-compat mode drops support for the legacy ":::info Title"
  // admonition syntax (title text inline after the type keyword) by default.
  // All work-sample docs use that syntax, so re-enable it explicitly rather
  // than rewriting every doc to the new :::info[Title] directive form.
  markdown: {
    mdx1Compat: {
      admonitions: true,
    },
  },

  // Set the production url of your site here
  url: 'https://chandlerpm.github.io',
  // This is a <username>.github.io user/org page, so it serves from the root.
  baseUrl: '/',

  // GitHub pages deployment config.
  organizationName: 'chandlerpm', // GitHub org/user name.
  projectName: 'chandlerpm.github.io', // Repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/social-card.jpg',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Julie Chandler',
        logo: {
          alt: 'Julie Chandler',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'workSamplesSidebar',
            position: 'left',
            label: 'Work Samples',
          },
          {to: '/about', label: 'About', position: 'left'},
          {
            href: 'https://github.com/chandlerpm',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Work Samples',
            items: [
              {
                label: 'Browse all',
                to: '/docs',
              },
            ],
          },
          {
            title: 'Contact',
            items: [
              {
                label: 'Email',
                href: 'mailto:chandlerpm@protonmail.com',
              },
              {
                label: 'LinkedIn',
                href: 'https://linkedin.com/in/jchandlerpm',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/chandlerpm',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Julie Chandler.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
