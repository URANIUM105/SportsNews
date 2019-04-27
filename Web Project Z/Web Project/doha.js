var btn_feedback = document.getElementById("btn_feedback");
btn_feedback.onclick = btn_click;
function btn_click()
{
    
    var div_feedcontianer = document.getElementById("fedcontainer");
   
    if(div_feedcontianer.style.display === "block") {
      div_feedcontianer.style.display = "none";
    } else {
      div_feedcontianer.style.display = "block";
    }
        
}