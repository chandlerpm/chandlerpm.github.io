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
        items: [
          {to: '/', label: 'Work', position: 'left'},
          {
            type: 'docSidebar',
            sidebarId: 'workSamplesSidebar',
            position: 'left',
            label: 'Writing samples',
          },
          {to: '/about', label: 'About', position: 'left'},
          {
            href: 'mailto:chandlerpm@protonmail.com',
            label: 'Contact',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Work',
            items: [
              {
                label: 'Writing samples',
                to: '/docs',
              },
              {
                label: 'About',
                to: '/about',
              },
            ],
          },
          {
            title: 'Elsewhere',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/chandlerpm',
              },
              {
                label: 'LinkedIn',
                href: 'https://linkedin.com/in/jchandlerpm',
              },
            ],
          },
          {
            title: 'Contact',
            items: [
              {
                label: 'chandlerpm@protonmail.com',
                href: 'mailto:chandlerpm@protonmail.com',
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
