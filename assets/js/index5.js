


function $(q) {
    return document.querySelector(q);
  }
  
  
  
  $("#form").addEventListener("submit", e => {
    e.preventDefault();
  
    //Get variables
  
    //Get and parse whitelist
    let whitelist = $("#whitelist").value;
    if (whitelist.trim()) {
      whitelist = whitelist.split("\n");
    }
  
    //Get content
    let input = $("#input").value;
    input = input.split("\n");
  
    //Iterate over the log
    for (let i = input.length - 1; i >= 0; i--) {
  
      //Filter the whitelist
      console.log(whitelist);
      if (whitelist) {
        let flag = false;
        for (let each of whitelist) {
          if (input[i].includes(each)) {
            flag = true;
            break;
          }
        }
  
        if (flag) continue;else
        input.splice(i, 1);
      }
    }
  
    input = input.join("\n");
  
    $("#output").value = input;
  });



  jQuery(function($){
    $('.sidebar-toggler').on('click', function () {
        $('#sidebar').toggleClass('hidden');
      });
 });
  


  

 
  
  