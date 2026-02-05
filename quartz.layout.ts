import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"
// カスタムコンポーネントのインポート
import PopularTags from "./quartz/components/PopularTags"

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
    // 修正ポイント:
    // 1. PopularTagsが設定（options）を受け取る「高階関数」として実装されている場合
    PopularTags(), 
    // ※ もしPopularTagsが引数不要な単純なコンポーネントなら PopularTags そのままでも動作しますが、
    // 他のコンポーネント（Search()等）と合わせるなら PopularTags() と呼び出す形式が一般的です。
    
    Component.Explorer(),
  ],
  right: [
    Component.Graph(),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}