// mcbc-react\src\components\pages\MessageFromPastor.jsx
import { format } from 'date-fns'
import { useEffect, useState } from 'react'

import useFetch from '../hooks/useFetch'

import '../styles/components/messageFromPastor.scss'

type BlockType = {
  type: string
  level?: number
  format?: string
  url?: string
  children?: {
    text: string
  }[]
  image?: {
    url: string
    alt: string
    width?: number
    height?: number
  }
}

const renderRichText = (content: BlockType[] | undefined) => {
  if (!content) return null

  return content.map((block, index) => {
    const children = block.children
      ? block.children.map((child) => child.text).join('')
      : ''

    switch (block.type) {
      case 'paragraph':
        return <p key={index}>{children}</p>
      case 'heading':
        switch (block.level) {
          case 1:
            return <h1 key={index}>{children}</h1>
          case 2:
            return <h2 key={index}>{children}</h2>
          case 3:
            return <h3 key={index}>{children}</h3>
          case 4:
            return <h4 key={index}>{children}</h4>
          case 5:
            return <h5 key={index}>{children}</h5>
          case 6:
            return <h6 key={index}>{children}</h6>
          default:
            return <p key={index}>Unknown heading level</p>
        }
      case 'list':
        return block.format === 'ordered' ? (
          <ol key={index}>{children}</ol>
        ) : (
          <ul key={index}>{children}</ul>
        )
      case 'list-item':
        return <li key={index}>{children}</li>
      case 'link':
        return (
          <a key={index} href={block.url}>
            {children}
          </a>
        )
      case 'quote':
        return <blockquote key={index}>{children}</blockquote>
      case 'code':
        return <pre key={index}>{children}</pre>
      case 'image':
        return (
          <img
            key={index}
            src={block.image?.url}
            alt={block.image?.alt}
            width={block.image?.width}
            height={block.image?.height}
          />
        )
      default:
        return <p key={index}>Unknown block type</p>
    }
  })
}

const MessageFromPastor = () => {
  const { data, isLoading, isError } = useFetch(
    '/api/message-from-pastors?sort[0]=date:desc&pagination[limit]=1',
  )
  const [content, setContent] = useState<BlockType[] | undefined>(undefined)
  const [title, setTitle] = useState('')

  useEffect(() => {
    if (data) {
      console.log('Fetched data:', data) // Log the data to verify the structure
      const richTextContent = data.data[0]?.attributes?.content
      const messageTitle = data.data[0]?.attributes?.title
      console.log('Rich Text Content:', richTextContent) // Log the structure of the content
      setContent(richTextContent)
      setTitle(messageTitle)
    }
  }, [data])

  if (isLoading) {
    return <p>Loading...</p>
  }

  if (isError) {
    return <p>Error: {isError.message}</p>
  }

  return (
    <div className="message-from-pastor">
      <h1>A Message from the Pastor&apos;s heart</h1>
      {data?.data?.map((item: any) => (
        <div key={item.id}>
          <h2>{title}</h2> {/* Ensure the title is displayed correctly */}
          <div>{renderRichText(content)}</div>
          <p>{format(new Date(item.attributes.date), 'MMMM dd, yyyy')}</p>
        </div>
      ))}
    </div>
  )
}

export default MessageFromPastor
