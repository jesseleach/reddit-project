import { testData } from "../testdata";
import {Box} from "./Box";

export const List = () => {
  console.log("testData", testData);
  return (
    <div className="List">
      {testData.data.children.map((item) => (
          <Box item={item}/>
      ))}
    </div>
  );
};
