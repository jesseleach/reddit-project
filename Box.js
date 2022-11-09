export const Box = ({ item }) => {
  return (
    <div className="Box">
      <h2>{item.data.title}</h2>
      <div >{item.data.selftext}</div>;
    </div>
  );
};
