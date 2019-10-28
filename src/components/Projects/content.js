const projectContent = [
  {
    id: 1,
    imageURL: '/images/split_together.PNG',
    github: 'https://github.com/kvsuen/split-together',
    projectTitle: 'Split Together',
    projectDescription:
      'Split Together easily splits receipts and settles the bill at the snap of the camera. Users take a picture of a receipt and the app then uses image recognition to present an interactive screen where everyone at the table can select their ordered item.',
    stack: [
      'React',
      'Python/Flask',
      'AWS',
      'SocketIO',
      'PostgreSQL'
    ]
  },
  {
    id: 2,
    imageURL: '/images/scheduler.PNG',
    github: 'https://github.com/kvsuen/scheduler',
    projectTitle: 'Interview Scheduler',
    projectDescription:
      'A single page React application that allows users to book and cancel interview appointments between Monday and Friday. Users are able to view the number of appointment slots available per day and can add appointments by choosing an empty time slot, inputting the interviewee name, and then selecting an interviewer.',
    stack: ['React', 'WebSockets', 'Node.js', 'Express', 'PostgreSQL']
  },
  {
    id: 3,
    imageURL: '/images/ecommerce.PNG',
    projectTitle: 'Jungle - E-commerce Web App',
    github: 'https://github.com/kvsuen/jungle-rails',
    projectDescription:
      'A mini e-commerce application built with Rails for purposes of learning Rails by example. An existing code base was inherited and then bug fixes, automated testing, and features (admin security, user authentication, UI improvements) were added to the application.',
    stack: ['Ruby', 'Rails', 'Stripe', 'PostgreSQL']
  },
  {
    id: 4,
    imageURL: '/images/restaurant.PNG',
    github: 'https://github.com/kvsuen/Restaurant-Pick-up-App',
    projectTitle: 'Twilio SMS Food Ordering App',
    projectDescription:
      "A food ordering experience for a single restaurant. Hungry clients of this fictitious restaurant can visit the website, select one or more dishes and place an order for pick-up. The restaurant and client are both notified via SMS using Twilio's API service.",
    stack: ['Node.js', 'Express', 'jQuery', 'PostgresSQL', 'Twilio API']
  },
  {
    id: 5,
    imageURL: '/images/discord_post.PNG',
    github: 'https://github.com/kvsuen/instagram-discord-bot',
    projectTitle: 'Instagram-Discord Bot',
    projectDescription:
      'An Instagram-Discord bot that provides notifications to Discord channels when a specified Instagram fan page makes a new post. The bot automatically checks for new posts at set intervals and when a new post is found, it will post to Discord the details & hyperlink to the Instagram page.',
    stack: ['Python']
  },
  {
    id: 6,
    imageURL: '/images/satellitego.PNG',
    github: 'https://github.com/kvsuen/satellite-go',
    projectTitle: 'Satellite Go',
    projectDescription:
      'Educational app for the 2019 NASA Hackathon. This app enables people to identify and learn about satellites that are currently above them, and also save the satellites to a personal collection. N2YO and Wikipedia API are used to provide information on satellites including photo, launch date, altitude, and a summary.',
    stack: ['React', 'Node.js', 'Express', 'PostgreSQL']
  }
];

export default projectContent;
