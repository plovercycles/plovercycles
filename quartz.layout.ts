import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/jackyzha0/quartz",
      "Discord Community": "https://discord.gg/cRFFHYye7t",
    },
  }),
}

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
// afterBody を追加（または修正）
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
  sortFn: (a, b) => {
    if (!a.file && !b.file) return a.displayName.localeCompare(b.displayName)
    if (!a.file) return -1
    if (!b.file) return 1

    const dateA = a.file.dates?.created ?? new Date(0)
    const dateB = b.file.dates?.created ?? new Date(0)
    return dateB.getTime() - dateA.getTime()
  },
}),
  ],
  right: [
    Component.Graph(),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
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
      ],
    }),
Component.Explorer({
  folderClickBehavior: "collapse", // フォルダをクリックした時の挙動
  folderDefaultState: "collapsed", // 最初は閉じておくか（"open" で展開）
  useSavedState: true,
  maxItems: 10, // ← ここに表示したい件数を指定してください！
  sortFn: (a, b) => {
    if (!a.file && !b.file) return a.displayName.localeCompare(b.displayName)
    if (!a.file) return -1
    if (!b.file) return 1

    const dateA = a.file.dates?.created ?? new Date(0)
    const dateB = b.file.dates?.created ?? new Date(0)
    return dateB.getTime() - dateA.getTime()
  },
}),
  ],
  right: [],
}