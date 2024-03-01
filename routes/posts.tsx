import {FreshContext,Handlers,PageProps,} from "$fresh/server.ts";
  
import Axios from "npm:axios";
  
import {Post} from "../types.ts";

import PostModel from "../db/Post.ts";

import PostList from "../components/PostList.tsx";

type Data = {
    Posts: Post[];
};


export const handler: Handlers = {
    GET: async (_req: Request, ctx: FreshContext<unknown, Data>) => {
      try {
        const Posts = await PostModel.find();
        return ctx.render({Posts});
        
      } catch (e) {
        console.error(e);
        throw new Error(e); // Si hay un error, lo lanzamos controlado
      }
    },
};
  
const Page = (props: PageProps<Data>) => {
    try {

      return (
        <div>
          <PostList posts={props.data.Posts}/>
        </div>
      );
    } catch (e) {
      return <div>Ha ocurrido un error</div>;
    }
};

export default Page; // Asi exportamos el componente