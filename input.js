
export class Input extends HTMLElement {
    
    constructor(){
        super()
        this.attachShadow({ mode: "open" })

    }
    
    connectedCallback() {
const icon = this.getAttribute('data-icon')
const variant = this.getAttribute('data-variant')


    this.shadowRoot.innerHTML = `
    <style>${css}</style>

    <form enctype="multipart/form-data" method="post">
    <div>
<label for="inputImg">add layer</label>
<input type="file" name="inputImg" id="inputImg">
</div>
<div class="preview">
<p>No image currently selected for layer

</p>
</div>
<div>
<button>Submit</button>
</div>
</form>



    `
if(variant){
    this.shadowRoot.querySelector('.btn').classList.add(`variant-${variant}`)
}

}
}

const css = `
form {
    background: #ccc;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid black;
  }

  form ol {
    padding-left: 0;
  }

  form li,
div > p {
  background: #eee;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  list-style-type: none;
  border: 1px solid black;
}

form img {
    height: 64px;
    order: 1;
  }

  form p {
    line-height: 32px;
    padding-left: 10px;
  }

  form label,
form button {
  background-color: #7f9ccb;
  padding: 5px 10px;
  border-radius: 5px;
  border: 1px ridge black;
  font-size: 0.8rem;
  height: auto;
}

form label:hover,
form button:hover {
  background-color: #2d5ba3;
  color: white;
}

form label:active,
form button:active {
  background-color: #0d3f8f;
  color: white;
}
`

const js = `
//import { select } from "./util.js";

//const [input, preview] = select('input', '.preview')
console.log(input, preview)

input.style.opacity = 0;
`