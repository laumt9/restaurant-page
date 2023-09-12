function createAboutUs() {
   const aboutUs = document.createElement('div');
   aboutUs.classList.add('about-us');

   aboutUs.appendChild(createMission());
   aboutUs.appendChild(createVisit());
   aboutUs.appendChild(createContact());

   return aboutUs;
}

function createMission() {
   const mission = document.createElement('div');
   mission.classList.add('about-us-divs');
   mission.classList.add('mission-div');

   const missionHeader = document.createElement('h3');
   missionHeader.classList.add('about-us-headers');
   missionHeader.classList.add('mission-header');
   missionHeader.textContent = 'Our Mission';

   const missionText = document.createElement('p');
   missionText.classList.add('mission-text');
   missionText.textContent = "We hope to spread and show the world our admiration for the best type of fried chicken — Korean Fried Chicken.";

   mission.appendChild(missionHeader);
   mission.appendChild(missionText);

   return mission;
}

function createVisit() {
   const visit = document.createElement('div');
   visit.classList.add('about-us-divs');
   visit.classList.add('visit-div');
   
   const visitHeader = document.createElement('h3');
   visitHeader.classList.add('about-us-headers');
   visitHeader.classList.add('visit-header');
   visitHeader.textContent = 'Visit Us';

   const visitLocation = document.createElement('h4');
   visitLocation.classList.add('visit-location');
   visitLocation.textContent = 'Koreatown';
   
   const visitAddress = document.createElement('p');
   visitAddress.classList.add('visit-address');
   visitAddress.innerHTML = `
      20 W 34th St., New York, NY 10001 <br>
      Tel: (212)-123-4567
   `;

   const visitHoursHeader = document.createElement('h5');
   visitHoursHeader.classList.add('visit-hours-header');
   visitHoursHeader.textContent = 'Hours';

   const visitHours = document.createElement('p');
   visitHours.classList.add('visit-hours');
   visitHours.innerHTML = `
      Mon: 11AM - 10PM <br>
      Tue: 11AM - 10PM <br>
      Wed: 11AM - 10PM <br>
      Thu: 11AM - 10PM <br>
      Fri: 11AM - 12AM <br>
      Sat: 11AM - 12AM <br>
      Sun: 11AM - 10PM <br>
   `;

   visit.appendChild(visitHeader);
   visit.appendChild(visitLocation);
   visit.appendChild(visitAddress);
   visit.appendChild(visitHoursHeader);
   visit.appendChild(visitHours);

   return visit;
}

function createContact() {
   const contact = document.createElement('div');
   contact.classList.add('about-us-divs');
   contact.classList.add('contact-div');

   const contactHeader = document.createElement('h3');
   contactHeader.classList.add('about-us-headers');
   contactHeader.classList.add('contact-header');
   contactHeader.textContent = 'Contact Us';

   const contactForm = document.createElement('div');
   contactForm.classList.add('contact-form');

   const contactFormName = document.createElement('input');
   contactFormName.classList.add('contact-form-name');
   contactFormName.type = 'text';
   contactFormName.placeholder = 'Name';
   contactFormName.required = true;
   
   const contactFormEmail = document.createElement('input');
   contactFormEmail.classList.add('contact-form-email');
   contactFormEmail.type = 'email';
   contactFormEmail.placeholder = 'E-Mail Address';
   contactFormEmail.required = true;

   const contactFormText = document.createElement('input');
   contactFormText.classList.add('contact-form-text');
   contactFormText.type = 'text';
   contactFormText.placeholder = 'Please let us know how we are doing!'
   contactFormText.required = true;

   const contactFormSubmit = document.createElement('button');
   contactFormSubmit.classList.add('contact-form-submit');
   contactFormSubmit.textContent = 'Submit';
   contactFormSubmit.addEventListener('click', () => {
      contactFormName.value = '';
      contactFormEmail.value = '';
      contactFormText.value = '';
   });

   contactForm.appendChild(contactFormName);
   contactForm.appendChild(contactFormEmail);
   contactForm.appendChild(contactFormText);

   contact.appendChild(contactHeader);
   contact.appendChild(contactForm);
   contact.appendChild(contactFormSubmit);

   return contact;
} 

function aboutUsPage() {
   const main = document.getElementById('main');
   main.textContent = '';
   main.className = '';
   main.classList.add('about-us-page');
   main.appendChild(createAboutUs());
}

export default aboutUsPage; 