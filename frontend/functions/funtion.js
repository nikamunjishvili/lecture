
export const createBoxItem = (bgColor) => {
    const boxItem = document.createElement("div");
    boxItem.style.width = "300px";
    boxItem.style.height = "300px";
    boxItem.style.backgroundColor = bgColor || "grey";
    boxItem.style.margin = "15px";
    return boxItem;
  }
  
  export const createTextItem = (text, textColor, parentElement) => {
    const textItem = document.createElement("h3");
    textItem.innerHTML = text;
    textItem.style.color = textColor;
    parentElement.appendChild(textItem)
    return textItem;
  }
  
  export const createButtonItem = (text, parentElement) => {
    const button = document.createElement("button");
    button.innerHTML = text;
    parentElement.appendChild(button)
    return button;
  }