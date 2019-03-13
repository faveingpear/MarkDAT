function goback(){
      
}
  

function view(){
      var text = document.getElementById("text").value, body, head, footer, menu;
      
      head = '<html><head><meta charset="utf-8"><title>markDAT</title><link rel="stylesheet" href="/styles.css"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1"></head>'
      
      menu = '<div class="menu"><table><tr><h1 id="title">MarkDat</h1><button type="button" onclick="view();">Go Back</button><button type="button" onclick="document.getElementById('text').innerHTML = 'Start Creating!';">Erase Text</button></tr></table></div>'
      
      body = mmd(text);
      
      document.getElementById("screen").innerHTML = head + body;
      
  
}