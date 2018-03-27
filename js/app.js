// Dom7
var $ = Dom7;

// Theme
var theme = 'auto';
if (document.location.search.indexOf('theme=') >= 0) {
  theme = document.location.search.split('theme=')[1].split('&')[0];
}

// Init App
var app = new Framework7({
  id: 'io.framework7.testapp',
  root: '#app',
  theme: theme,
  data: function () {
    return {
      user: {
        firstName: 'John',
        lastName: 'Doe',
      },
    };
  },
  methods: {
    helloWorld: function () {
      app.dialog.alert('Hello World!');
    },
  },
  routes: routes,
  vi: {
    placementId: 'pltd4o7ibb9rc653x14',
  },
});

var jsonglobal =JSON.parse("{}");
var currentValue = 0;
function escoge(myRadio) {

    for (var i in jsonglobal)
    {
      if (jsonglobal[i].id==myRadio.value){
        $('#opcionelegida').val(jsonglobal[i].name);
        currentValue = jsonglobal[i].id;
        break;
      }
    }
}
