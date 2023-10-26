<template>
  <section class="card shadow p-2 d-flex flex-row align-items-between">
    <span class="d-block align-items-between textSide pt-3 ps-2">

      <div class="d-flex justify-content-between align-items-end">
        <section class="user d-flex align-items-center">
          <!-- <RouterLink :to="{ name: 'Profile', params: {} }"> -->
          <img class="rounded-circle shadow authorImg" :src="blog.creator.picture" :alt="blog.creator.name">
          <p class="mb-0 mx-3 fs-4">{{ blog.creator.name }}</p>
          <!-- </RouterLink> -->
        </section>
        <p class="mb-0 small">{{ blog.createdAt.toLocaleDateString() }}</p>
      </div>
      <hr>
      <section class="article">
        <!-- <RouterLink :to="{ name: 'Blog', }"> -->
        <p class="fw-bold fs-3">{{ blog.title }}</p>
        <p class="">{{ blog.body }}</p>
        <!-- </RouterLink> -->
      </section>
      <span class="d-flex justify-content-end">
        <span class="d-flex">
          <div v-for="tag in blog.tags" :key="tag">
            <!-- <RouterLink :to="{ name: 'Tag', }"> -->
            <button class="tag small rounded-pill mx-1 text-muted" type="button">
              {{ tag }}
            </button>
            <!-- </RouterLink> -->
          </div>
        </span>
      </span>

    </span>
    <img class="img-fluid m-2 ms-3 rounded shadow articleImg" :src="blog.imgUrl" :alt="blog.title">
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


<style lang="scss" scoped>
.authorImg {
  height: 3.3rem;
}

.textSide {
  width: 100%;
}

.articleImg {
  width: 42dvh;
  min-height: 16dvh;
  object-fit: cover;
}

button {
  color: black;
  border-color: grey;
}

button:hover {
  color: white;
  background-color: #12345678;
}
</style>