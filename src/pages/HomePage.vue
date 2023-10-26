<template>
  <div class="container-fluid">
    <!-- <section class="row p-5">
      <div class="col-12">
        <p class="mb-0 fs-1"></p>
      </div>
    </section> -->
    <section class="row p-4">
      <div v-for="blog in blogs" :key="blog.id" class="col-12 p-3">
        <BlogCard :blog="blog" />
      </div>
    </section>
  </div>
</template>

<script>
import { computed, onMounted } from "vue";
import BlogCard from "../components/BlogCard.vue";
import { AppState } from "../AppState";
import { logger } from "../utils/Logger";
import Pop from "../utils/Pop";
import { blogsService } from "../services/BlogsService";

export default {
  setup() {

    async function _getBlogs() {
      try {
        await blogsService.getBlogs();
      } catch (error) {
        logger.error(error)
        Pop.error(error)
      }
    }

    onMounted(() => {
      _getBlogs()
    })

    return {
      blogs: computed(() => AppState.blogs),
    };
  },
  components: { BlogCard }
}
</script>

<style scoped lang="scss">
.home {
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;

  .home-card {
    width: 50vw;

    >img {
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}
</style>
