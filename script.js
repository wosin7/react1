
 var movies = [
    {
      id: 1,
      title: 'Harry Potter',
      desc: 'film o czarodzieju',
      pict: 'http://placehold.it/150x300'
    },
    {
      id: 2,
      title: 'Król Lew',
      desc: 'Film o królu sawanny',
      pict: 'http://placehold.it/150x300'
    },
    { 
        id: 2,
        title: 'Shrek',
        desc: 'Film o ogrze',
        pict: 'http://placehold.it/150x300'
    },
    {
    id: 4,
    title: 'Pulp Ficktion',
    desc: 'Taki film',
    pict: 'http://placehold.it/150x300'
    },
    {
    id: 5,
    title: 'King Kong',
    desc: 'Film o dużej małpie',
    pict: 'http://placehold.it/150x300'
    }
  ];
  var moviesElements = movies.map(function(movie) {
    return React.createElement('li', {key: movie.id},
        React.createElement('h2', {}, movie.title),
        React.createElement('p', {}, movie.desc),
        React.createElement('img', {src:movie.pict})
      );
  });
  var element =
  React.createElement('div', {},
    React.createElement('h1', {}, 'Lista filmów'),
    React.createElement('ul', {}, moviesElements)
  );
  ReactDOM.render(element, document.getElementById('app'));
  