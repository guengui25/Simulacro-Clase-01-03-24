import { FreshContext } from "$fresh/server.ts";

import Menu from "../components/Menu.tsx";

// Es asíncrono el layout para poder acceder a la solicitud y al contexto

const Layout = async (req: Request, ctx: FreshContext) => { 
  const Component = ctx.Component;
  const route = ctx.route;

  // last after /
  const page = route.split("/").pop();
  // if page is empty, it means we are at the root
  const selected = page === "" ? "Posts" : "Add";
  return (
    <div class="Layout">
      <Menu selected={selected} />
      <Component />
    </div>
  );
};

export default Layout;