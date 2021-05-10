import moment from 'moment';
import mock from 'src/utils/mock';

mock.onGet('/api/projects/account/statistics').reply(200, {
  statistics: {
    payout: '4,250',
    projects: '12,500',
    visitors: '230',
    watching: '5'
  }
});

mock.onGet('/api/projects/account/projects').reply(200, {
  projects: [
    {
      id: '5e8dcf105a6732b3ed82cf7a',
      title: 'Ten80 Web Design',
      media: '/static/images/projects/project_3.png',
      author: {
        id: '5e86809283e28b96d2d38537',
        avatar: '/static/images/avatars/avatar_6.png',
        name: 'Katarina Smith'
      },
      type: 'Full-Time',
      location: 'Europe',
      technology: 'Angular JS',
      isLiked: true,
      likes: 57,
      rating: 3,
      subscribers: 5,
      updatedAt: moment()
        .subtract(24, 'minutes')
        .toDate()
        .getTime()
    }
  ]
});

mock.onGet('/api/projects/account/todos').reply(200, {
  todos: [
    {
      id: '5e8dd0b59fb490099917eb29',
      title: 'Finish the proposal design and contract for the client ASAP',
      deadline: moment()
        .subtract(2, 'days')
        .toDate()
        .getTime(),
      done: false
    },
    {
      id: '5e8dd0ba89c3f86059b41383',
      title: 'Finish the proposal design and contract for the client ASAP',
      deadline: moment()
        .toDate()
        .getTime(),
      done: false
    },
    {
      id: '5e8dd0c028284550358972c7',
      title: 'Upload the files for the client @Adrian Stefan with the fonts, assets exported and all the fancy svgs',
      deadline: moment()
        .add(2, 'days')
        .toDate()
        .getTime(),
      done: false
    },
    {
      id: '5e8dd0c549ceb790f8c41e96',
      title: 'Re-write the card component with hooks and context',
      deadline: moment()
        .add(5, 'days')
        .toDate()
        .getTime(),
      done: false
    },
    {
      id: '5e8dd0cb2fb6bf63b2e7d298',
      title: 'Send proposal for the fintech project',
      deadline: moment()
        .add(5, 'days')
        .toDate()
        .getTime(),
      done: false
    },
    {
      id: '5e8dd0d2ad70962ca35da534',
      title: 'Create todo app with react hooks just to get a better understanding of the concept',
      deadline: moment()
        .add(7, 'days')
        .toDate()
        .getTime(),
      done: true
    }
  ]
});

mock.onGet('/api/projects/projects').reply(200, {
  projects: [
    {
      id: '5e8dcef8f95685ce21f16f3d',
      title: 'Mella Full Screen Slider',
      media: '/static/images/projects/project_1.png',
      description: `
We're looking for experienced Developers and Product Designers to
come aboard and help us build succesful businesses through software.
      `,
      author: {
        id: '5e887b7602bdbc4dbb234b27',
        name: 'Anje Keizer',
        avatar: '/static/images/avatars/avatar_5.png'
      },
      type: 'Full-Time',
      location: 'Europe',
      technology: 'Vue JS',
      isLiked: true,
      likes: 7,
      rating: 5,
      subscribers: 2,
      updatedAt: moment()
        .subtract(24, 'minutes')
        .toDate()
        .getTime()
    },
    {
      id: '5e8dcf076c50b9d8e756a5a2',
      title: 'Dashboard Design',
      media: '/static/images/projects/project_2.png',
      description: `
We're looking for experienced Developers and Product Designers to
come aboard and help us build succesful businesses through software.
      `,
      author: {
        id: '5e887d0b3d090c1b8f162003',
        name: 'Emilee Simchenko',
        avatar: '/static/images/avatars/avatar_9.png'
      },
      type: 'Full-Time',
      location: 'Europe',
      technology: 'Angular',
      isLiked: false,
      likes: 12,
      rating: 4.5,
      subscribers: 3,
      updatedAt: moment()
        .subtract(1, 'hour')
        .toDate()
        .getTime()
    },
    {
      id: '5e8dcf105a6732b3ed82cf7a',
      title: 'Ten80 Web Design',
      media: '/static/images/projects/project_3.png',
      description: `
We're looking for experienced Developers and Product Designers to
come aboard and help us build succesful businesses through software.
      `,
      author: {
        id: '5e88792be2d4cfb4bf0971d9',
        name: 'Elliott Stone',
        avatar: '/static/images/avatars/avatar_10.png'
      },
      type: 'Full-Time',
      location: 'Europe',
      technology: 'Ember JS',
      isLiked: true,
      likes: 18,
      rating: 4.7,
      subscribers: 8,
      updatedAt: moment()
        .subtract(16, 'hour')
        .toDate()
        .getTime()
    },
    {
      id: '5e8dcf1cc7155d0e947dc27f',
      title: 'Neura e-commerce UI Kit',
      media: '/static/images/projects/project_4.png',
      description: `
We're looking for experienced Developers and Product Designers to
come aboard and help us build succesful businesses through software.
      `,
      author: {
        id: '5e8877da9a65442b11551975',
        name: 'Shen Zhi',
        avatar: '/static/images/avatars/avatar_11.png'
      },
      type: 'Full-Time',
      location: 'Europe',
      technology: 'Java Spring',
      isLiked: false,
      likes: 1,
      rating: 2,
      subscribers: 10,
      updatedAt: moment()
        .subtract(3, 'days')
        .toDate()
        .getTime()
    },
    {
      id: '5e8dcf252313876001e83221',
      title: 'Administrator Dashboard',
      media: '/static/images/projects/project_5.jpg',
      description: `
We're looking for experienced Developers and Product Designers to
come aboard and help us build succesful businesses through software.
      `,
      author: {
        id: '5e887ac47eed253091be10cb',
        name: 'Cao Yu',
        avatar: '/static/images/avatars/avatar_3.png'
      },
      type: 'Full-Time',
      location: 'Europe',
      technology: 'Django',
      isLiked: false,
      likes: 7,
      rating: 5,
      subscribers: 2,
      updatedAt: moment()
        .subtract(7, 'days')
        .toDate()
        .getTime()
    },
    {
      id: '5e8dcf4250d77c954b04902e',
      title: 'Kalli UI Kit',
      media: '',
      description: `
We're looking for experienced Developers and Product Designers to
come aboard and help us build succesful businesses through software.
      `,
      author: {
        id: '5e887b7602bdbc4dbb234b27',
        name: 'Anje Keizer',
        avatar: '/static/images/avatars/avatar_5.png'
      },
      type: 'Full-Time',
      location: 'Europe',
      technology: 'React JS',
      isLiked: true,
      likes: 4,
      rating: 4.2,
      subscribers: 12,
      updatedAt: moment()
        .subtract(8, 'days')
        .toDate()
        .getTime()
    }
  ]
});

mock.onGet('/api/projects/projects/1').reply(200, {
  project: {
    active: true,
    endDate: moment()
      .add(14, 'days')
      .toDate()
      .getTime(),
    title: 'Develop a PDF Export App',
    author: {
      id: '5e887d0b3d090c1b8f162003',
      name: 'Emilee Simchenko',
      avatar: '/static/images/avatars/avatar_9.png',
      bio: 'We build beautiful functional themes for web professionals'
    },
    brief: `
Design files are attached in the files tab.

Develop the web app screens for our product called "PDFace". Please look at the wireframes, system activity workflow and read the section above to understand what we're trying to archive.

There's not many screens we need designed, but there will be modals and various other system triggered events that will need to be considered.

The project has been created in Sketch so let me know if there are any problems opening this project and I'll try to convert into a usable file.
    `,
    price: '12,500',
    currency: 'USD',
    tags: ['React JS'],
    members: [
      {
        id: '5e887a62195cc5aef7e8ca5d',
        name: 'Ekaterina Tankova',
        avatar: '/static/images/avatars/avatar_2.png',
        bio: 'Front End Developer'
      },
      {
        id: '5e887ac47eed253091be10cb',
        name: 'Cao Yu',
        avatar: '/static/images/avatars/avatar_3.png',
        bio: 'UX Designer'
      },
      {
        id: '5e887b7602bdbc4dbb234b27',
        name: 'Anje Keizer',
        avatar: '/static/images/avatars/avatar_5.png',
        bio: 'Copyright'
      }
    ],
    files: [
      {
        id: '5e8dd0721b9e0fab56d7238b',
        name: 'example-project1.jpg',
        url: '/static/images/projects/project_4.png',
        mimeType: 'image/png',
        size: 1024 * 1024 * 3
      },
      {
        id: '5e8dd0784431995a30eb2586',
        name: 'docs.zip',
        url: '#',
        mimeType: 'application/zip',
        size: 1024 * 1024 * 25
      },
      {
        id: '5e8dd07cbb62749296ecee1c',
        name: 'example-project2.jpg',
        url: '/static/images/projects/project_1.png',
        mimeType: 'image/png',
        size: 1024 * 1024 * 2
      }
    ],
    activities: [
      {
        id: '5e8dd0828d628e6f40abdfe8',
        subject: 'Project owner',
        type: 'upload_file',
        description: 'has uploaded a new file',
        createdAt: moment()
          .subtract(23, 'minutes')
          .toDate()
          .getTime()
      },
      {
        id: '5e8dd0893a6725f2bb603617',
        subject: 'Adrian Stefan',
        type: 'join_team',
        description: 'joined team as a Front-End Developer',
        createdAt: moment()
          .subtract(2, 'hours')
          .toDate()
          .getTime()
      },
      {
        id: '5e8dd08f44603e3300b75cf1',
        subject: 'Alexndru Robert',
        type: 'join_team',
        description: 'joined team as a Full Stack Developer',
        createdAt: moment()
          .subtract(9, 'hours')
          .toDate()
          .getTime()
      },
      {
        id: '5e8dd0960f3f0fe04e64d8f4',
        subject: 'Project owner',
        type: 'price_change',
        description: 'raised the project budget',
        createdAt: moment()
          .subtract(2, 'days')
          .toDate()
          .getTime()
      },
      {
        id: '5e8dd09db94421c502c53d13',
        subject: 'Contest',
        type: 'contest_created',
        description: 'created',
        createdAt: moment()
          .subtract(4, 'days')
          .toDate()
          .getTime()
      }
    ],
    subscribers: [
      {
        id: '5e887a62195cc5aef7e8ca5d',
        name: 'Ekaterina Tankova',
        avatar: '/static/images/avatars/avatar_2.png',
        cover: '/static/images/covers/cover_2.jpg',
        commonContacts: 12,
        labels: [
          'User Experience',
          'FrontEnd development',
          'HTML5',
          'VueJS',
          'ReactJS'
        ]
      },
      {
        id: '5e887ac47eed253091be10cb',
        name: 'Cao Yu',
        avatar: '/static/images/avatars/avatar_3.png',
        cover: '/static/images/covers/cover_3.jpg',
        commonContacts: 5,
        labels: [
          'User Interface',
          'FullStack development',
          'Angular',
          'ExpressJS'
        ]
      },
      {
        id: '5e86809283e28b96d2d38537',
        name: 'Katarina Smith',
        avatar: '/static/images/avatars/avatar_6.png',
        cover: '/static/images/covers/cover_1.jpg',
        commonContacts: 17,
        labels: [
          'BackEnd development',
          'Firebase',
          'MongoDB',
          'ExpressJS'
        ]
      }
    ],
    deadline: moment()
      .add(7, 'days')
      .toDate()
      .getTime(),
    updatedAt: moment()
      .subtract(23, 'minutes')
      .toDate()
      .getTime()
  }
});
