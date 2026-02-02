import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

export default (() => {
  const PopularTags: QuartzComponent = ({ allFiles, displayClass }: QuartzComponentProps) => {
    return (
      <div className={classNames(displayClass, "popular-tags")}>
        <hr />
        <h3 style={{ color: "red" }}>テスト表示：人気のタグ</h3>
        <p>記事の数: {allFiles.length}</p>
      </div>
    )
  }

  return PopularTags
}) satisfies QuartzComponentConstructor