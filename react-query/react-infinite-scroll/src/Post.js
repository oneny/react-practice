import { forwardRef } from 'react'

const Post = forwardRef(({ post }, ref) => {
  const postBody = (
    <>
      <h2>{post.title}</h2>
      {/* <p>{post.body}</p> */}
      {/* <p>Post ID: {post.id}</p> */}
    </>
  );

  const content = ref
    ? <article ref={ref}>{postBody}</article>
    : <article>{postBody}</article>

  return content;
});

export default Post