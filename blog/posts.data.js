import { createContentLoader } from 'vitepress'

export default createContentLoader('blog/posts/*.md', {
    // include excerpt (content before the first `---` after frontmatter)
    excerpt: true,
    transform(rawData) {
        // sort by date, newest first
        return rawData.sort((a, b) => {
            return +new Date(b.frontmatter.date) - +new Date(a.frontmatter.date)
        })
    }
})
