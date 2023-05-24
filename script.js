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

// Project and Pop up Data

const projectData = [{
  imageSrc: 'img/post-stories.svg',
  title: 'Multi-Post Stories',
  description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text',
  badge1: 'css',
  badge2: 'Html',
  badge3: 'bootstrap',
  badge4: 'Ruby',
},
{
  imageSrc: 'img/snapshoot-portfolio.svg',
  title: 'Multi Post Stories',
  badge1: 'Html',
  badge2: 'Bootstrap',
  badge3: 'Ruby on Rails',
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent ",
  demoLink: 'https://tarto-4.github.io',
  source: 'https://github.com/Tarto-4/Tarto-4.github.io',

},
];