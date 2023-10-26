<template>
  <section class="card shadow p-2 d-flex align-items-center">
    <span>
      <div class="d-flex justify-content-between align-items-end">
        <RouterLink :to="{ name: 'Profile', }">
          <section class="user">
            <img class="rounded-circle" :src="blog.creator.picture" :alt="blog.creator.name">
            <p class="mb-0 fs-3">{{ blog.creator.name }}</p>
          </section>
        </RouterLink>
        <p class="small">{{ blog.createdAt.toLocalDateString() }}</p>
      </div>
      <section class="article">
        <RouterLink :to="{ name: 'Blog', }">
          <p class="fw-bold fs-3">{{ blog.title }}</p>
          <p class="">{{ blog.body }}</p>
        </RouterLink>
        <span class="d-flex justify-content-end">
          <span class="d-flex">
            <div v-for="tag in blog.tags" :key="tag" class="tag small rounded-pill">
              <RouterLink :to="{ name: 'Tag', }">
                {{ tag }}
              </RouterLink>
            </div>
          </span>
        </span>
      </section>
    </span>
    <img class="img-fluid m-2" :src="blog.imgUrl" :alt="blog.title">
  </section>
</template>


<script>
import { AppState } from '../AppState';
import { computed, onMounted } from 'vue';
import { Blog } from "../models/Blog";

export default {
  props: {
    blog: { type: Blog }
  },
  setup() {
    return {
      account: computed(() => AppState.account)
    }
  }
};
</script>


<style lang="scss" scoped></style>