import { defineConfig } from "sourcey";

export default defineConfig({
  name: "Documentation théatre VdS",
  theme: {
    preset: "default",
  },
  navigation: {
    tabs: [
      {
        tab: "Documentation",
        slug: "Documentation",
        groups: [
          {
            group: "Acceuil",
            pages: ["introduction"],
          },
          {
            group: "Régie Lumière",
            pages: ["light/*"],
          },
          {
            group: "Régie Audiovisuel",
            pages: ["audiovisual/introduction"],
          }
        ],
      },
      {
        tab: "Glossaire",
        slug: "Glossaire",
        groups: [
          {
            group: "Acceuil",
            pages: ["glossaire/index"],
          },
        ],
      },
    ],
  },
});
