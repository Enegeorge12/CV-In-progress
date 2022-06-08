   // write your solution here
   fetch("data.json")
   .then(response => response.json())
   .then(data =>{
       window.mockyData=data
       
       creatUser();
   })
   

   function creatUser(){
    
    for(user of mockyData){
      let profil=document.querySelector(".contact")
      let sectionHero=document.createElement("section")
      sectionHero.classList.add("hero")
      let img=document.createElement("img")
      img.src=user.img
      img.setAttribute("width","80%")
      img.style.borderRadius="50%";


      let name=document.createElement("h1")
      name.textContent=user.name
      let title=document.createElement("h3")
      title.textContent=user.title

      let email=document.createElement("div")
      email.textContent="Email: "+user.email
      
      let phone=document.createElement("div")
      phone.textContent="Phone: "+user.phone

      let country=document.createElement("div")
      country.textContent="Country: "+user.country

      let city=document.createElement("div")
      city.textContent="City: "+user.city

     let git=document.createElement("div")
     git.innerHTML=`<div>GitHub: 
     <a href="https://github.com/Enegeorge12">https://github.com/Enegeorge12</a>
     </div>`
     
     let linkedin=document.createElement("div");
     
     linkedin.innerHTML=` <div> Linkedin: 
     <a href="https://www.linkedin.com/in/enegeorge/">https://www.linkedin.com/in/enegeorge/ </a>
     </div`
     
     profil.appendChild(sectionHero)
     sectionHero.appendChild(img)
     sectionHero.appendChild(name)
     sectionHero.appendChild(title)
      profil.appendChild(email)
      profil.appendChild(phone)
      profil.appendChild(country)
      profil.appendChild(city)
      profil.appendChild(git)
      profil.appendChild(linkedin)
    }
   }

   function openTab(evt, name) {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(name).style.display = "block";
    evt.currentTarget.className += " active";
  }


function sendEmail(){
Email.send({
    Host : "smtp.gmail.com",
    Username : "ene@gmail.com",
    Password : "dkovydiplcwolvzu",
    To : 'ene.2456@gmail.com',
    From : document.getElementById("email").value,
    Subject : "New Contact form",
    Body : "And this is the body"
}).then(
  // message => alert(message)
)
}
// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Creati study
fetch("dataStudy.json")
.then(response => response.json())
.then(data =>{
    window.mockyData=data
    
    creatStudy();
})


function creatStudy(){
    for(user of mockyData){
        let study= document.querySelector("#study")
        let titleArticle=document.createElement("article")
        titleArticle.classList.add("title-company")

       
        let title=document.createElement("h4")
        title.textContent=user.title
        let company=document.createElement("h4")
        company.style.marginLeft="20px"
        company.textContent=user.company
        let img=document.createElement("img")
        img.setAttribute("width" ,"80px")
        img.src=user.img;
        let description= document.createElement("p")
        description.textContent="Description: "+user.description
        description.style.paddingBottom="20px"
        description.style.borderBottom="1px solid black"
        description.style.marginBottom="50px"
        let course=document.createElement("p")
        course.textContent=user.course
        
        study.appendChild(titleArticle)
        titleArticle.appendChild(img)
        titleArticle.appendChild(company)
        
        study.appendChild(title)
        study.appendChild(course)
        study.appendChild(description)


    }
}