function modalopen(modstr){
   if (modstr == "reg"){
    document.getElementById("log").style.display = "none";
    document.getElementById("reg").style.display = "block";
   }
   
   if (modstr == "log"){
     document.getElementById("reg").style.display = "none";
     document.getElementById("forgot").style.display = "none";
     document.getElementById("log").style.display = "block";
   }

   if (modstr == "forgot"){
     document.getElementById("forgot").style.display = "block";
     document.getElementById("log").style.display = "none";
   }

} 