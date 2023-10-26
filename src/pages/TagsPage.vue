<template>
  <div class="container-fluid">
    <div class="row p-md-5 justify-content-center">
      <div class="col-12 d-flex justify-content-center">
        <p v-if="!activeTag" class="fs-1 fw-bold mb-0">TAGS</p>
        <p v-else class="fs-1 fw-bold mb-0">TAG: {{ activeTag }}</p>
      </div>
    </div>

    <div v-if="!activeTag" class="row p-md-5 justify-content-center">
      <div v-for="tag in tags" :key="tag"
        class="col-6 col-md-4 col-xl-auto mt-md-5 d-flex justify-content-center align-items-center">
        <button type="button" class="btn rounded-pill fs-5 m-3 px-3 tag" @click="setActiveTag(tag)">
          {{ tag }}</button>
      </div>
    </div>

    <div v-else class="row p-md-5 justify-content-center">

    </div>
  </div>
</template>

<script>
import { computed, onMounted } from "vue";
import { AppState } from "../AppState";
import { logger } from "../utils/Logger";
import Pop from "../utils/Pop";
import { tagsService } from "../services/TagsService.js";

export default {
  setup() {

    async function _getTags() {
      try {
        await tagsService.getTags()
      } catch (error) {
        logger.error(error);
        Pop.error(error)
      }
    }

    onMounted(() => {
      _getTags()
    })

    return {
      tags: computed(() => AppState.tags),
      activeTag: computed(() => AppState.activeTag),

      async setActiveTag(tag) {
        tagsService.setActiveTag(tag);
      }

    }
  }
}
</script>

<style scoped>
.tag {
  border-color: #123456;
}
</style>