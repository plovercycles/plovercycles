// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ConditionalRender({
      component: Component.Breadcrumbs(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
        { Component: Component.ReaderMode() },
      ],
    }),
    Component.Explorer({
      folderClickBehavior: "collapse",
      folderDefaultState: "collapsed",
      useSavedState: true,
      maxItems: 10,
    }),
  ],
  // --- 本文の後に「最近の記事」を表示 ---
  afterBody: [
    Component.ConditionalRender({
      component: Component.RecentNotes({
        title: "最近の記事",
        limit: 5,
        filter: (f) => f.slug !== "index" && !f.slug?.startsWith("tags/"),
      }),
      condition: (page) => page.fileData.slug === "index",
    }),
  ],
  // ------------------------------------
  right: [
    Component.Graph(),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}