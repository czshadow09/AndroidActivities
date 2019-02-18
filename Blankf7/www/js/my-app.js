var app = new Framework7({
  // App root element
  root: '#app',
  // App Name
  name: 'My App',
  // App id
  id: 'com.myapp.test',
  // Enable swipe panel
  panel: {
    swipe: 'left',
  },
  // Add default routes
  routes: [
    {
      path: '/schedule/',
      url: 'schedule.html',
    },
    {
      path: '/afritada/',
      url: 'afritada.html',
    },
    {
      path: '/bulalo/',
      url: 'bulalo.html',
    },
    {
      path: '/kinilaw/',
      url: 'kinilaw.html',
    },
    {
      path: '/sisig/',
      url: 'sisig.html',
    },
    {
      path: '/tinola/',
      url: 'tinola.html',
    },
    {
      path: '/visitors/',
      url: 'visitors.html',
    },
    {
      path: '/index2/',
      url: 'index2.html',
    },
    {
      path: '/menu/',
      url: 'menu.html',
    },
    {
      path: '/food/',
      url: 'food.html',
    },
    {
      path: '/dresses/',
      url: 'dresses.html',
    },
    {
      path: '/aboutus/',
      url: 'aboutus.html',
    },
    {
      path: '/twitter/',
      url: 'https://twitter.com/NizeLime',
    },
  ],
  
  
  // ... other parameters
});

var mainView = app.views.create('.view-main');