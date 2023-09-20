export function Container(bgColor){
    const main = document.getElementById("main");
    const box = document.createElement("div");
    box.style.width = "200px";
    box.style.height = "200px";
    box.style.backgroundColor = bgColor || "grey";
    main.appendChild(box);
  };