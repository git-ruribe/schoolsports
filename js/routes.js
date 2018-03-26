var routes = [
  // Index page
  {
    path: '/',
    url: './index.html',
    name: 'home',
  },

  {
    path: '/chatlist/',
    url: './pages/chatlist.html',
    name: 'chatlist',
  },
  {
    path: '/messages/',
    url: './pages/whiteboard.html',
    name: 'messages',
  },
  {
    path: '/photos/',
    url: './pages/photos.html',
    name: 'photos',
  },
  {
    path: '/grupo/',
    url: './pages/grupo.html',
    name: 'grupo',
  },
  {
    path: '/board/',
    url: './pages/whiteboard.html',
    name: 'board',
  },
  {
    path: '/partido/',
    url: './pages/partido.html',
    name: 'partido',
  },
  {
    path: '/calcard1/',
    url: './pages/calcard1.html',
    name: 'calcard1',
  },
  {
    path: '/testapi/',
    componentUrl: './pages/testAPI.html',
  },
  // Color Themes
  {
    path: '/color-themes/',
    componentUrl: './pages/color-themes.html',
  },

  // Page Loaders
  {
    path: '/page-loader-template7/:user/:userId/:posts/:postId/',
    templateUrl: './pages/page-loader-template7.html',
    // additional context
    options: {
      context: {
        foo: 'bar',
      },
    },
  },
  {
    path: '/page-loader-component/:user/:userId/:posts/:postId/',
    componentUrl: './pages/page-loader-component.html',
    // additional context
    options: {
      context: {
        foo: 'bar',
      },
    },
  },

  // Default route (404 page). MUST BE THE LAST
  {
    path: '(.*)',
    url: './pages/404.html',
  },
];
