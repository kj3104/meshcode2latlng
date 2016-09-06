/**
meshcode2LatLng.js

Copyright (c) 2016 Satoshi Kaji

This software is released under the MIT License.
http://opensource.org/licenses/mit-license.php
*/

function sliceMeshcode(meshcode){
  var p,u,q,v,r,w,m,n;
  meshcode = String(meshcode)
  p = parseInt(meshcode.slice(0,2));
  u = parseInt(meshcode.slice(2,4));
  q = parseInt(meshcode.slice(4,5));
  v = parseInt(meshcode.slice(5,6));
  r = parseInt(meshcode.slice(6,7));
  w = parseInt(meshcode.slice(7,8));
  m = parseInt(meshcode.slice(8,9));
  n = parseInt(meshcode.slice(9,10));
  return {"p":p,"q":q,"r":r,"u":u,"v":v,"w":w,"m":m,"n":n};
}
function meshcode2LatLng1st(meshcode){
  var south, west, north, east;
  var lat, lng;
  var code = sliceMeshcode(meshcode);
  lat = code.p/1.5 * 3600;
  lng = (code.u+100) * 3600;
  south = lat;
  west = lng;
  north = lat + 40 * 60;
  east = lng + 1 * 3600;
  return {"south":south/3600, "west":west/3600, "north":north/3600, "east":east/3600};
}
function meshcode2LatLng2nd(meshcode){
  var south, west, north, east;
  var lat, lng;
  var code = sliceMeshcode(meshcode);
  lat = code.p/1.5*3600 + code.q*5*60;
  lng = (code.u+100)*3600 + code.v*7.5*60;
  south = lat;
  west = lng;
  north = lat + 5 * 60;
  east = lng + 7.5 * 60;
  return {"south":south/3600, "west":west/3600, "north":north/3600, "east":east/3600};
}
function meshcode2LatLng3rd(meshcode){
  var south, west, north, east;
  var lat, lng;
  var code = sliceMeshcode(meshcode);

  lat = code.p/1.5*3600 + code.q*5*60 + code.r*30;
  lng = (code.u+100)*3600 + code.v*7.5*60 + code.w*45;
  south = lat;
  west = lng;
  north = lat + 30;
  east = lng + 45;
  return {"south":south/3600, "west":west/3600, "north":north/3600, "east":east/3600};
}

function meshcode2LatLngHalf(meshcode){
  var south, west, north, east;
  var lat, lng;
  var code = sliceMeshcode(meshcode);
  lat = code.p/1.5*3600 + code.q*5*60 + code.r*30;
  lng = (code.u+100)*3600 + code.v*7.5*60 + code.w*45;
  south = lat + (code.m < 3 ? 1 : 0) * 15;
  north = lat + (code.m < 3 ? 2 : 1) * 15;
  west = lng + (code.m%2 == 1 ? 1 : 0) * 22.5;
  east = lng + (code.m%2 == 1 ? 2 : 1) * 22.5;
  return {"south":south/3600, "west":west/3600, "north":north/3600, "east":east/3600};
}

function meshcode2LatLngQuarter(meshcode){
  var south, west, north, east;
  var lat, lng;
  var code = sliceMeshcode(meshcode);
  lat = code.p/1.5*3600 + code.q*5*60 + code.r*30;
  lng = (code.u+100)*3600 + code.v*7.5*60 + code.w*45;
  south = lat + ((code.m > 2 ? (code.n > 2 ? ((code.n + code.m) > 5 ? 3 : 2) : 2) : (code.n > 2 ? 1 : 0))) * 7.5;
  north = lat + ((code.m > 2 ? (code.n > 2 ? ((code.n + code.m) > 5 ? 3 : 2) : 2) : (code.n > 2 ? 1 : 0)) + 1) * 7.5;
  west = lng + ((code.m%2 == 1 ? (code.n%2 == 1 ? ((code.n%2 + code.m%2) > 1 ? 3 : 2) : 2) : (code.n%2 == 1 ? 1 : 0))) * 11.25;
  east = lng + ((code.m%2 == 1 ? (code.n%2 == 1 ? ((code.n%2 + code.m%2) > 1 ? 3 : 2) : 2) : (code.n%2 == 1 ? 1 : 0)) + 1) * 11.25;
  return {"south":south/3600, "west":west/3600, "north":north/3600, "east":east/3600};
}
