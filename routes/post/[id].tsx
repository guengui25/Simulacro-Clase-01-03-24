import {FreshContext,Handlers,PageProps,} from "$fresh/server.ts";

import {Post} from "../../types.ts";

import PostComponent from "../../components/Post.tsx";

import PostModel from "../../db/Post.ts";


export const handler: Handlers = {
    GET: async (_req: Request, ctx: FreshContext<unknown, Post>) => {
      try {
        const { id } = ctx.params;
  
        const post = await PostModel.findById(id);
    
        if (!post) {
          throw new Error("Post not found");
        }

        return ctx.render(post);
        
      } catch (e) {
        console.error(e);
        throw new Error(e); // Si hay un error, lo lanzamos controlado
      }
    },
};
  
const Page = (props: PageProps<Post>) => {
    try {
      const Post = props.data;
  
      return (
        <div>
            <PostComponent titulo={Post.titulo} autor={Post.autor} post={Post.post}/>
        </div>
      );
    } catch (e) {
      return <div>Ha ocurrido un error</div>;
    }
};
  
export default Page; // Asi exportamos el componente