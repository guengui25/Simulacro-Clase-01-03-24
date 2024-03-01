import { FunctionComponent } from "preact";

import { Post } from "../types.ts";

const Post: FunctionComponent<Post> = (props) => {
    
    const {titulo,autor,post} = props;
    
    return (
      <div class="Post">
        <h1 class="Titulo">{titulo}</h1>
        <p class="Autor">{autor}</p>
        <p class="Post">{post}</p>
        <a href = "/" style="text-decoration: none">Volver</a>
      </div>
    );
  };
  
  export default Post;