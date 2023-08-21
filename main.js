// fetching images from API
  fetch('https://jsonplaceholder.typicode.com/albums/1/photos')
    .then(response => response.json())
    .then(data => {

   const imageContainer = document.getElementById('imgs');


// creating Grid of images and Modal
  for (let i = 0; i < 6; i++) {
    const photo = data[i];
    const imgDiv = document.createElement('div');
    
    imgDiv.classList.add('col-xl-3');

    const img = document.createElement('img');
    img.src = photo.url;
    img.id = photo.id;


    
    // To make the image responsive && add the thumbnail preview to it  
    img.classList.add('img-fluid', 'img-thumbnail');
    
    // Modal


    imgDiv.appendChild(img);
    imageContainer.appendChild(imgDiv);

    //Modal
    img.setAttribute("data-bs-toggle","modal");
    img.setAttribute("data-bs-target","#myModal");
    img.setAttribute("onclick","openModal(this.id)");
    img.addEventListener('click',(event)=>openModal(event));
    // console.log(img.id);
    
  }
  function openModal(event){
    // const id = event.target.id;
    // var x = document.getElementById("id");
    // document.getElementById("momm").append(x);

    var img = document.createElement('img');
    img.src =event.srcElement.currentSrc;
    document.getElementById("momm").append(img);
    // remove appended tag if modal is closed ;
      const myModal = document.getElementById('myModal');

      myModal.addEventListener('hidden.bs.modal', (event)=>hideModal(event));

      function hideModal(event) {
        console.log(111);
        document.getElementById('momm').removeChild(img);
      }
      
  }

      
})




