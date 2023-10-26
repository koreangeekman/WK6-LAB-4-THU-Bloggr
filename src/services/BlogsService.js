import { AppState } from "../AppState";
import { Blog } from "../models/Blog";
import { logger } from "../utils/Logger";
import { api } from "./AxiosService";

class BlogsService {

  async getBlogs() {
    const res = await api.get('api/blogs');
    const blogs = res.data.map(blog => new Blog(blog))
    AppState.blogs = blogs;
    logger.log('[BLOGS SERVICE] getBlogs(): ', blogs)
  }

}

export const blogsService = new BlogsService();