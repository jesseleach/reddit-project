export const Box = ({ redditPost }) => {
  return (
    <div>
      <h3>{redditPost.data.title}</h3>
      <p>{redditPost.data.selftext}</p>
      <p>{redditPost.data.created}</p>
    </div>
  );
};
