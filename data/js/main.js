// if ('serviceWorker' in navigator) {
//   window.addEventListener('load', function() {
//     navigator.serviceWorker.register('/sw.js').then(function(registration) {
//       // Registration was successful
//       console.log('ServiceWorker registration successful with scope: ', registration.scope);
//     }, function(err) {
//       // registration failed :(
//       console.log('ServiceWorker registration failed: ', err);
//     });
//   });
// }

// Let's remove all the elements from the webpage 

// const tagsRemover = document.querySelectorAll('p, h1, h2, h3, img');

// tagsRemover.forEach(function(tags) {
//   tags.remove();
// });

/* **************************************************************************************
*                               let's set the header part                               *
****************************************************************************************/


/****************************************************************************************
*                                   New Versions to do                                  *
****************************************************************************************/

// V.1

// Change the js to create a table that store all the project 

// store all the info in a json file 

// change everything into sass


// V.2

// re-shape everythin using React or Angular.


// let's add the content strored in personalData  
const dataName = document.createElement('h1');
dataName.className = 'header-name';
// dataName.innerHTML = personalData.name;
document.querySelector('.header-components').append(dataName);
const modal = document.getElementById('infoModal');
const btn1 = document.getElementById('modal-btn');
const span = document.getElementsByClassName('close')[0];
btn1.onclick = function() {
  modal.style.display = 'block';
  // console.log('button pressed');
};
span.onclick = function() {
  modal.style.display = 'none';
};

// Modal Body
const modalBody = document.createElement('div');
modalBody.className = 'modal-body';
document.querySelector('.modal-content').appendChild(modalBody);
const dataAbout = document.createElement('h3');
// dataAbout.textContent = personalData.description1;
document.querySelector('.modal-body').appendChild(dataAbout);
// loop trough info and take the data on it and put it in a new variable
personalData[0].info.forEach((infos) => {
  const personalInfos = document.createElement('p');
  personalInfos.innerHTML = infos;
  document.querySelector('.modal-body').appendChild(personalInfos);
  // let's test the result
  // console.log(personalInfo);
});

const dataTitle = document.createElement('h2');
// dataTitle.textContent = personalData.title;  
document.querySelector('.modal-body').appendChild(dataTitle);

// Curriculum button
const curriculum = document.createElement('a');
curriculum.textContent = "Curriculum Vitae";
curriculum.className = "curriculum";
curriculum.setAttribute('href', 'data/cv/Mattia_Leoni_CV_EN.pdf');
document.querySelector('.modal-body').appendChild(curriculum);
// curriculum.innerHTML = works.cv;

//Certification button

// const certification = document.createElement('button');
// certification.className = 'certs';
// document.querySelector('.modal-body').appendChild(certification);
// certification.innerHTML = works.certs;

// Modal Footer

const modalFooter = document.createElement('div');
modalFooter.className = 'modal-footer';
document.querySelector('.modal-content').appendChild(modalFooter);

// contact info
const contact = document.createElement('div');
contact.className = 'contacts';
document.querySelector('.modal-footer').appendChild(contact);
/*
contactData.data.forEach((data) => {
  const contactInfo = document.createElement('p');
  contactInfo.className = 'contact-info';
  contactInfo.innerHTML = data;
  document.querySelector('.modal-footer').appendChild(contactInfo);
});

// closing modal session
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  };
};
*/
/* **************************************************************************************
*                               let's set the main part                                 *
****************************************************************************************/

const project = document.createElement('h2');
project.className = 'projects';
// project.innerHTML = works.featured;
document.querySelector('.featured-work').appendChild(project);

const featured = document.createElement('div');
featured.className ='featured';
document.querySelector('.featured-work').appendChild(featured);

// Memory

const featuredItem = document.createElement('div');
featuredItem.className ='featured-item';
document.querySelector('.featured').appendChild(featuredItem);
const linkItem = document.createElement('a');
linkItem.className = 'link-memory';
linkItem.setAttribute('href', 'https://mattyleo.github.io/MatchingGame.io/');
document.querySelector('.featured-item').appendChild(linkItem);
const workPic1 = 'data/images/memory.png';
const work1 = document.createElement('img');
work1.className = 'featured-img';
work1.alt = 'Memory-game';
document.querySelector('.link-memory').appendChild(work1);
work1.src = workPic1;
const featuredInfo = document.createElement('h4');
featuredInfo.className = 'featured-info';
document.querySelector('.featured-item').appendChild(featuredInfo);
// featuredInfo.innerHTML = works.name1;
const projectName = document.createElement('p');
projectName.className = 'featured-dsc';
document.querySelector('.featured-item').appendChild(projectName);
const linkName1 = document.createElement('a');
linkName1.className = 'featured-link';
linkName1.setAttribute('href', 'https://github.com/mattyleo/MatchingGame.io');
document.querySelector('.featured-dsc').appendChild(linkName1);
// linkName1.innerHTML = works.link1;

// Frog

const featuredItem1 = document.createElement('div');
featuredItem1.className ='featured-item1';
document.querySelector('.featured').appendChild(featuredItem1);
const linkItem1 = document.createElement('a');
linkItem1.className = 'link-frog';
linkItem1.setAttribute('href', 'https://mattyleo.github.io/froglikegame.io/');
document.querySelector('.featured-item1').appendChild(linkItem1);
const workPic2 = 'data/images/frog.png';
const work2 = document.createElement('img');
work2.className = 'featured-img1';
work2.alt = 'frog-like-game';
document.querySelector('.link-frog').appendChild(work2);
work2.src = workPic2;
const featuredInfo1 = document.createElement('h4');
featuredInfo1.className = 'featured-info1';
document.querySelector('.featured-item1').appendChild(featuredInfo1);
// featuredInfo1.innerHTML = works.name2;
const projectName1 = document.createElement('p');
projectName1.className = 'featured-dsc1';
document.querySelector('.featured-item1').appendChild(projectName1);
const linkName2 = document.createElement('a');
linkName2.className = 'featured-link';
linkName2.setAttribute('href', 'https://github.com/mattyleo/froglikegame.io');
document.querySelector('.featured-dsc1').appendChild(linkName2);
// linkName2.innerHTML = works.link2;

// Cat Clicker

const featured2 = document.createElement('div');
featured2.className ='featured-item2';
document.querySelector('.featured').appendChild(featured2);
const linkItem2 = document.createElement('a');
linkItem2.className = 'link-cat';
linkItem2.setAttribute('href', 'https://mattyleo.github.io/CatClickerPT1/');
document.querySelector('.featured-item2').appendChild(linkItem2);
const workPic3 = 'data/images/cat.png';
const work3 = document.createElement('img');
document.querySelector('.link-cat').appendChild(work3);
work3.className = 'featured-img2';
work3.src = workPic3;
work3.alt = 'cat-clicker';
const featuredInfo2 = document.createElement('h4');
featuredInfo2.className = 'featured-info2';
document.querySelector('.featured-item2').appendChild(featuredInfo2);
// featuredInfo2.innerHTML = works.name3;
const projectName2 = document.createElement('p');
projectName2.className = 'featured-dsc2';
document.querySelector('.featured-item2').appendChild(projectName2);
const linkName3 = document.createElement('a');
linkName3.className = 'featured-link';
linkName3.setAttribute('href', 'https://github.com/mattyleo/CatClickerPT1');
document.querySelector('.featured-dsc2').appendChild(linkName3);
// linkName3.innerHTML = works.link3;

// Jasmine

const featured3 = document.createElement('div');
featured3.className ='featured-item3';
document.querySelector('.featured').appendChild(featured3);
const linkItem3 = document.createElement('a');
linkItem3.className = 'link-feed';
linkItem3.setAttribute('href', 'https://mattyleo.github.io/Udacity-Feed-reader-Testing.io/#');
document.querySelector('.featured-item3').appendChild(linkItem3);
const workPic4 = 'data/images/feed1.png';
const work4 = document.createElement('img');
work4.className = 'featured-img3';
work4.alt = 'feed-reader';
document.querySelector('.link-feed').appendChild(work4);
work4.src = workPic4;
const featuredInfo3 = document.createElement('h4');
featuredInfo3.className = 'featured-info3';
document.querySelector('.featured-item3').appendChild(featuredInfo3);
// featuredInfo3.innerHTML = works.name4;
const projectName3 = document.createElement('p');
projectName3.className = 'featured-dsc3';
document.querySelector('.featured-item3').appendChild(projectName3);
const linkName4 = document.createElement('a');
linkName4.className = 'featured-link';
linkName4.setAttribute('href', 'https://github.com/mattyleo/Udacity-Feed-reader-Testing.io');
document.querySelector('.featured-dsc3').appendChild(linkName4);
// linkName4.innerHTML = works.link4;

// Restaurant - Review

const featured4 = document.createElement('div');
featured4.className ='featured-item4';
document.querySelector('.featured').appendChild(featured4);
const linkItem4 = document.createElement('a');
linkItem4.className = 'restaurant-review';
linkItem4.setAttribute('href', 'https://mattyleo.github.io/restaurant-review/');
document.querySelector('.featured-item4').appendChild(linkItem4);
const workPic5 = 'data/images/resto1.png';
const work5 = document.createElement('img');
work5.className = 'featured-img4';
work5.alt = 'restaurant-revew';
document.querySelector('.restaurant-review').appendChild(work5);
work5.src = workPic5;
const featuredInfo4 = document.createElement('h4');
featuredInfo4.className = 'featured-info4';
document.querySelector('.featured-item4').appendChild(featuredInfo4);
// featuredInfo4.innerHTML = works.name5;
const projectName4 = document.createElement('p');
projectName4.className = 'featured-dsc4';
document.querySelector('.featured-item4').appendChild(projectName4);
const linkName5 = document.createElement('a');
linkName5.className = 'featured-link';
linkName5.setAttribute('href', 'https://github.com/mattyleo/restaurant-review');
document.querySelector('.featured-dsc4').appendChild(linkName5);
// linkName5.innerHTML = works.link5;

// gallery

const featured5 = document.createElement('div');
featured5.className ='featured-item5';
document.querySelector('.featured').appendChild(featured5);
const workPic6 = 'data/images/coming.png';
const work6 = document.createElement('img');
work6.className = 'featured-img5';
work6.alt = 'coming-soon';
document.querySelector('.featured-item5').appendChild(work6);
work6.src = workPic6;
const featuredInfo5 = document.createElement('h4');
featuredInfo5.className = 'featured-info5';
document.querySelector('.featured-item5').appendChild(featuredInfo5);
// featuredInfo5.innerHTML = works.name6;

// Todo-list

const featured6 = document.createElement('div');
featured6.className ='featured-item6';
document.querySelector('.featured').appendChild(featured6);
const workPic7 = 'data/images/coming.png';
const work7 = document.createElement('img');
work7.className = 'featured-img6';
work7.alt = 'coming-soon';
document.querySelector('.featured-item6').appendChild(work7);
work7.src = workPic7;
const featuredInfo6 = document.createElement('h4');
featuredInfo6.className = 'featured-info6';
document.querySelector('.featured-item6').appendChild(featuredInfo6);
// featuredInfo6.innerHTML = works.name7;

// travel blog

const featured7 = document.createElement('div');
featured7.className ='featured-item7';
document.querySelector('.featured').appendChild(featured7);
const workPic8 = 'data/images/coming.png';
const work8 = document.createElement('img');
work8.className = 'featured-img7';
work8.alt = 'coming-soon';
document.querySelector('.featured-item7').appendChild(work8);
work8.src = workPic8;
const featuredInfo7 = document.createElement('h4');
featuredInfo7.className = 'featured-info7';
document.querySelector('.featured-item7').appendChild(featuredInfo7);
// featuredInfo7.innerHTML = works.name8;


// const logo = new Image();
// logo.alt = 'personal-logo';
// logo.class = 'logo';
// logo.src = personalData[0].media.logo;
// document.querySelector('.header-components').appendChild(logo);