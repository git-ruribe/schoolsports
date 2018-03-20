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
    url: './pages/messages.html',
    name: 'messages',
  },
  {
    path: '/photos/',
    url: './pages/photos.html',
    name: 'photos',
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
