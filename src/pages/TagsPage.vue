<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 d-flex justify-content-center">
        <p class="fs-1 fw-bold">TAGS</p>
      </div>
      <div v-for="tag in tags" :key="tag" class="col-12 col-md-6 col-xl-2">
        <button type="button" class="btn rounded-pill tag"></button>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from "vue";
import { AppState } from "../AppState";

export default {
  setup() {

    async function _getTags() {

    }
    onMounted(() => {
      _getTags()
    })

    return {
      tags: computed(() => AppState.tags)
    }
  }
}
</script>

<style scoped>
.tag {
  border-color: #123456;
}
</style>