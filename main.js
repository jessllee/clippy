//Chrome Developer Info

function insertClippy () {
    const injectElement = document.createElement('img');
    injectElement.className = "clippypic";
    injectElement.setAttribute("src", "/assets/clippy.png");
    injectElement.innerHTML = "Clippy says hi";
    document.body.appendChild(injectElement);
}
insertClippy();



// // document.addEventListener('DOMContentLoaded', () => {
//     const body = document.getElementById('body');
//         // create clippy
//         const clippy = document.createElement('img');
//         // set attribute of clippy
//         clippy.setAttribute('src', 'assets/clippypic.gif');
//         body.appendChild(clippy);
    

// });



// grab an element from Google where we can to add clippy


// make clippy appear
//con




//CustomEvent()
// let clipSass = function (elem) {


//   const event = new CustomEvent('clippyCode', { detail: {
//     troll: 'Did you really think there was a MOST IMPORTANT SECRET to creating a Chrome extensions?'
//   }
//   })

//   elem.dispatchEvent(event)
// }

//<input id="password" name="password" />
//$(function() {
//   var triggerWords = ['foobar', 'barfoo'];
//   $('#password').keyup(function() {
//       for (var i = 0; i < triggerWords.length; i++) {
//           if ($(this).val().toLowerCase() == triggerWords[i]) {
//               alert('Alert!');
//           }
//       }
//   });
// });

//jQUERY VERSION
// jQuery('input#password').on('change', function(){
//   if (jQuery(this).val() == "foobar") alert('bad password!')
// });