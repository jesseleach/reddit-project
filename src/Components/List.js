import { testData } from "../testdata";
import {Box} from "./Box";

export const List = () => {
  console.log("testData", testData);
  return (
    <div>
      {testData.data.children.map((item) => (
          <Box/>
      ))}
    </div>
  );
};
