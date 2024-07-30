import { useState, useEffect } from "react";

import "./App.css";

function App() {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({
    id: String(Date.now()),
    title: "",
    views: "",
  });

  useEffect(() => {
    async function getPosts() {
      try {
        const response = await fetch("http://localhost:3000/posts");
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error(error);
      }
    }

    getPosts();
  }, []);

  async function handleAdd(event) {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...newPost }),
      });
      const data = await response.json();
      setPosts([...posts, data]);
      setNewPost({ id: String(Date.now()), title: "", views: 0 });
    } catch (error) {
      console.error(error);
    }
  }

  async function handleDelete(id) {
    try {
      await fetch(`http://localhost:3000/posts/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const latestPost = posts.filter((item) => item.id !== id);
      setPosts(latestPost);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      {posts.map((item) => (
        <div key={item.id}>
          <h2>{item.title}</h2>
          <p>{item.views} Views</p>
          <button onClick={() => handleDelete(item.id)}>Delete</button>
        </div>
      ))}

      <form
        style={{ display: "flex", flexDirection: "column", marginTop: "48px" }}
        onSubmit={(event) => handleAdd(event)}
      >
        <label htmlFor="title">Title</label>
        <input
          id="title"
          name="title"
          type="text"
          onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
          value={newPost.title}
        />

        <label htmlFor="views">Views</label>
        <input
          id="views"
          name="views"
          type="number"
          onChange={(e) => setNewPost({ ...newPost, views: e.target.value })}
          value={newPost.views}
        />

        <button style={{ marginTop: "12px" }} type="submit">
          Submit
        </button>
      </form>
    </>
  );
}

export default App;
