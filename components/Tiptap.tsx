'use client'

import Heading from '@tiptap/extension-heading'
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'

const Tiptap = () => {
  const editor = useEditor({
    extensions: [
        StarterKit.configure({
            heading: false,
        }),
        Heading.configure({
            levels: [1, 2, 3, 4, 5, 6],
            HTMLAttributes: {
                class: 'editor-heading',
            }
        })
    ],
    content: '<p>Hello World! 🌎️</p>',
  })

  return <EditorContent editor={editor} />
}

export default Tiptap
