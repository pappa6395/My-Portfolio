import React from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import TextStyle from '@tiptap/extension-text-style';
import TextColor from '@tiptap/extension-color';
import Link from '@tiptap/extension-link';
import OrderedList from '@tiptap/extension-ordered-list';
import BulletList from '@tiptap/extension-bullet-list';
import image from '@tiptap/extension-image';
import FontFamily from '@tiptap/extension-font-family';
import Underline from '@tiptap/extension-underline';
import Toolbar from '@/components/FormInputs/Toolbar';
import Heading from '@tiptap/extension-heading';
import Typography from '@tiptap/extension-typography';
import CharacterCount from "@tiptap/extension-character-count";


interface Props {
  value: any;
  onChange: (e: string) => void;
  showCounts?:
    | boolean
    | ((characters: number, words: number) => React.ReactNode);
}


const TiptapEditor = ({ value, onChange, showCounts }: Props) => {

  
  const editor = useEditor({
    editorProps: {
      attributes: {
        class: 
          "rounded-md border ps-4 pt-2 min-w-[300px] md:w-full min-h-[200px] border-input bg-background-white focus:ring-offset-2 disables:cursor-not-allowed disabled:opacity-50"
      }
    },
    extensions: [
      StarterKit.configure({
        heading: false,
      }),
      Heading.configure({
        levels: [1, 2, 3, 4, 5, 6],
        HTMLAttributes: {
            class: "editor-heading",
        }
      }),
      TextStyle,
      TextColor,
      FontFamily,
      OrderedList,
      BulletList,
      Underline,
      Typography,
      image.configure({
        HTMLAttributes:{
          class: "editor-image",
        }
      }),
      Link.configure({
        openOnClick: true,
        autolink: true,
        HTMLAttributes: {
          class: "editor-link",
        },
        defaultProtocol: 'https',
        protocols: ['http', 'https'],
      }),
      CharacterCount.configure({
        limit: 1000, // Optional: character limit
      }),
      
      

    ],
    content: value, // Initialize with the `value` prop
      onUpdate: ({ editor }) => {
      const content = editor.getText();
      onChange(content); // Notify parent component of changes
    },
  });
//   React.useEffect(() => {
//     if (editor && editor.getText() !== value) {
//       editor.commands.setContent(value);
//     }
//   }, [value, editor]);


  if (!editor) {
    return null
  };

    

  return (
    <div className='flex flex-col justify-stretch min-h-[250px]'>
        <Toolbar editor={editor} />
        <EditorContent editor={editor} />
        {showCounts === true ? (
        <h3 className='text-sm'>
          {editor.storage.characterCount.characters()} characters (
          {editor.storage.characterCount.words()} words)
        </h3>
      ) : (
        typeof showCounts === "function" &&
        showCounts(
          editor.storage.characterCount.characters(),
          editor.storage.characterCount.words()
        )
      )}
    </div>
  )
  
};

export default TiptapEditor;