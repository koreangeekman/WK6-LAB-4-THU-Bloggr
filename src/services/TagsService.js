import { AppState } from "../AppState";
import { Blog } from "../models/Blog";
import { logger } from "../utils/Logger";
import { api } from "./AxiosService";


class TagsService {
  async getTags() {
    const res = await api.get('api/blogs')
    AppState.blogs = res.data.map(blog => new Blog(blog))

    let tags = [];
    res.data.forEach(blog => {
      if (blog.tags.length > 1) {
        blog.tags.forEach(tag => tags.push(tag))
      } else if (blog.tags.length == 1) {
        tags.push(blog.tags)
      }
    })
    AppState.tags = tags.sort()
    logger.log('tags', tags)
    // tags.forEach(t => logger.log('tag', t))
  }

  async setActiveTag(tag) {
    AppState.activeTag = tag;
    AppState.blogs = AppState.blogs.filter(blog => blog.tags.find(t => t == tag))
  }

}

export const tagsService = new TagsService();