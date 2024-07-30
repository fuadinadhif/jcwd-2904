import { useParams } from "react-router-dom";

function Post() {
  const { id } = useParams();

  return <h1>{`This post id is: ${id}`}</h1>;
}

export default Post;
