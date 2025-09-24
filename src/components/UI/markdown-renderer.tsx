import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import remarkGfm from 'remark-gfm'


type ReactMarkdownProps = React.ComponentProps<typeof ReactMarkdown>

export function MarkdownRenderer({ components, ...props}: ReactMarkdownProps) {
  return  (
    <ReactMarkdown components={components} rehypePlugins={[rehypeRaw]} remarkPlugins={[remarkGfm]} {...props} />
  )
}                                               