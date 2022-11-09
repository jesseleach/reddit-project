import { useEffect, useState } from "react";
import { Box } from "./Box";
const axios = require("axios").default;

export const List = () => {
 const [redditPosts, setRedditPosts] = useState()

  useEffect(() => {
      if(!redditPosts){
        axios.get(`https://www.reddit.com/r/Bushwick.json`).then((res) => {
            const data = res.data;
            console.log(data.data.children);
            setRedditPosts(data.data.children)
      
          });
      }
   
  });

//console.log('redditPosts', redditPosts)

  return <Box />;
};

{}