import createCopyCodePreview from './preview'
import markdownItCopyCode from '@/utils/markdown-it-copy-code'

export default function createCopyCodePlugin () {
  return {
    install (VMdEditor) {
      VMdEditor.extendMarkdown((mdParser) => {
        mdParser.use(markdownItCopyCode)
      })

      VMdEditor.use(createCopyCodePreview())
    }
  }
}
