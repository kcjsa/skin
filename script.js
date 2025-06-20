const skins = [
  { name: "配布1", thumbnail: "配布1m.png", file: "配布1.png" },
  { name: "配布2", thumbnail: "配布2m.png", file: "配布2.png" },
  { name: "配布3", thumbnail: "配布3m.png", file: "配布3.png" },
  { name: "配布4", thumbnail: "配布4m.png", file: "配布4.png" },
  { name: "配布5", thumbnail: "配布5m.png", file: "配布5.png" },
  { name: "配布6", thumbnail: "配布6m.png", file: "配布6.png" },
  { name: "配布7", thumbnail: "配布7m.png", file: "配布7.png" },
  { name: "配布8", thumbnail: "配布8m.png", file: "配布8.png" },
  { name: "配布9", thumbnail: "配布9m.png", file: "配布9.png" },
  { name: "配布10", thumbnail: "配布10m.png", file: "配布10.png" },
  { name: "配布11", thumbnail: "配布11m.png", file: "配布11.png" },
  { name: "配布12", thumbnail: "配布12m.png", file: "配布12.png" },
];

const container = document.getElementById("skin-list");

skins.forEach(skin => {
  const card = document.createElement("div");
  card.className = "skin-card";

  // 画像をダウンロードリンクにする
  const link = document.createElement("a");
  link.href = `skins/${skin.file}`;
  link.download = skin.file;

  const img = document.createElement("img");
  img.src = `thumbnails/${skin.thumbnail}`;
  img.alt = skin.name;

  link.appendChild(img); // <a><img></a>

  const title = document.createElement("p");
  title.textContent = skin.name;

  card.appendChild(link);      // 画像クリックでDL
  card.appendChild(title);     // タイトル
  container.appendChild(card); // カードを追加
});
