# meshcode2LatLng

## Description
メッシュコードから緯度経度に変換するライブラリです。

## Demo of Google maps api
### 1次メッシュ
```js
var location =  meshcode2LatLng1st(5339);
new google.maps.Rectangle({
  strokeColor: '#ff0000',
  strokeOpacity: 0.8,
  strokeWeight: 2,
  fillColor: '#ff0000',
  fillOpacity: 0.35,
  map: map,
  bounds: {
    north: location.north,
    south: location.south,
    west: location.west,
    east: location.east
  }
});
```

### 2次メッシュ
```js
var location =  meshcode2LatLng2nd(533946);
new google.maps.Rectangle({
  strokeColor: '#ff0000',
  strokeOpacity: 0.8,
  strokeWeight: 2,
  fillColor: '#ff0000',
  fillOpacity: 0.35,
  map: map,
  bounds: {
    north: location.north,
    south: location.south,
    west: location.west,
    east: location.east
  }
});
```

### 3次メッシュ
```js
var location =  meshcode2LatLng3rd(53394611);
new google.maps.Rectangle({
  strokeColor: '#ff0000',
  strokeOpacity: 0.8,
  strokeWeight: 2,
  fillColor: '#ff0000',
  fillOpacity: 0.35,
  map: map,
  bounds: {
    north: location.north,
    south: location.south,
    west: location.west,
    east: location.east
  }
});
```

### 1/2メッシュ
```js
var location =  meshcode2LatLngHalf(533946113);
new google.maps.Rectangle({
  strokeColor: '#ff0000',
  strokeOpacity: 0.8,
  strokeWeight: 2,
  fillColor: '#ff0000',
  fillOpacity: 0.35,
  map: map,
  bounds: {
    north: location.north,
    south: location.south,
    west: location.west,
    east: location.east
  }
});
```

### 1/4メッシュ
```js
var location =  meshcode2LatLngQuarter(5339461132);
new google.maps.Rectangle({
  strokeColor: '#ff0000',
  strokeOpacity: 0.8,
  strokeWeight: 2,
  fillColor: '#ff0000',
  fillOpacity: 0.35,
  map: map,
  bounds: {
    north: location.north,
    south: location.south,
    west: location.west,
    east: location.east
  }
});
```

## Licence

[MIT](https://github.com/luca3104/meshcode2LatLng/blob/master/LICENSE)

## Author

[luca3104](https://github.com/luca3104)
