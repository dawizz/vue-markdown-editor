<h1 align="center">Vue Markdown Editor (fork)</h1>

> Fork of https://github.com/code-farmer-i/vue-markdown-editor/
> MIT

## Fork notice and future plans

- This version is only a fork of the original project with upgraded modules (and security fixes)

- In the future, the idea is also to upgrade Webpack/Vite

- We'll probably use [unplugin-icons](https://github.com/antfu/unplugin-icons)

- Node 12 will be upgraded to Node 16

- Mermaid support is removed

## Install

```bash
# Vue 2 use npm
npm i @dawizz/vue-markdown-editor -S
# Vue 2 use yarn
yarn add @dawizz/vue-markdown-editor

## Quick Start

```js
import Vue from 'vue';
import VueMarkdownEditor from '@dawizz/vue-markdown-editor';
import '@dawizz/vue-markdown-editor/lib/style/base-editor.css';
import vuepressTheme from '@dawizz/vue-markdown-editor/lib/theme/vuepress.js';
import '@dawizz/vue-markdown-editor/lib/theme/style/vuepress.css';

// Prism
import Prism from 'prismjs';
// highlight code
import 'prismjs/components/prism-json';

VueMarkdownEditor.use(vuepressTheme, {
  Prism,
});

Vue.use(VueMarkdownEditor);
```

## Usage

```html
<template>
  <vue-markdown-editor v-model="text" height="400px"></vue-markdown-editor>
</template>

<script>
  export default {
    data() {
      return {
        text: '',
      };
    },
  };
</script>
```

## Usage Composition Api

```html
<template>
  <vue-markdown-editor v-model="text" height="400px"></vue-markdown-editor>
</template>

<script>
  import { ref } from 'vue';

  export default {
    setup() {
      const text = ref('');

      return {
        text,
      };
    },
  };
</script>
```

## License

[MIT](https://github.com/code-farmer-i/vue-markdown-editor/blob/dev/LICENSE)

[Unchanged local MIT Licence](LICENCE)
