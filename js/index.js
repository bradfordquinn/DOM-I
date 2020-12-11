const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

//NAV
// Example: Update the img src for the logo
const logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

const nav = document.querySelector('nav');
const links = document.getElementsByTagName('a');
const navA = links[0];
const navB = links[1];
const navC = links[2];
const navD = links[3];
const navE = links[4];
const navF = links[5];

const appendLink = document.createElement("a");
appendLink.textContent = "Appended";
appendLink.href = "#";
document.querySelector("nav").appendChild(appendLink);

const prependLink = document.createElement("a");
prependLink.textContent = "Prepend";
prependLink.href = "#";
document.querySelector("nav").prepend(prependLink);

navA.textContent = siteContent['nav']['nav-item-1'];
navB.textContent = siteContent['nav']['nav-item-2'];
navC.textContent = siteContent['nav']['nav-item-3'];
navD.textContent = siteContent['nav']['nav-item-4'];
navE.textContent = siteContent['nav']['nav-item-5'];
navF.textContent = siteContent['nav']['nav-item-6'];
const linksArray = Array.from(links);
linksArray.forEach((item) => item.style.color='green');
/// ----

//CTA
const ctaBut = document.querySelector('button');
const ctaH = document.querySelector("h1");
const ctaLogo = document.getElementById("cta-img");

ctaBut.textContent = siteContent['cta']['button'];
ctaH.textContent = siteContent['cta']['h1'];
ctaLogo.setAttribute('src', siteContent['cta']['img-src']);
/// ----

//MAIN CONTENT

const main = document.querySelector('.main-content');
const topC = main.querySelector('.top-content');
const bottomC = main.querySelector('.bottom-content');
const mImage = main.querySelector('img');
// - top content div 1
const topCdiv1 = topC.querySelector('div');
const topCheader1 = topCdiv1.querySelector('h4');
const topCtext1 = topCdiv1.querySelector('p');
// - top content div 2
const topCdiv2 = topCdiv1.nextElementSibling;
const topCheader2 = topCdiv2.querySelector('h4');
const topCtext2 = topCdiv2.querySelector('p');
// - bottom content div 1
const botDiv1 = bottomC.querySelector('div');
const botHeader1 = botDiv1.querySelector('h4');
const botText1 = botDiv1.querySelector('p');
// - bottom content div 2
const botDiv2 = botDiv1.nextElementSibling;
const botHeader2 = botDiv2.querySelector('h4');
const botText2 = botDiv2.querySelector('p');
// bottom content div 3
const botDiv3 = botDiv2.nextElementSibling;
const botHeader3 = botDiv3.querySelector('h4');
const botText3 = botDiv3.querySelector('p');

// - top content 
topCheader1.textContent = siteContent['main-content']['features-h4'];
topCtext1.textContent = siteContent['main-content']['features-content'];
topCheader2.textContent = siteContent['main-content']['about-h4'];
topCtext2.textContent = siteContent['main-content']['about-content'];
// - bottom content
botHeader1.textContent = siteContent['main-content']['services-h4'];
botText1.textContent = siteContent['main-content']['services-content'];
botHeader2.textContent = siteContent['main-content']['product-h4'];
botText2.textContent = siteContent['main-content']['product-content'];
botHeader3.textContent = siteContent['main-content']['vision-h4'];
botText3.textContent = siteContent['main-content']['vision-content'];
// - img
mImage.setAttribute('src', siteContent['main-content']['middle-img-src']);
/// ----

//CONTACT
const contact = document.querySelector('.contact');
const contactHeader = contact.querySelector('h4');
const contactP1 = contact.querySelector('p');
const contactP2 = contactP1.nextElementSibling;
const contactP3 = contactP2.nextElementSibling;

contactHeader.textContent = siteContent['contact']['contact-h4'];
contactP1.textContent = siteContent['contact']['address'];
contactP2.textContent = siteContent['contact']['phone'];
contactP3.textContent = siteContent['contact']['email'];
/// ----

//FOOTER
const foot = document.querySelector('footer');
const footP = foot.querySelector('p');

footP.textContent = siteContent['footer']['copyright'];
/// ----