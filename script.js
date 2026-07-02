// Mobile Menu appears on clicking the hamburger menu and dissapers on clicking the close button

const btnNavigationElement = document.querySelector('.btn-mobile-nav');
const headerElement = document.querySelector('.header');

btnNavigationElement.addEventListener('click', () => {
  headerElement.classList.toggle('nav-open');
});

// Mobile Menu dissapear on clicking any of the mobile options
const navLinks = document.querySelectorAll('.main-nav-link');
navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    headerElement.classList.remove('nav-open');
  });
});

// Works / Projects data. The first entry is the large featured project,
// the rest are rendered in the grid below it. Each entry carries its own
// details so the pop-up can show the project the visitor actually clicked.

const projectData = [
  {
    imageSrc: 'img/post-stories.svg',
    title: 'Tukopamoja',
    description:
      'A production-ready multiplayer game platform centred on live quiz experiences. Hosts create quiz templates and run sessions from a web dashboard while players join by PIN or QR code for real-time, synchronised gameplay with live leaderboards.',
    badges: ['TypeScript', 'Next.js', 'React Native', 'Supabase'],
    demoLink: '',
    source: 'https://github.com/Tarto-4/Tukopamoja',
  },
  {
    imageSrc: 'img/desktop-1.svg',
    title: 'PowerTrader AI',
    description:
      'A fully automated crypto trading system that pairs a custom price-prediction AI with a structured, tiered dollar-cost-averaging strategy. It analyses historical price patterns across multiple timeframes to generate hands-off buy and sell signals.',
    badges: ['Python', 'Machine Learning', 'Robinhood API'],
    demoLink: 'https://powertrader.net',
    source: 'https://github.com/Tarto-4/PowerTrader_AI',
    id: 'bg-1',
  },
  {
    imageSrc: 'img/desktop-2.svg',
    title: 'Personal Portfolio',
    description:
      'This responsive portfolio website, hand-built to showcase my projects and experience. It features a mobile-first layout, an accessible contact form and an interactive project pop-up, all without a framework.',
    badges: ['HTML', 'CSS', 'JavaScript'],
    demoLink: 'https://tarto-4.github.io/',
    source: 'https://github.com/Tarto-4/Tarto-4.github.io',
    id: 'bg-2',
  },
  {
    imageSrc: 'img/desktop-3.svg',
    title: 'Simple Interest Calculator',
    description:
      'A command-line tool that calculates simple interest from a principal, annual rate and time period. Built as a hands-on exercise in shell scripting, Git workflows and open-source project structure.',
    badges: ['Shell', 'Bash', 'Git'],
    demoLink: '',
    source: 'https://github.com/Tarto-4/github-final-project',
    id: 'bg-3',
  },
  {
    imageSrc: 'img/desktop-1.svg',
    title: 'Low-Level Programming',
    description:
      'A collection of C programs exploring low-level programming concepts: pointers, memory management, data structures and how software talks to hardware. Part of the ALX Software Engineering curriculum.',
    badges: ['C', 'Data Structures', 'Algorithms'],
    demoLink: '',
    source: 'https://github.com/Tarto-4/alx-low_level_programming',
    id: 'bg-4',
  },
];

const worksSection = document.querySelector('.works-section');

// Helper: build a badge list from a project's badges array
const buildBadgeList = (badges, className) => {
  const list = document.createElement('ul');
  list.classList = className;
  badges.forEach((badge) => {
    const li = document.createElement('li');
    li.innerText = badge;
    list.appendChild(li);
  });
  return list;
};

// Featured project (first entry)

const featured = projectData[0];

const postStories = document.createElement('div');
postStories.classList = 'post-stories';
worksSection.appendChild(postStories);

const image = document.createElement('img');
image.src = featured.imageSrc;
image.alt = `${featured.title} project preview`;
postStories.appendChild(image);

const postTextBox = document.createElement('div');
postTextBox.classList = 'post-text-box';
postStories.appendChild(postTextBox);

const postStoriesHeading = document.createElement('h3');
postStoriesHeading.classList = 'post-stories-heading';
postStoriesHeading.innerText = featured.title;
postTextBox.appendChild(postStoriesHeading);

const postStoriesDescription = document.createElement('p');
postStoriesDescription.classList = 'post-stories-description';
postStoriesDescription.innerText = featured.description;
postTextBox.appendChild(postStoriesDescription);

postTextBox.appendChild(buildBadgeList(featured.badges, 'works-list'));

const featuredBtn = document.createElement('button');
featuredBtn.classList = 'btn-sm show-pop-up';
featuredBtn.innerHTML = 'See Project';
featuredBtn.dataset.project = '0';
postTextBox.appendChild(featuredBtn);

// Project grid (remaining entries)

const artPrintingContainer = document.createElement('div');
artPrintingContainer.classList = 'art-printing-container';
worksSection.appendChild(artPrintingContainer);

for (let i = 1; i < projectData.length; i += 1) {
  const project = projectData[i];

  const artPrinting = document.createElement('div');
  artPrinting.classList = 'art-printing';
  artPrinting.id = `${project.id}`;
  artPrintingContainer.appendChild(artPrinting);

  const artPrintingInner = document.createElement('div');
  artPrintingInner.classList = 'art-printing-inner inner-remove';
  artPrinting.appendChild(artPrintingInner);

  const artPrintingHeading = document.createElement('h3');
  artPrintingHeading.classList = 'art-printing-heading';
  artPrintingHeading.innerText = project.title;
  artPrintingInner.appendChild(artPrintingHeading);

  const artPrintingDescription = document.createElement('p');
  artPrintingDescription.classList = 'art-printing-description';
  artPrintingDescription.innerText = project.description;
  artPrintingInner.appendChild(artPrintingDescription);

  artPrintingInner.appendChild(buildBadgeList(project.badges, 'art-printing-list'));

  const btnLarge = document.createElement('button');
  btnLarge.classList = 'btn-lg show-pop-up';
  btnLarge.innerHTML = 'See Project';
  btnLarge.dataset.project = `${i}`;
  artPrinting.appendChild(btnLarge);
}

// Pop up section (built once, populated with the clicked project's details)

const popUp = document.createElement('div');
popUp.classList = 'pop-up hidden';
worksSection.after(popUp);

const headingBox = document.createElement('div');
headingBox.classList = 'heading-box';
popUp.appendChild(headingBox);

const popUpHeading = document.createElement('h2');
popUpHeading.classList = 'pop-up-heading';
headingBox.appendChild(popUpHeading);

const closeBtn = document.createElement('button');
closeBtn.classList = 'close-pop-up';
headingBox.appendChild(closeBtn);

const closeIcon = document.createElement('img');
closeIcon.classList = 'close-icon';
closeIcon.src = 'img/icon-cancel.svg';
closeIcon.alt = 'Close Pop up Window';
closeBtn.appendChild(closeIcon);

const languageList = document.createElement('ul');
languageList.classList = 'language-list';
popUp.appendChild(languageList);

const cardWorks = document.createElement('div');
cardWorks.classList = 'card-works';
popUp.appendChild(cardWorks);

const cardImg = document.createElement('img');
cardImg.classList = 'card-work-img';
cardImg.alt = 'Image of project work';
cardWorks.appendChild(cardImg);

const cardWorkText = document.createElement('div');
cardWorkText.classList = 'card-works-text';
cardWorks.appendChild(cardWorkText);

const cardWorkDescription = document.createElement('p');
cardWorkDescription.classList = 'card-works-description';
cardWorkText.appendChild(cardWorkDescription);

const action = document.createElement('div');
action.classList = 'action';
cardWorkText.appendChild(action);

const liveBtn = document.createElement('button');
liveBtn.classList = 'btn-sm';
action.appendChild(liveBtn);

const sourceBtn = document.createElement('button');
sourceBtn.classList = 'btn-sm';
action.appendChild(sourceBtn);

const overlay = document.createElement('div');
overlay.classList = 'overlay hidden';
popUp.after(overlay);

// Fill the pop-up with a given project's details

const populatePopUp = (project) => {
  popUpHeading.innerText = project.title;

  languageList.innerHTML = '';
  project.badges.forEach((badge) => {
    const li = document.createElement('li');
    li.innerText = badge;
    languageList.appendChild(li);
  });

  cardImg.src = project.imageSrc;
  cardImg.alt = `${project.title} project preview`;
  cardWorkDescription.innerText = project.description;

  if (project.demoLink) {
    liveBtn.style.display = '';
    liveBtn.innerHTML = `<a href="${project.demoLink}" target="_blank" rel="noopener">See Live <img src="img/see-live.svg" alt="See Live Icon Image"/></a>`;
  } else {
    liveBtn.style.display = 'none';
  }

  sourceBtn.innerHTML = `<a href="${project.source}" target="_blank" rel="noopener">See Source <img src="img/github-see-source.svg" alt="Github Icon Image"/></a>`;
};

// Handling pop up click events

const btnClosePopUp = document.querySelector('.close-pop-up');
const btnShowPopUp = document.querySelectorAll('.show-pop-up');

const showPopUp = function open(event) {
  const index = Number(event.currentTarget.dataset.project);
  populatePopUp(projectData[index]);
  popUp.classList.remove('hidden');
  overlay.classList.remove('hidden');
  document.querySelector('.fixed').style.position = 'relative';
};

const closePopUp = function close() {
  popUp.classList.add('hidden');
  overlay.classList.add('hidden');
  document.querySelector('.fixed').style.position = 'fixed';
};

btnShowPopUp.forEach((btn) => {
  btn.addEventListener('click', showPopUp);
});
btnClosePopUp.addEventListener('click', closePopUp);
overlay.addEventListener('click', closePopUp);
