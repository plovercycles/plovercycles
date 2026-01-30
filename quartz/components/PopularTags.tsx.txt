import { QuartzComponent, QuartzComponentConstructor } from "./types"

const MAX_TAGS = 10
const MIN_COUNT = 2 // 1回しか使われていないタグは表示しない

const PopularTags: QuartzComponent = ({ allFiles }) => {
  const tagCount: Record<string, number> = {}

  for (const file of allFiles) {
    const tags = file.frontmatter?.tags
    if (!tags) continue

    for (const tag of tags) {
      tagCount[tag] = (tagCount[tag] ?? 0) + 1
    }
  }

  const popularTags = Object.entries(tagCount)
    .filter(([, count]) => count >= MIN_COUNT)
    .sort((a, b) => b[1] - a[1])
    .slice(0, MAX_TAGS)

  if (popularTags.length === 0) return null

  return (
    <div class="popular-tags">
      <h3>Popular Tags</h3>
      <ul>
        {popularTags.map(([tag, count]) => (
          <li>
            <a href={`/tags/${tag}`}>#{tag}</a>
            <span class="count">{count}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default (() => PopularTags) satisfies QuartzComponentConstructor
