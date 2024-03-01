import { FunctionComponent } from "preact";

import {Post} from "../types.ts"

const PostList: FunctionComponent<{ posts: Post[] }> = (
  { posts },
) => {
  return (
    <div class="PostList">
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <a href={`/post/${post.id}`}>{post.titulo}</a>
            <p>{post.autor}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;