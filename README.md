# meshcode2latlng
[![npm version](https://badge.fury.io/js/meshcode2latlng.svg)](https://badge.fury.io/js/meshcode2latlng)

## Installation

### client side
```html
<script type="text/javascript" src="./lib/meshcode2latlng.js"></script>
<script type="text/javascript">
  var loc = meshcode2latlng.first(5339);
//  loc = { south: 35.333333333333336,
//          west: 139,
//          north: 36.00000000000001,
//          east: 140 }
</script>
```

### server side
`npm install meshcode2latlng`　でインストールをします。
```js
const meshcode2latlng = require('meshcode2latlng');
var loc = meshcode2latlng.first(5339);
//  loc = { south: 35.333333333333336,
//          west: 139,
//          north: 36.00000000000001,
//          east: 140 }
```

## Description
メッシュコードから緯度経度に変換するライブラリです。(世界測地系 WGS84)

<img src="https://github.com/luca3104/meshcode2LatLng/blob/screenshot/screenshots/screenshot.png" width=512>

## Demo of Google maps api
### 1次メッシュ
![1st](https://github.com/luca3104/meshcode2LatLng/blob/screenshot/screenshots/1st.png)
```js
var location =  meshcode2latlng.first(5339);
new google.maps.Rectangle({
  strokeColor: '#ff0000',
  fillColor: '#ff0000',
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
![2nd](https://github.com/luca3104/meshcode2LatLng/blob/screenshot/screenshots/2nd.png)
```js
var location =  meshcode2latlng.second(533946);
new google.maps.Rectangle({
  strokeColor: '#ff0000',
  fillColor: '#ff0000',
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
![3rd](https://github.com/luca3104/meshcode2LatLng/blob/screenshot/screenshots/3rd.png)
```js
var location =  meshcode2latlng.third(53394611);
new google.maps.Rectangle({
  strokeColor: '#ff0000',
  fillColor: '#ff0000',
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
![1/2](https://github.com/luca3104/meshcode2LatLng/blob/screenshot/screenshots/1:2.png)
```js
var location =  meshcode2latlng.half(533946113);
new google.maps.Rectangle({
  strokeColor: '#ff0000',
  fillColor: '#ff0000',
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
![1/4](https://github.com/luca3104/meshcode2LatLng/blob/screenshot/screenshots/1:4.png)
```js
var location =  meshcode2latlng.quater(5339461132);
new google.maps.Rectangle({
  strokeColor: '#ff0000',
  fillColor: '#ff0000',
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
