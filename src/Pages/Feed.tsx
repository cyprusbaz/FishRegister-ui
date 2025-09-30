import { GetAllFish } from "../api/fish/useGetAllFish";
import { FeedContent } from "../components/feedContent/FeedContent";

export const Feed = () => {
  function siu() {
    GetAllFish();
  }
  return (
    <div>
      <FeedContent />
    </div>
  );
};
