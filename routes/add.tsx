import { FreshContext, Handlers } from "$fresh/server.ts";
import Add from "../components/Add.tsx";
import PostModel from "../db/Post.ts";

export const handler: Handlers = {
  POST: async (req: Request, ctx: FreshContext) => {
    try {
      const form = await req.formData();
      
      const data = {
        titulo: form.get("title"),
        autor: form.get("author"),
        post: form.get("content")
      };

      console.log(data);

      const Post = await PostModel.create({
        titulo: data.titulo,
        autor: data.autor,
        post: data.post
      });

      return new Response("", {
        status: 303,  // Status 303 is for redirect
        headers: {
          "Location": `/post/${Post.id}`,
        },
      });

    } catch (error) {
      return new Response(error.message, {
        status: 500,
      });
    }
  },
};

const Page = () => {
  return (
    <div>
      <Add/>
    </div>
  );
};

export default Page;