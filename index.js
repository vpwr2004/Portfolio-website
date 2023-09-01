// function myFunction() {
// 	var x = document.querySelector('.hamSection');
// 	if (x.style.display === "flex") {
// 	  x.style.display = "none";
// 	} else {
// 	  x.style.display = "flex";
// 	}
//   }
function myFunction(){
    var hamBurger=document.querySelector('.hamSection');
    if(hamBurger.style.display==="flex")
        hamBurger.style.display="none"
    else
        hamBurger.style.display="flex";
}

// hamBurger.addEventListener('click',()=>{
//     console.log(hamBurger);
    
// })
const counters = document.querySelectorAll('.value');
const speed = 500;

function anime(){
	// console.log("ni");
counters.forEach( counter => {
	
   function animate ()  {
      const value = +counter.getAttribute('akhi');
      const data = +counter.innerText;
     
      const time = value / speed;
        if(data < value) {
          counter.innerText = Math.ceil(data + time);
          setTimeout(animate, 1);
        }else{
          counter.innerText = value;
        }
		// console.log("hi");
     
   }
   
   animate();
});
}

const btn = document.getElementById('button');

document.getElementById('ContactForm')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.innerText = 'Sending...';

   const serviceID = 'service_br3qwqr';
   const templateID = 'template_80dn3gq';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      console.log("hlo");
      
      btn.innerText='Send Message';
      
      alert('Sent Successfully!');
      document.getElementById('ContactForm').reset();

    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});
