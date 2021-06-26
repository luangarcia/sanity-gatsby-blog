export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "60d674fc33e20c0c6b8e5b3d",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-ff486p42",
                  apiId: "b7be6d8c-798f-46d5-9768-66128cdd16a0",
                },
                {
                  buildHookId: "60d674fcabf1b00e46a0db1c",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-a1r8m9x4",
                  apiId: "8c88a576-ccf8-4014-9ac4-3b1c981a3a05",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/luangarcia/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-a1r8m9x4.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
