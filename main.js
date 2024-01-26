import { select } from "./util.js";

const host = document.querySelector('#host')


const [input, preview] = [host.shadowRoot.querySelector('#inputImg'), host.shadowRoot.querySelector('.preview')]
console.log(input, preview)

input.style.opacity = 0;

input.addEventListener("change", updateImageDisplay);

function updateImageDisplay() {
    while (preview.firstChild) {
      preview.removeChild(preview.firstChild);
    }
  
    const curFiles = input.files;
    if (curFiles.length === 0) {
      const para = document.createElement("p");
      para.textContent = "No files currently selected for upload";
      preview.appendChild(para);
    } else {
      const list = document.createElement("ol");
      preview.appendChild(list);
  
      for (const file of curFiles) {
        const listItem = document.createElement("li");
        const para = document.createElement("input");
        para.type = 'text'
          para.value = `layer`;
          const image = document.createElement("img");
          image.src = URL.createObjectURL(file);
          image.alt = image.title = file.name;
  
          listItem.appendChild(image);
          listItem.appendChild(para);
        
        list.appendChild(listItem);
      }
    }}
  