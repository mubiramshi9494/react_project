import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Body() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      // console.log(response)
      setPosts(response.data);
    });
  }, []);

  return (
    <>
      <div className="px-2 ">
        {posts &&
          posts.length > 0 &&
          posts.map((post, index) => (
            <Card className="mt-3 post" >
              <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Card.Text>{post.body}</Card.Text>
                <Link to={"/single-post/" + post.id}>
                  <button className="btn btn-primary post">View</button>
                </Link>
              </Card.Body>
            </Card>
          ))}
      </div>
    </>
  );
}
