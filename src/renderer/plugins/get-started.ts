import type { Plugin } from '@fe/context'
import GetStarted from '@fe/components/GetStarted.vue'

export default {
  name: 'get-started',
  register: (ctx) => {
    ctx.editor.registerCustomEditor({
      name: 'GetStarted',
      hiddenPreview: true,
      when ({ doc }) {
        return doc === null && ctx.args.MODE === 'normal'
      },
      component: GetStarted,
    })
  }
} as Plugin
