const form = document.getElementById('myForm');
const username = document.getElementById('username').value;
const email = document.getElementById('email').value;
const linkedin = document.getElementById('linkedin').value;
const github = document.getElementById('github').value;
const major = document.getElementById('major').value;
const color = document.getElementById('color').value;
const about = document.getElementById('about').value;
const cv = document.getElementById('cv-upload');
const image = document.getElementById('image-upload');
const cvlbl = document.getElementById('cvlbl');
const imglbl=document.getElementById('imglbl');

cv.addEventListener('change',() => {
  if(cv.files.length>0){
    //cv.classList.add('green');
    cvlbl.style.backgroundColor='green';
    cvlbl.textContent='cv uploaded';
    alert('success');
  }else{
    alert('please upload a valid pdf file');
    cv.value='';
    cvlbl.style.backgroundColor='';
    cvlbl.textContent='upload cv';
  }
});
image.addEventListener('change',()=>{
  if(image.files.length>0){
    imglbl.style.backgroundColor='green';
    imglbl.textContent='image uploaded';
    alert('success');
  }else{
    alert('please upload a valid jpg file');
    image.value='';
    imglbl.style.backgroundColor='';
    imglbl.textContent='upload image';
  }
});

form.addEventListener('submit',function(event){
  event.preventDefault();
  const formData={
    firstname:document.getElementById('firstname').value,
    lastname:document.getElementById('lastname').value,
    username: document.getElementById('username').value,
    email: document.getElementById('email').value,
    linkedin: document.getElementById('linkedin').value,
    github: document.getElementById('github').value,
    major: document.getElementById('major').value,
    color: document.getElementById('color').value,
    about: document.getElementById('about').value,
    image:document.getElementById('image-upload').value
  }

  const cvFile = document.getElementById('cv-upload').files[0];
  const imageFile = document.getElementById('image-upload').files[0];

  const reader = new FileReader();
  const imageReader = new FileReader();

  reader.onload = function () {
    formData.cv = reader.result;
    imageReader.onload = function () {
      formData.image = imageReader.result;

      localStorage.setItem('formData', JSON.stringify(formData));

      window.location.href = 'result.html';
    };
    imageReader.readAsDataURL(imageFile);
  };
  reader.readAsDataURL(cvFile);
});
