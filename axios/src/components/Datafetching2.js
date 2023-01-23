import axios from "axios";
import React, { useEffect, useState } from "react";

function Datafetching2() {
  const [comments, setComments] = useState([]);
  const [id, setId] = useState(1);

  const handler= ()=>{
    setId(id);
  }

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/comments/${id}`)
      .then((response) => {
        console.log(response);
        setComments(response.data);
      })
      .catch((error) => console.error(error));
  }, [id]);

  return (
    <div>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      <button type="button" onClick={handler}>Fetch comments</button>
      <div>{comments.name}</div>
      {/* <ul>
        {comments.map((comment) => (
          <li key={comment.id}>{comment.name}</li>
        ))}
      </ul> */}
    </div>
  );
}

export default Datafetching2;
