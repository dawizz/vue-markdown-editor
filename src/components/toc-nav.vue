<script>
export default {
  name: 'TocNav',
  props: {
    titles: Array,
    indent: {
      type: Number,
      default: 16
    }
  }
}
</script>

<template>
  <ul class="v-md-editor__toc-nav">
    <li
      v-for="item in titles"
      :key="'toc-nav-' + item.id"
      :style="{
        paddingLeft: `${indent * (item.indent)}px`,
      }"
      class="v-md-editor__toc-nav-item"
      @click="$emit('nav-click', item)"
    >
      <span class="v-md-editor__toc-nav-title">{{ item.title }}</span>
    </li>
  </ul>
</template>

<style lang="scss">
@import '@/styles/var';

.v-md-editor {
  &__toc-nav {
    margin: 0;
    padding: 0;
    list-style: none;

    &-item {
      position: relative;
      height: 38px;
      overflow: hidden;
      color: $text-color;
      line-height: 38px;
      white-space: nowrap;
      text-overflow: ellipsis;
      cursor: pointer;
    }

    &-item:hover &-title {
      font-size: 17px;
      transform-origin: center center;
    }

    &-title {
      position: relative;
      font-size: 16px;
      transition: 0.3s;
    }
  }
}
</style>
