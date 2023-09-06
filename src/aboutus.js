function createAboutUs() {
   const aboutUs = document.createElement('div');
   aboutUs.classList.add('about-us');

   aboutUs.appendChild(createStory());
   aboutUs.appendChild(createVisit());
   aboutUs.appendChild(createContact());

   return aboutUs;
}

function createStory() {
   const story = document.createElement('div');
   story.classList.add('story-div');

   const storyHeader = document.createElement('h2');
   storyHeader.classList.add('story-header');
   storyHeader.textContent = 'Our Story';

   story.appendChild(storyHeader);

   return story;
}

function createVisit() {
   const visit = document.createElement('div');
   visit.classList.add('visit-div');

   const visitHeader = document.createElement('h2');
   visitHeader.classList.add('visit-header');
   visitHeader.textContent = 'Visit Us';

   visit.appendChild(visitHeader);

   return visit;
}

function createContact() {
   const contact = document.createElement('div');
   contact.classList.add('contact-div');

   const contactHeader = document.createElement('h2');
   contactHeader.classList.add('contact-header');
   contactHeader.textContent = 'Contact Us';

   contact.appendChild(contactHeader);

   return contact;
} 

function aboutUsPage() {
   const main = document.getElementById('main');
   main.textContent = '';
   main.className = '';
   main.classList.add('about-us-page');
   main.appendChild(createAboutUs());
   console.log('About Us');
}

export default aboutUsPage; 