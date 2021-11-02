import { v4 as uuidv4 } from "uuid";

const Util = () => {
  return [
    {
      name: "Sound Escapes",
      artist: "G Mills",
      cover: "https://i.scdn.co/image/ab67616d0000b2739777bb21a7bf48708295001b",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=16195",
      color: ["#AC8D57", "#5F4132"],
      id: uuidv4(),
      active: true,
    },
    {
      name: "Solar Cove",
      artist: "Mama Aiuto",
      cover: "https://i.scdn.co/image/ab67616d0000b2739018b80220e22b0b113bffe4",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=16179",
      color: ["#AC8D57", "#5F4132"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Cruising",
      artist: "Evil Needle",
      cover: "https://i.scdn.co/image/ab67616d0000b2739d280fd85c5f52b616a3a053",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=17087",
      color: ["#AC8D57", "#5F4132"],
      id: uuidv4(),
      active: false,
    },
  ];
};

export default Util;
