module.exports = {
  title: `sryn.netlify.app 🎇`,
  description: `ryoon workplace`,
  language: `ko`, // `ko`, `en` => currently support versions for Korean and English
  siteUrl: `https://sryn.netlify.app/`,
  ogImage: `/sryn2.png`, // Path to your in the 'static' folder
  comments: {
    utterances: {
      repo: `SphereSRYN/sryn`, // `zoomkoding/zoomkoding-gatsby-blog`,
    },
  },
  ga: 'G-NH1R08PPRT', // Google Analytics Tracking ID
  author: {
    name: `Seryoon Cheon`,
    bio: {
      role: `deveolper`,
      description: ['explore.', 'learn.', 'create.'],
      thumbnail: 'sryn2.png', // Path to the image in the 'asset' folder
    },
    social: {
      github: `https://github.com/SphereSRYN`,
      linkedIn: ``,
      email: `sphere.sryn@gmail.com`, // ``,
    },
  },

  // metadata for About Page
  about: {
    timestamps: [
      // =====       [Timestamp Sample and Structure]      =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!) =====
      {
        date: '',
        activity: '',
        links: {
          github: '',
          post: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // ========================================================
      // ========================================================
      {
        date: '2018.03 ~09',
        activity: '비트캠프 자바 웹개발 과정 수료',
        links: {
          post: 'https://seryuncheon.github.io//about/',
        },
      },
      {
        date: '2019.03 ~2021.07',
        activity: 'java기반 개발자 취업 및 유지보수& 기능 개선 업무',
        // links: {
        //   post: '/gatsby-starter-zoomkoding-introduction',
        //   github: 'https://github.com/zoomkoding/zoomkoding-gatsby-blog',
        //   demo: 'https://www.zoomkoding.com',
        // },
      },
      {
        date: '2021.12 ~',
        activity: '프론트엔드 세계 탐닉中',
        // links: {
        //   post: '/gatsby-starter-zoomkoding-introduction',
        //   github: 'https://github.com/zoomkoding/zoomkoding-gatsby-blog',
        //   demo: 'https://www.zoomkoding.com',
        // },
      },

    ],

    projects: [
      // =====        [Project Sample and Structure]        =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!)  =====
      {
        title: '',
        description: '',
        techStack: ['', ''],
        thumbnailUrl: '',
        links: {
          post: '',
          github: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // ========================================================
      // ========================================================
      // {
      //   title: '개발 블로그 테마 개발',
      //   description:
      //     '개발 블로그를 운영하는 기간이 조금씩 늘어나고 점점 많은 생각과 경험이 블로그에 쌓아가면서 제 이야기를 담고 있는 블로그를 직접 만들어보고 싶게 되었습니다. 그동안 여러 개발 블로그를 보면서 좋았던 부분과 불편했던 부분들을 바탕으로 레퍼런스를 참고하여 직접 블로그 테마를 만들게 되었습니다.',
      //   techStack: ['gatsby', 'react'],
      //   thumbnailUrl: 'blog.png',
      //   links: {
      //     post: '/gatsby-starter-zoomkoding-introduction',
      //     github: 'https://github.com/zoomkoding/zoomkoding-gatsby-blog',
      //     demo: 'https://www.zoomkoding.com',
      //   },
      // },
    ],
  },
};
