import { FunctionComponent } from "preact";

const AddForm: FunctionComponent = () => {
  return (
    <form class="AddPost" action="/add" method="post">
      <h1>Add Post</h1>
      <h2>Title</h2>
      <input type="text" name="title" placeholder="Title" />
      <h2>Author</h2>
      <input type="author" name="author" placeholder="Author" />
      <h2>Content</h2>
      <input type="Content" name="content" placeholder="Content" />
      <button type="submit">Publish</button>
    </form>
  );
};

export default AddForm;