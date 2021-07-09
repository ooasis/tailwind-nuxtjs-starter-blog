<template>
  <section
    id="isso-thread"
    :data-isso-id="dataId"
    :data-title="title"
  ></section>
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
}
</script>
