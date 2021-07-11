<template>
  <div>
    <section
      v-if="isso"
      id="isso-thread"
      :data-isso-id="dataId"
      :data-title="title"
    ></section>
    <div v-if="commento" id="commentobox"></div>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    dataId: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      isso: this.$site.comment && this.$site.comment.isso,
      commento: this.$site.comment && this.$site.comment.commento,
    }
  },
}
</script>
