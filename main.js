
// inserting Clippy into page
const injectElement = document.createElement('img');
const talkForm = document.createElement('div');


function insertForm () {
  
  talkForm.className = "talkForm";
  document.body.appendChild(talkForm);
  const input = document.createElement(`input`);
  input.setAttribute("id", "searchbar");
  input.setAttribute("name", "search");
  input.setAttribute("type", "text");
  input.setAttribute("placeholder", "Let Clippy Wiki");
  // ; "type", "text"; "name", "search"; "placeholder", "Let Clippy Wiki!")
  talkForm.appendChild(input);
  const button = document.createElement('button');
  button.setAttribute("id", "go");
  button.textContent += "Search";
  talkForm.appendChild(button);




  // const form = document.createElement('form');
  // form.className = "form";
  // talkForm.appendChild(form);
  // const label = document.createElement("label");
  // label.textContent += "Let Clippy wiki for you!";
  // form.appendChild(label);
  // const inputText = document.createElement("input");
  // inputText.className = "input";
  // form.appendChild(inputText);
  



  

}


function insertClippy () {

        injectElement.className = "clippypic";
        injectElement.setAttribute("src", "https://i.imgur.com/1xbkFEE.gif");
        talkForm.appendChild(injectElement);
    }

  




    insertForm();
    insertClippy();

    //onClick
document.addEventListener("click", onClick)

function onClick () {
injectElement.setAttribute("src", "https://i.imgur.com/3TFiZeZ.gif");
}

// // event listener for search
// document.getElementById("go").addEventListener("click", function(e){
//     //Get the selected radio button value
//     var eng = this.querySelector("[name=searchEngine]:checked").value;
//     //Get the selected data
//     eng = seData.filter(se => se.name === eng)[0];
//     //UPdate the url details and redirect
//     window.location.href = eng.url.replace("%s", document.getElementById("searchBar").value);
//     //Stop the form from actually submitting
//     e.preventDefault();
//     return false;

// })

// const div = document.getElementById('thing')
// div.innerHTML - div.innerHTML.replace('originaltext', 'newtext')
// for(const node of div.childNodes) {
//   if(node.nodeType == 3 && node.textContent == 'originaltext') {
  //    node.textContent = 'newtext'
//}
// }

//Iframe?
// function iFrame () {
//   const ifrm = document.createElement('iframe');
//   ifrm.src = "https://en.wikipedia.org/wiki/Main_Page";
// //   ifrm.style.display = 'none';
//   ifrm.style.width = "100px"
//   ifrm.style.height = "50px"
//   injectElement.appendChild(ifrm);
// }


// iFrame();






//on scroll, change clippy img
//   document.addEventListener("wheel", clipSwitch)

//   const clipArr = ['https://i.imgur.com/HfNaljN.gif', 'https://i.imgur.com/Go61hfz.gif', 'https://i.imgur.com/L2VDjfz.gif', 'https://i.imgur.com/fYRgfEa.gif', 'https://i.imgur.com/0P45b5s.gif', 'https://i.imgur.com/qfmYdzy.gif', 'https://i.imgur.com/ErWuQ2t.gif', 'https://i.imgur.com/OF0REQU.gif', 'https://i.imgur.com/cWZhiiQ.gif', 'https://i.imgur.com/FP9ZvKY.gif', 'https://i.imgur.com/Oy13DmS.gif', 'https://i.imgur.com/pXMdW3W.gif', 'https://i.imgur.com/5xyGA3i.gif', 'https://i.imgur.com/17mVDhY.gif', 'https://i.imgur.com/SZNy9Er.gif', 'https://i.imgur.com/iy8sJAb.gif', 'https://i.imgur.com/3v78Ttl.gif', 'https://i.imgur.com/P2CH6PB.gif', 'https://i.imgur.com/pGjDmfV.gif', 'https://i.imgur.com/vCemUrq.gif', 'https://ca.slack-edge.com/T02MMV0NENL-U02LLM2GM1D-5cd9b12e44f2-512'
//   ]

//   function clipSwitch() {
//     injectElement.setAttribute("src", clipArr[Math.floor(Math.random()*clipArr.length)])
//   }


  // let clipSize = document.querySelector(".clippypic").getBoundingRect()
  // let formSize = document.querySelector(".talkForm").getBoundingRect()
  // formSize.left = clipSize.right












//If on MDN or Codesmith or GitHub, show O'Halloran instead of Clippy
if (window.location.href.includes('mozilla') || window.location.href.includes('codesmith') || window.location.href.includes('github')) {
  injectElement.setAttribute("src", "https://ca.slack-edge.com/T02MMV0NENL-U02LLM2GM1D-5cd9b12e44f2-512");
}

if (window.location.href.includes('maps')) {
  injectElement.setAttribute("src", "https://i.imgur.com/ebDSzn4.gif");
};

if(window.location.href.includes('cdc.gov')) {
  injectElement.setAttribute("src", 'https://i.imgur.com/kiR6SUB.gif');
}

if(window.location.href.includes('bloomberg.com')) {
  injectElement.setAttribute("src", 'https://i.imgur.com/3v78Ttl.gif');
}