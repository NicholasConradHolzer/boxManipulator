document.getElementById("grow").addEventListener("click", function(){
    document.getElementById("box").style.height = "250px", 
    document.getElementById("box").style.width="250px";
    });
document.getElementById("shrink").addEventListener("click", function(){
    document.getElementById("box").style.height="50px",
    document.getElementById("box").style.width="50px";
    });
document.getElementById("ydink").addEventListener("click", function(){
    document.getElementById("box").style.height="5px",
    document.getElementById("box").style.width="5px";
    });
document.getElementById("BiggerBoot").addEventListener("click", function(){
    document.getElementById("box").style.height = "400px", 
    document.getElementById("box").style.width="1200px";
    });       
document.getElementById("blue").addEventListener("click", function(){
    document.getElementById("box").style.backgroundColor= "#3385ff";
    });
document.getElementById("fade").addEventListener("click", function(){
    document.getElementById("box").style.opacity= "0.2";
    });
document.getElementById("chaos").addEventListener("click", function(){
    document.getElementById("box").style.opacity= "0.0",
    document.getElementById("box").style.height="0px",
    document.getElementById("box").style.width="0px",
    document.getElementById("vortex").style.height = "100vh", 
    document.getElementById("vortex").style.width="100vw",
    document.getElementById("chaos").style.display="none",
    document.getElementById("grow").style.display="none",
    document.getElementById("shrink").style.display="none",
    document.getElementById("ydink").style.display="none",
    document.getElementById("blue").style.display="none",
    document.getElementById("fade").style.display="none",
    document.getElementById("BiggerBoot").style.display="none";
    });  
document.getElementById("chaos").addEventListener("click", function(){
    document.getElementById("title").style.display="none",
    document.getElementById("control").style.display="none",
    document.getElementById("control2").style.display="none",
    document.getElementById("control3").style.display="none";
    });
document.getElementById("reset").addEventListener("click", function(){
    document.getElementById("box").style.backgroundColor= "#ffa500", 
    document.getElementById("box").style.height="150px",
    document.getElementById("box").style.opacity= "1.0", 
    document.getElementById("box").style.width="150px",        
    document.getElementById("vortex").style.height = "0", 
    document.getElementById("vortex").style.width="0",
    document.getElementById("chaos").style.display="inline",
    document.getElementById("grow").style.display="inline",
    document.getElementById("shrink").style.display="inline",
    document.getElementById("ydink").style.display="inline",
    document.getElementById("blue").style.display="inline",
    document.getElementById("fade").style.display="inline",
    document.getElementById("BiggerBoot").style.display="inline",
    document.getElementById("title").style.display="inline-block",
    document.getElementById("control").style.display="table",
    document.getElementById("control2").style.display="table",
    document.getElementById("control3").style.display="inline-block";
    });