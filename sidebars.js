// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  sidebar: [
    {
      type: "category",
      label: "Get started",
      items: [{ type: "autogenerated", dirName: "get-started" }],
    },
    {
      type: "category",
      label: "Screenshot stability",
      items: [{ type: "autogenerated", dirName: "screenshot-stability" }],
    },
    {
      type: "category",
      label: "Integration Guides",
      link: { type: "generated-index" },
      items: [{ type: "autogenerated", dirName: "integrations" }],
    },
    {
      type: "category",
      label: "CI Guides",
      link: { type: "generated-index" },
      items: [{ type: "autogenerated", dirName: "ci-guides" }],
    },
    {
      type: "category",
      label: "Account & External links",
      items: [
        "account/account",
        "account/invoiced-customers",
        {
          type: "link",
          label: "Security",
          href: "https://www.argos-ci.com/security",
        },
        {
          type: "link",
          label: "Privacy",
          href: "https://www.argos-ci.com/privacy",
        },
        {
          type: "link",
          label: "Terms",
          href: "https://www.argos-ci.com/terms",
        },
        "account/contact-us",
      ],
    },
  ],
};

module.exports = sidebars;
