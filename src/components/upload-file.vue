<script>
export default {
  name: 'VMdUploadFile',
  props: {
    uploadConfig: {
      type: Object,
      default: () => ({})
    }
  },
  data () {
    return {
      handleUpload () {},
      key: 0
    }
  },
  methods: {
    async upload () {
      return await this.chooseFile()
    },
    chooseFile () {
      return new Promise((resolve) => {
        this.handleUpload = (e) => {
          resolve(e)

          // 解决上传同一文件不触发change事件的问题
          this.key++
        }

        this.$refs.fileInput.click()
      })
    }
  }
}
</script>

<template>
  <input
    :key="key"
    ref="fileInput"
    type="file"
    style="display: none"
    :accept="uploadConfig.accept"
    :multiple="uploadConfig.multiple"
    @input="handleUpload"
  >
</template>
