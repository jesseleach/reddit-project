import { useEffect, useState } from "react";
import { Box } from "./Box";
const axios = require("axios").default;

export const List = ({ filterValue }) => {
  const [redditData, setRedditData] = useState(null);

  useEffect(() => {
    axios.get("https://www.reddit.com/r/Bushwick.json").then((response) => {
      // handle success
      setRedditData(response);
    });
  }, []);

  return (
    <div className="List">
      {redditData &&
        redditData.data.data.children
          .filter(item => !filterValue || item.data.title.toLowerCase().includes(filterValue))
          .map((item) => <Box item={item} />)}
    </div>
  );
};
