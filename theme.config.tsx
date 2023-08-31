import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import { inject } from "@vercel/analytics";

inject();

const config: DocsThemeConfig = {
  logo: <span>Stargazer Documentation</span>,
  project: {
    link: "https://github.com/StargazerLabs/docs",
  },
  chat: {
    link: "https://discord.gg/pQt5wKdAGv",
  },
  docsRepositoryBase: "https://github.com/StargazerLabs/docs",
  footer: {
    text: "Stargazer Documentation",
  },
  useNextSeoProps() {
    return {
      titleTemplate: "%s – Stargazer Docs",
    };
  },
};

export default config;
