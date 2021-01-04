module.exports = {
  siteTitle: 'Hi! I\'m Christian!',
  siteDescription: `Christian\'s Portfolio`,
  keyWords: ['gatsbyjs', 'react', 'curriculum'],
  authorName: 'Christian Gubesch',
  twitterUsername: 'greenteaSipper',
  githubUsername: 'gubesch',
  authorAvatar: '/images/avatar.jpeg',
  authorDescription: `Hello together, I'm a network and security engineer from Graz, Austria.
  Back in 2014 I made one of the best decicions of my life which was attending the <strong>Higher Technical Collage for Information Technology Villach</strong>.
  In my 5 year journy on the school my passion for the IT world began to grow.
  In 2020 i decided that I also wanted to start a bachelor study in the field of <strong>Business Informatics at the FH Campus02</strong> in Graz.
  Besides my passion for information technology I am really intrested in business and economics.
  In my freetime I like to do all kinds of sport, reading, spending time with my friends or grabbing a drink with them. <br/>
  Currently my motto is <strong>"Strive to be the best version of yourself!"</strong>`,
  skills: [
    {
      name: 'Network Engineering',
      level: 90
    },
    {
      name: 'Cyber Security',
      level: 80
    },
    {
      name: 'Software Development',
      level: 50
    },
    {
      name: 'System Administration',
      level: 65
    },
    {
      name: 'Financial Analysis',
      level: 5
    },
    /* more skills here */
  ],
  jobs: [
    /* more jobs here */
    {
      company: "BearingPoint",
      begin: {
        month: 'jan',
        year: '2020'
      },
      duration: null,
      occupation: "Network and Security Engineer",
      description: "I am part of the network and security team which is responsible for internal and external network and security operations."
  
    },
    {
      company: "Austrian Armed Forces",
      begin: {
        month: 'jul',
        year: '2019'
      },
      duration: '6 months',
      occupation: "Soldier",
      description: "I was part of the pioniere batallion, where I was in the telecommunications troop."
  
    },
  ],
  books: [
    {
      image: "/images/CodeBook.jpg",
      description: "A great book to dive into cryptography. It also includes self tests and quizes to enhance your learnings.",
      url: "https://www.amazon.de/Code-Book-Secrets-Behind-Codebreaking/dp/0385730624/ref=pd_bxgy_img_3/257-8755335-3371956?_encoding=UTF8&pd_rd_i=0385730624&pd_rd_r=71f57092-99a5-4225-a710-542244be93c2&pd_rd_w=M8za3&pd_rd_wg=3y5q3&pf_rd_p=4490d326-3239-499b-8c8a-0dd8d6ad582a&pf_rd_r=E25FN24827PJJSH60SRE&psc=1&refRID=E25FN24827PJJSH60SRE"
    },
    /* more books items here */
  ],
  social: {
    twitter: "https://twitter.com/greenteaSipper",
    linkedin: "https://www.linkedin.com/in/christian-gubesch",
    github: "https://github.com/gubesch",
    email: "christian.gubesch@gmail.com"
  },
  siteUrl: 'https://santosfrancisco.github.io/gatsbystarter-cv',
  pathPrefix: '/gatsby-starter-cv', // Note: it must *not* have a trailing slash.
  siteCover: '/images/cover.jpeg',
  googleAnalyticsId: 'UA-000000000-1',
  background_color: '#ffffff',
  theme_color: '#25303B',
  fontColor: "#000000cc",
  enableDarkmode: true, // If true, enables dark mode switch
  display: 'minimal-ui',
  icon: 'src/assets/gatsby-icon.png',
  headerLinks: [
    {
      label: 'Home',
      url: '/',
    },
    {
      label: 'Books',
      url: '/books',
    },
  ]
}