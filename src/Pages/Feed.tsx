import { CreateFish } from "../api/fish/useCreateFish";
import { GetAllFish } from "../api/fish/useGetAllFish";

export const Feed = () => {
  function siu() {
    GetAllFish();
  }
  return (
    <div>
      <button onClick={siu}>hello</button>
    </div>
  );
};
