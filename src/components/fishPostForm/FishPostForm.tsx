import { useEffect, useState, type ChangeEvent } from "react";
import { GetAllFish } from "../../api/fish/useGetAllFish";
import type { Fish } from "../../models/fish/fish";
import styles from "./FishPostForm.module.css";
import type { FishPost } from "../../models/fishPost/fishPost";
import { getUserId } from "../../utils/auth";
import { useCreateFishPost } from "../../api/fishPost/useCreateFishPost";

export const FishPostForm = () => {
  const [fishes, setFishes] = useState<Fish[]>([]);

  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [fish, setFish] = useState<string>("");
  const [image, setImage] = useState<File | null>(null);

  const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };
  const handleContentChange = (event: ChangeEvent<HTMLInputElement>) => {
    setContent(event.target.value);
  };
  const handleFishChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setFish(event.target.value);
  };
  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const photo = event.target.files[0];
      setImage(photo);
    }
  };

  const fileToBytes = (file: File): Promise<Uint8Array> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        resolve(new Uint8Array(reader.result as ArrayBuffer));
      };
      reader.onerror = reject;
      reader.readAsArrayBuffer(file);
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      const fishes = GetAllFish();
      setFishes(await fishes);
    };
    fetchData();
  }, []);

  const submitPost = () => {
    const post: FishPost = {
      title: title,
      content: content,
      image: image!,
      fishId: fish,
      userId: getUserId()!,
    };

    useCreateFishPost(post);
  };

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <input type="text" placeholder="title" onChange={handleTitleChange} />
        <input
          type="text"
          placeholder="content"
          onChange={handleContentChange}
        />
        <input
          type="file"
          placeholder="fish photo"
          onChange={handleImageChange}
        />
        <select name="" id="" onChange={handleFishChange}>
          <option value="0">--Choose a fish--</option>
          {fishes.map((fish) => (
            <option value={fish.id} key={fish.id}>
              {fish.name} {fish.type}
            </option>
          ))}
        </select>
        <button onClick={submitPost}>Submit</button>
      </div>
    </div>
  );
};
