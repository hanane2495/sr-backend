var myPosition = null;
var coordonnee = null;

navigator.geolocation.getCurrentPosition(success,failure);

function success(position){
     lat = position.coords.latitude;
     long = position.coords.longitude;


    myPosition = position.coords; 
    console.log( " la distance entre votre position et ORAN", calculerDistance(myPosition.latitude, myPosition.longitude, 35.69112, -0.64167));


    coordonnee = new google.maps.LatLng(lat, long);

    var options = {
        zoom: 10,
        center: coordonnee//{lat:35.69112,lng:-0.64167}
    }

    var map = new google.maps.Map(document.getElementById('map'), options); 
    var marker = new google.maps.Marker({map : map, position : coordonnee});
    var infowindow = new google.maps.InfoWindow({content:'<h2>votre position</h2>'});
    

    marker.addListener('click', function(){
        infowindow.open(map, marker);
    });

    var markers =[
        {
            coords:{lat:35.3414,lng:-1.0478},
            content:'<h4>Ain temouchent rp</h4>'
        },
        {
            coords:{lat:35.3833,lng:-1.0833},
            content:'<h4>Ain temouchent sidi said</h4>'
        },
        {
            coords:{lat:35.2026,lng:-1.1986},
            content:'<h4>Ain temouchent Ain ki7el</h4>'
        }
    ];

    function ajouterMarker(props){
        var marker1 = new google.maps.Marker({map : map, position : props.coords});
        
        if(props.content){
            var infowindow = new google.maps.InfoWindow({
                content:props.content
            });

            marker1.addListener('click', function(){
                infowindow.open(map, marker1);
            });
        }
     }

     for(var i=0;i< markers.length; i++){
         ajouterMarker(markers[i]);
         console.log("distance = ",calculerDistance(myPosition.latitude, myPosition.longitude,markers[i].coords.lat, markers[i].coords.lng));


     }
 }

 function failure(error){
    // check if the user denied geolocation, or if there was any other problem
    if (error.code == error.PERMISSION_DENIED) {
        alert('Geolocation has been disabled on this page, please review your browser\'s parameters');
    } else {
        alert('Unable to find your position, try again later.');
    }  
 }

function calculerDistance(lat1,lng1,lat2,lng2){
    var pi = 0.017453292519943295;    // Math.PI / 180
    var cos = Math.cos;
    var a = 0.5 - cos((lat2 - lat1) * pi)/2 +
        cos(lat1 * pi) * cos(lat2 * pi) *
        (1 - cos((lng2 - lng1) * pi))/2;

    return 12742 * Math.asin(Math.sqrt(a)); // 2 * R; R = 6371 km

}



//35.69112
//-0.64167
 