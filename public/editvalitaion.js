var x=document.querySelector('#name')       
var y=document.querySelector('#email')     
var w=document.querySelector('#regno')     
var a= document.querySelector('#rollno')    
var b=document.querySelector('#sm')        
var c=document.querySelector('#pm')        
var d=document.querySelector('#fathername')
var mo=document.querySelector('#mothername')
var f=document.querySelector('#mocc')      
var g=document.querySelector('#focc')      
var h=document.querySelector('#dob')       
var i=document.querySelector('#adress')    
var j=document.querySelector('#pincode')   
var k=document.querySelector('#admission') 
var l=document.querySelector('#join')      
var m=document.querySelector('#year')      
var n=document.querySelector('#bloodg')    
var o=document.querySelector('#sslc')      
var p=document.querySelector('#hsc')       
var q=document.querySelector('#department')

var city= document.querySelector('#city')
var state= document.querySelector('#state')
var accno= document.querySelector('#accno')
var adharno= document.querySelector('#adharno')
var community=document.querySelector('#community')
city.addEventListener('blur', validatecity);
community.addEventListener('blur', validatecommunity);
state.addEventListener('blur', validatestate);
   x.addEventListener('blur', validateUsername);
   y.addEventListener('blur', validateEmail);

   mo.addEventListener('blur',validatemo);
   f.addEventListener('blur',validatef);
   g.addEventListener('blur',validateg);
   h.addEventListener('blur',validateh);
   i.addEventListener('blur',validatei);
   j.addEventListener('blur',validatej);
   k.addEventListener('blur',validatek);
   l.addEventListener('blur',validatel);
   m.addEventListener('blur',validatem);
   n.addEventListener('blur',validaten);
   o.addEventListener('blur',validateo);
   p.addEventListener('blur',validatep);
   q.addEventListener('blur',validateq);
 
   w.addEventListener('blur',validatew);
   a.addEventListener('blur',validatea);
   b.addEventListener('blur',validateb);
   c.addEventListener('blur',validatec);
   d.addEventListener('blur',validated);
   adharno.addEventListener('blur',validateadharno);
   accno.addEventListener('blur',validateaccno);


   
   function validatecity(e){
     if (city.value!=="") {
       city.classList.remove('is-invalid');
       city.classList.add('is-valid');
       return true;
     } else {
       city.classList.remove('is-valid');
   
       city.classList.add('is-invalid');
       return false;
     } 
   }
   function validatecommunity(e){
     if (community.value!=="community") {
       community.classList.remove('is-invalid');
       community.classList.add('is-valid');
       return true;
     } else {
       community.classList.remove('is-valid');
   
       community.classList.add('is-invalid');
       return false;
     } 
   }
   function validatestate(e){
     if (state.value !=="state"){
       state.classList.remove('is-invalid');
       state.classList.add('is-valid');
       return true;
     } else {
       state.classList.remove('is-valid');
   
       state.classList.add('is-invalid');
       return false;
     } 
   }
   function validateaccno(e){
     if (accno.value!=="") {
       accno.classList.remove('is-invalid');
       accno.classList.add('is-valid');
       return true;
     } else {
       accno.classList.remove('is-valid');
   
       accno.classList.add('is-invalid');
       return false;
     } 
   }
   function validateadharno(e){
     if (adharno.value!=="") {
       adharno.classList.remove('is-invalid');
       adharno.classList.add('is-valid');
       return true;
     } else {
       adharno.classList.remove('is-valid');
   
       adharno.classList.add('is-invalid');
       return false;
     } 
   }


const reSpaces = /^\S*$/;

function validatea(e){
 if (a.value!=="") {
   a.classList.remove('is-invalid');
   a.classList.add('is-valid');
   return true;
 } else {
   a.classList.remove('is-valid');

   a.classList.add('is-invalid');
   return false;
 } 
}
function validateb(e){
 if (b.value!=="") {
   b.classList.remove('is-invalid');
   b.classList.add('is-valid');
   return true;
 } else {
   b.classList.remove('is-valid');

   b.classList.add('is-invalid');
   return false;
 } 
}
function validatec(e){
 if (c.value!=="") {
   c.classList.remove('is-invalid');
   c.classList.add('is-valid');
   return true;
 } else {
   c.classList.remove('is-valid');

   c.classList.add('is-invalid');
   return false;
 } 
}
function validated(e){
 if (d.value!=="") {
   d.classList.remove('is-invalid');
   d.classList.add('is-valid');
   return true;
 } else {
   d.classList.remove('is-valid');

   d.classList.add('is-invalid');
   return false;
 } 
}
function validatemo(e){
 if (mo.value!=="") {
   mo.classList.remove('is-invalid');
   mo.classList.add('is-valid');
   return true;
 } else {
   mo.classList.remove('is-valid');

   mo.classList.add('is-invalid');
   return false;
 } 
}
function validatef(e){
 if (f.value!=="motheroccupation") {
   f.classList.remove('is-invalid');
   f.classList.add('is-valid');
   return true;
 } else {
   f.classList.remove('is-valid');

   f.classList.add('is-invalid');
   return false;
 } 
}
function validateg(e){
 if (g.value!=="fatheroccupation") {
   g.classList.remove('is-invalid');
   g.classList.add('is-valid');
   return true;
 } else {
   g.classList.remove('is-valid');

   g.classList.add('is-invalid');
   return false;
 } 
}
function validateh(e){
 if (h.value!=="") {
   h.classList.remove('is-invalid');
   h.classList.add('is-valid');
   return true;
 } else {
   h.classList.remove('is-valid');

   h.classList.add('is-invalid');
   return false;
 } 
}
function validatei(e){
 if (i.value!=="") {
   i.classList.remove('is-invalid');
   i.classList.add('is-valid');
   return true;
 } else {
   i.classList.remove('is-valid');

   i.classList.add('is-invalid');
   return false;
 } 
}
function validatej(e){
 if (j.value!=="") {
   j.classList.remove('is-invalid');
   j.classList.add('is-valid');
   return true;
 } else {
   j.classList.remove('is-valid');

   j.classList.add('is-invalid');
   return false;
 } 
}
function validatek(e){
 if (k.value!=="admission") {
   k.classList.remove('is-invalid');
   k.classList.add('is-valid');
   return true;
 } else {
   k.classList.remove('is-valid');

   k.classList.add('is-invalid');
   return false;
 } 
}
function validatel(e){
 if (l.value!=="join") {
   l.classList.remove('is-invalid');
   l.classList.add('is-valid');
   return true;
 } else {
   l.classList.remove('is-valid');

   l.classList.add('is-invalid');
   return false;
 } 
}
function validatem(e){
 if (m.value!=="year") {
   m.classList.remove('is-invalid');
   m.classList.add('is-valid');
   return true;
 } else {
   m.classList.remove('is-valid');

   m.classList.add('is-invalid');
   return false;
 } 
}
function validaten(e){
 if (n.value!=="bloodg") {
   n.classList.remove('is-invalid');
   n.classList.add('is-valid');
   return true;
 } else {
   n.classList.remove('is-valid');

   n.classList.add('is-invalid');
   return false;
 } 
}
function validateo(e){
 if (o.value!=="") {
   o.classList.remove('is-invalid');
   o.classList.add('is-valid');
   return true;
 } else {
   o.classList.remove('is-valid');

   o.classList.add('is-invalid');
   return false;
 } 
}

function validatep(e){
 if (p.value!=="") {
   p.classList.remove('is-invalid');
   p.classList.add('is-valid');
   return true;
 } else {
   p.classList.remove('is-valid');

   p.classList.add('is-invalid');
   return false;
 } 
}
function validateq(e){
 if (q.value!=="department") {
   q.classList.remove('is-invalid');
   q.classList.add('is-valid');
   return true;
 } else {
   q.classList.remove('is-valid');

   q.classList.add('is-invalid');
   return false;
 } 
}



function validater(e){
 if (r.value!=="") {
   r.classList.remove('is-invalid');
   r.classList.add('is-valid');
   return true;
 } else {
   r.classList.remove('is-valid');

   r.classList.add('is-invalid');
   return false;
 } 
}
function validates(e){
 if (s.value!=="") {
   s.classList.remove('is-invalid');
   s.classList.add('is-valid');
   return true;
 } else {
   s.classList.remove('is-valid');

   s.classList.add('is-invalid');
   return false;
 } 
}
function validatew(e){
 if (w.value!=="") {
   w.classList.remove('is-invalid');
   w.classList.add('is-valid');
   return true;
 } else {
   w.classList.remove('is-valid');

   w.classList.add('is-invalid');
   return false;
 } 
}


function validateUsername(e) {
 
 if (x.value!=="") {
   x.classList.remove('is-invalid');
   x.classList.add('is-valid');
   return true;
 } else {
   x.classList.remove('is-valid');

   x.classList.add('is-invalid');
   return false;
 }
}

function validateEmail(e) {
 const email = document.querySelector('#email');
 const re = /^([a-zA-Z0-9_\-?\.?]){3,}@([a-zA-Z]){3,}\.([a-zA-Z]){2,5}$/;

 if (reSpaces.test(email.value) && re.test(email.value)) {
   email.classList.remove('is-invalid');
   email.classList.add('is-valid');

   return true;
 } else {
   email.classList.add('is-invalid');
   email.classList.remove('is-valid');

   return false;
 }
}

function validatePassword() {
 
 const re = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})(?=.*[!@#$%^&*])/;
 if (re.test(z.value) && reSpaces.test(z.value)) {
   z.classList.remove('is-invalid');
   z.classList.add('is-valid');

   return true;
 } else {
   z.classList.add('is-invalid');
   z.classList.remove('is-valid');

   return false;
 }
}
function validatecpassword(){
if(z.value==""){
 cpassword.classList.remove('is-valid');
 cpassword.classList.add('is-invalid');
}

else if (z.value!==cpassword.value) {
   cpassword.classList.remove('is-valid');
   cpassword.classList.add('is-invalid');
   return true;
 } else {
   cpassword.classList.remove('is-invalid');

   cpassword.classList.add('is-valid');
   return false;
 }
 
}

(function () {
 const forms = document.querySelectorAll('.needs-validation');

 for (let form of forms) {
   form.addEventListener(
     'submit',
     function (event) {
validateEmail();

validateaccno();
validateadharno();
validatemo();
validatecity();
validatecommunity();
validatestate();
validateUsername();        
validatef()
validateg();
validateh();
validatei();
validatej();
validatek();
validatel();
validatem();
validaten();
validateo();
validatep();
validateq();
validater();
validates();
validatew();
validatea();
validateb();
validatec();
validated();
 
       if (
         !form.checkValidity() ||
         !validateEmail() ||
         !validateUsername() ||
          !validatef()||
          !validateg()||
          !validateh()||
          !validatei()||
          !validatej()||
          !validatek()||
          !validatel()||
          !validatem()||
          !validaten()||
          !validateo()||
          !validatep()||
          !validateq()||
          !validater()||
          !validates()||
          !validatew()||
          !validatea()||
          !validateb()||
          !validatec()||
          !validated()
       ) {
         event.preventDefault();
         event.stopPropagation();
       } else {
         form.classList.add('was-validated');
       }
     },
     false
   );
 }
})();
const DOMstrings = {
    stepsBtnClass: 'multisteps-form__progress-btn',
    stepsBtns: document.querySelectorAll(`.multisteps-form__progress-btn`),
    stepsBar: document.querySelector('.multisteps-form__progress'),
    stepsForm: document.querySelector('.multisteps-form__form'),
    stepsFormTextareas: document.querySelectorAll('.multisteps-form__textarea'),
    stepFormPanelClass: 'multisteps-form__panel',
    stepFormPanels: document.querySelectorAll('.multisteps-form__panel'),
    stepPrevBtnClass: 'js-btn-prev',
    stepNextBtnClass: 'js-btn-next' };
  
  
  const removeClasses = (elemSet, className) => {
  
    elemSet.forEach(elem => {
  
      elem.classList.remove(className);
  
    });
  
  };
  
  const findParent = (elem, parentClass) => {
  
    let currentNode = elem;
  
    while (!currentNode.classList.contains(parentClass)) {
      currentNode = currentNode.parentNode;
    }
  
    return currentNode;
  
  };
  
  const getActiveStep = elem => {
    return Array.from(DOMstrings.stepsBtns).indexOf(elem);
  };
  
  const setActiveStep = activeStepNum => {
  
    removeClasses(DOMstrings.stepsBtns, 'js-active');
  
    DOMstrings.stepsBtns.forEach((elem, index) => {
  
      if (index <= activeStepNum) {
        elem.classList.add('js-active');
      }
  
    });
  };
  
  const getActivePanel = () => {
  
    let activePanel;
  
    DOMstrings.stepFormPanels.forEach(elem => {
  
      if (elem.classList.contains('js-active')) {
  
        activePanel = elem;
  
      }
  
    });
  
    return activePanel;
  
  };
  
  const setActivePanel = activePanelNum => {
  
    removeClasses(DOMstrings.stepFormPanels, 'js-active');
  
    DOMstrings.stepFormPanels.forEach((elem, index) => {
      if (index === activePanelNum) {
  
        elem.classList.add('js-active');
  
        setFormHeight(elem);
  
      }
    });
  
  };
  
  const formHeight = activePanel => {
  
    const activePanelHeight = activePanel.offsetHeight;
  
    DOMstrings.stepsForm.style.height = `${activePanelHeight}px`;
  
  };
  
  const setFormHeight = () => {
    const activePanel = getActivePanel();
  
    formHeight(activePanel);
  };
  
  DOMstrings.stepsBar.addEventListener('click', e => {
  
    const eventTarget = e.target;
  
    if (!eventTarget.classList.contains(`${DOMstrings.stepsBtnClass}`)) {
      return;
    }
  
    const activeStep = getActiveStep(eventTarget);
  
    setActiveStep(activeStep);
  
    setActivePanel(activeStep);
  });
  
  DOMstrings.stepsForm.addEventListener('click', e => {
  
    const eventTarget = e.target;
  
    if (!(eventTarget.classList.contains(`${DOMstrings.stepPrevBtnClass}`) || eventTarget.classList.contains(`${DOMstrings.stepNextBtnClass}`)))
    {
      return;
    }
  
    const activePanel = findParent(eventTarget, `${DOMstrings.stepFormPanelClass}`);
  
    let activePanelNum = Array.from(DOMstrings.stepFormPanels).indexOf(activePanel);
  
    if (eventTarget.classList.contains(`${DOMstrings.stepPrevBtnClass}`)) {
      activePanelNum--;
  
    } else {
  
      activePanelNum++;
  
    }
  
    setActiveStep(activePanelNum);
    setActivePanel(activePanelNum);
  
  });
  
  window.addEventListener('load', setFormHeight, false);
  
  window.addEventListener('resize', setFormHeight, false);
  
  
  const setAnimationType = newType => {
    DOMstrings.stepFormPanels.forEach(elem => {
      elem.dataset.animation = newType;
    });
  };
  
