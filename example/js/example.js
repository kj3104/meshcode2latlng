
var map;
function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: 35.681298 , lng: 139.766247 },
		zoom: 12
	});
  drawMesh()
}

function drawMesh(){
  var code = 5339;
  var loc =  meshcode2latlng.first(code);
  new google.maps.Rectangle({
    strokeColor: '#ff0000',
    fillColor: '#ff0000',
    map: map,
    bounds: {
      south: loc.south,
      west: loc.west,
      north: loc.north,
      east: loc.east
    }
  });
  var code = 533900;
  for(var i=0;i<8;i++){
    var loc =  meshcode2latlng.second(code);
    var rectangle = new google.maps.Rectangle({
      strokeColor: '#00ffff',
      fillColor: '#00ffff',
      map: map,
      bounds: {
        south: loc.south,
        west: loc.west,
        north: loc.north,
        east: loc.east
      }
    });
    code = code + 11;
  }
  var code = 53394600;
  for(var i=0;i<10;i++){
    var loc =  meshcode2latlng.third(code);
    var rectangle = new google.maps.Rectangle({
      strokeColor: '#00ff00',
      fillColor: '#00ff00',
      map: map,
      bounds: {
        south: loc.south,
        west: loc.west,
        north: loc.north,
        east: loc.east
      }
    });
    code = code + 11;
  }
  var code = 533946121;
  for(var i=0;i<4;i++){
    var loc =  meshcode2latlng.half(code);
    new google.maps.Rectangle({
      strokeColor: '#0000ff',
      fillColor: '#0000ff',
      map: map,
      bounds: {
        south: loc.south,
        west: loc.west,
        north: loc.north,
        east: loc.east
      }
    });
    code = code + 1;
  }
	var code = 5339461331;
  for(var i=0;i<4;i++){
  	var loc =  meshcode2latlng.quater(code);
  	var rectangle = new google.maps.Rectangle({
  		strokeColor: '#ffff00',
  		fillColor: '#ffff00',
  		map: map,
  		bounds: {
  			south: loc.south,
  			west: loc.west,
  			north: loc.north,
  			east: loc.east
  		}
  	});
    code = code + 1;
  }

}
