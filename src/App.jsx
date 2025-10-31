import React, { useState } from "react";
import "./App.css";

function App() {
  const images = [
    "https://cdn.pixabay.com/photo/2022/12/17/13/46/woods-7661735_640.jpg",
    "https://cdn.pixabay.com/photo/2025/06/20/10/47/dog-9670619_640.jpg",
    "https://cdn.pixabay.com/photo/2025/06/05/16/39/desert-9643279_640.jpg",
    "https://cdn.pixabay.com/photo/2025/04/16/06/25/duck-9536937_640.jpg",
    "https://cdn.pixabay.com/photo/2023/05/11/16/25/hall-7986771_640.jpg",
    "https://cdn.pixabay.com/photo/2023/06/04/20/21/cat-8040862_640.jpg",
    "https://cdn.pixabay.com/photo/2023/01/10/00/17/italy-7708551_640.jpg",
    "https://cdn.pixabay.com/photo/2024/10/22/15/07/father-9140142_640.jpg",
    "https://cdn.pixabay.com/photo/2023/08/27/10/25/swiss-alps-8216616_640.jpg",
    "https://cdn.pixabay.com/photo/2023/06/26/21/22/shack-8090832_640.jpg",
    "https://cdn.pixabay.com/photo/2024/12/13/21/16/bird-9266166_640.jpg",
    "https://cdn.pixabay.com/photo/2023/02/10/16/07/new-york-7781184_640.jpg",
    "https://cdn.pixabay.com/photo/2022/06/08/17/57/mecca-7250988_640.jpg",
  ];

  const [index, setIndex] = useState(0);
  const count = images.length;

  const prev = () => {
    setIndex((i) => (i - 1 + count) % count);
  };

  const next = () => {
    setIndex((i) => (i + 1) % count);
  };

  return (
    <center >
      <img
        src={images[index]}
       
      />
      <div className="flex gap-4">
        <button onClick={prev} className="nav-button">
          Prev
        </button>
        <button onClick={next} className="nav-button">
          Next
        </button>
      </div>
    </center>
  );
}

export default App;
