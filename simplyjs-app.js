//Copyright 2014 Vaibhav Viswanathan 
//Licensed under GNU General Public License, version 2 (GPL-2.0)
/* Pebble Tides is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    Pebble Tides is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.*/
    

// Displays introductory information about the app
simply.title("ParkSpot");
simply.vibe("short");
simply.subtitle("Click select to flag your GPS location");

//flags and displays the location upon click
simply.on('singleClick', function(e) {
	if(e.button == "select"){
		navigator.geolocation.getCurrentPosition(function(pos) {
    var coords = pos.coords;
    var long = coords.longitude;
    var lat = coords.latitude;
    long = Math.round(long * 100000) / 100000;
    lat = Math.round(lat * 100000) / 100000;
    //simply.title(long);
    //simply.title(lat);
    simply.text({ title: "Coordinates", subtitle: 'latitude = ' + lat + "\n" + 'longitude =' + long });
  });
  }
});
