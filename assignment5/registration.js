/* David Zak 158458174 Section B */
window.onload = function (){
	//sets errorstate to none
	/*flaguser = false;
	flagpass = false;
	flagzip = false;
	flagcity = false;
	flagfname = false;	
	flaglname = false;
	flagstreet = false;	
	flagunit = false;*/
	flagarray = [flaguser = false, flagpass = false, flagzip = false, flagcity = false,
	flagfname = false, flaglname = false,
	flagstreet = false,	flagunit = false];
	
}



 function clearErrors(){
var a = document.getElementById('errors');
var inner = document.getElementById("innerErrors");
inner.innerHTML = "";
// resets errors none
for(var i = 0; i < flagarray.length; i++){
	flagarray[i] = false;
	
}
}


//password check validation
function checkPassword(){
	var check = document.getElementById('cpass'); // check to see if error message already exists if so clear it
	var uni = true;
	if (check) {
		check.innerHTML = "";
		flagarray[1] = false;
		var uni = false;
	}
	var b = document.getElementById('password1').value;
	var c = document.getElementById('password').value;
	var str = b.length;
	
	var hasUpper;
	var	hasD;
	for(var i = 0; i < str; i++){
	
		if(b[i] >= 'A' && 'Z' >= b[i]){
			hasUpper = true;
			
		}
		if(b[i] >= '0' && '9' >= b[i]){
			hasD = true;	
		}
	}
	if(str < 8 || c != b || hasD != true || hasUpper != true){
		
		var a = document.getElementById('innerErrors');
		if(uni == true){
		var temp = document.createElement('div');
		temp.id = 'cpass'; }
		else{
		var temp = document.getElementById('cpass');}
		
		temp.innerHTML += "Password must be atleast 8 characters and a contain digit and capital letter, Passwords must match <br><br>";
		a.appendChild(temp);
		
		flagarray[1] = true;
		}
	}

function checkUser(){
	var check = document.getElementById('userz'); // check to see if error message already exists if so clear it
	var uni = true;
	if (check){
		check.innerHTML = "";
		flagarray[0] = false;
		uni = false;
	}
	var luser = document.getElementsByName('username')[0].value;
	user = luser.toUpperCase();
	console.log(user);
	if (((user.length < 6 || (user[0] < "A" || user[0] > "Z")) && flagarray[0] == false )){

		var a = document.getElementById('innerErrors');
		if(uni == true){var temp = document.createElement('div');
		temp.id = 'userz';}
		else{ var temp = document.getElementById("userz"); }
		temp.innerHTML += "Username must start with a letter and be atleast 6 characters <br><br>";
		a.appendChild(temp);
		
		flagarray[0] = true;	
	}
		
}


function checkZip(){
	var check = document.getElementById('zipz'); // check to see if error message already exists if so clear it
	var uni = true;
	if (check) {
		check.innerHTML = "";
		flagarray[2] == false
		uni = false;
	}
	var tzip = document.getElementsByName("zip")[0].value;
	
	var error = false;
	
	var zip = tzip.toUpperCase();
	var zip = zip.trim();
	console.log(zip);
	if(zip.length != 6){
		error = true;
	}
	if (error != true){
		
		for(var i= 0; i<6; i++){
		if (i%2 == 0 && (zip[i] < "A" || zip[i] > "Z")){
			error = true;
		}
		if(i%2 == 1 && isNaN(zip[i])){
			error = true;
		}
		
	}}// exit for loop
	if (error == true){
		var a = document.getElementById('innerErrors');
		if(uni == true){
		var temp = document.createElement('div');
		temp.id = 'zipz';}else{ var temp = document.getElementById('zipz');}
		temp.innerHTML += "Must be valid zip code with no spaces or hypens <br><br>";
		a.appendChild(temp);
		
		flagarray[2] = true;
		
	}
	
}
function checkCity(){
	var check = document.getElementById('cityz'); // check to see if error message already exists if so clear it
	var uni = true;
	if (check) {
		flagarray[3] = false;	
		check.innerHTML = "";
		uni = false;
	}
var city1 = document.getElementsByName("city")[0].value;
var city = city1.toUpperCase();
var error = false;	
for(var i= 0; i < city.length; i++){

if (city[i] < "A" || city[i] > "Z"){
	error = true;
}
}
if (error == true && flagarray[3] == false){
var a = document.getElementById('innerErrors');
	if (uni == true){
		var temp = document.createElement('div');
	temp.id = 'cityz';} else{var temp = document.getElementById('cityz');}
		temp.innerHTML += "City names can only contain letters <br><br>";
		a.appendChild(temp);
		
		flagarray[3] = true;	
		
}
}
function checkfname(){
	var check = document.getElementById('fname1'); // check to see if error message already exists if so clear it
	var uni = true;
	if (check) {
		check.innerHTML = "";
		flagarray[4] = false;
		uni = false;
	}
	var name = document.getElementsByName("fname")[0].value;
 fname = name.toUpperCase();
var error = false;	
for(var i= 0; i < fname.length; i++){

if (fname[i] < "A" || fname[i] > "Z"){
	error = true;
}
}
if ((error == true || fname.length < 2) && flagfname == false ){
var a = document.getElementById('innerErrors');
	if(uni == true){
		var temp = document.createElement('div');
	temp.id = 'fname1';} else{ var temp = document.getElementById('fname1');}
		temp.innerHTML += "First Names can only contain letters, must be more than one character <br><br>";
		a.appendChild(temp);
		
		flagarray[4] = true;
		
	
}
}
function checklname(){
	var check = document.getElementById('lname'); // check to see if error message already exists if so clear it
	var uni = true;
	if (check) {
		check.innerHTML = "";
			flagarray[5] = false;
			uni = false;
	}
	var lname1 = document.getElementsByName("lname")[0].value;
var lname = lname1.toUpperCase();
var error = false;	
for(var i= 0; i < lname.length; i++){

if (lname[i] < "A" || lname[i] > "Z"){
	error = true;
}
}
if ((error == true || lname.length < 2) && flaglname == false ){
var a = document.getElementById('innerErrors');
	if(uni == true){
		var temp = document.createElement('div');
	temp.id = 'lname';} else { var temp = document.getElementById('lname');}
		temp.innerHTML += " Last Names can only contain letters, must be more than one character <br><br>";
		a.appendChild(temp);
		flagarray[5] = true;	
		
		
}
}



function checkStreet(){
	var check = document.getElementById('street'); // check to see if error message already exists if so clear it
	var uni = true;
	if (check) {
		check.innerHTML = "";
		flagarray[6] = false;
		uni = false;
	}
	var street1 = document.getElementsByName("street")[0].value;
var street = street1.toUpperCase();
var error = false;	
for(var i= 0; i < street.length; i++){

if (street[i] < "A" || street[i] > "Z"){
	error = true;
}
}
if ((error == true || street.length < 2) && flagstreet == false ){
var a = document.getElementById('innerErrors');
		if (uni == true){
		var temp = document.createElement('div');
		temp.id = 'street';}else { var temp = document.getElementById('street');}
		
		temp.innerHTML += "street can only contain letters, must be more than one character <br><br>";
		a.appendChild(temp);
		flagarray[6] = true;	
		
}
}





function checkUnit(){
	var check = document.getElementById('unit'); // check to see if error message already exists if so clear it
	var uni = true;
	if (check) {
		check.innerHTML = "";
		flagarray[7] = false;
		uni = false;
	}
	var unit = document.getElementsByName("unit")[0].value;
if (isNaN(unit) && flagarray[7] == false){

var a = document.getElementById('innerErrors');
		
		var a = document.getElementById('innerErrors');
		if( uni == true){
		var temp = document.createElement('div');
		temp.id = 'unit';} else { var temp = document.getElementById('unit');}
		temp.innerHTML += "House/Apt# can only contain numbers <br><br>";
		a.appendChild(temp);
		flagarray[7] = true;	
		
}
}



function validate(){
	var errorCount = 0;
	for(var i =0; i < flagarray.length; i++){
		if (flagarray[i] == true){
			errorCount += 1;
		}
	}
	if(errorCount == 0){
		
		return true;
	}
	else{
	alert("You have errors please correct them to continue");
	 document.getElementById("innerErrors").scrollIntoView();
	return false;}
	
}
