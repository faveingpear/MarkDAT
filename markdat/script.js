// Learn more about using JavaScript to interact with webpages:
// https://developer.mozilla.org/en-US/docs/Web/javascript

// Function that will save the text into a pdf files

function save(){
  var html = mmd("#Testing")
  
  window.alert(html);
}


// Function that will erase all the text in the text box
function clear(){
  document.getElementById("text").innerHTML = "Start Creating!";
  
  window.alert("test");
}
