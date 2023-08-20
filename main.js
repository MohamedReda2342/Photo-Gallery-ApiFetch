  var x = document.getElementById("imgs-search");
  x.addEventListener("input", function(event) {
    var searchValue = event.target.value.toLowerCase(); 
    var images = document.querySelectorAll("#imgs img");
    
    images.forEach(function(image) {
      var imageTitle = image.alt.toLowerCase(); 
      
      if (imageTitle.includes(searchValue)) 
        image.style.display = "block"; 
      else 
        image.style.display = "none"; 
      
    });
  });
  
