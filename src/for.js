const songs = [{
    name: 'El triste',
    artist: 'Jose Jose',
    url: 'http://spotify.com'
  }, {
    name: 'Almohada',
    artist: 'Jose Jose',
    url: 'http://spotify.com'
  },{
    name: 'Gavilan o Paloma',
    artist: 'Jose Jose',
    url: 'http://spotify.com'
  }]
  //*ngFor="let song of songs"
  for(let song of songs){
    console.log(song);
  }