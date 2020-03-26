console.log(21);
console.log(121);
//VARIABLE :
//KIND OF VARIABLE: NUMERIC , STRING , BOOLEAN
//1.NUMERIC: 
var bananaPrice = 12;
console.log(bananaPrice);
console.log(typeof bananaPrice);

var seenAfter = 21;
console.log(seenAfter);
console.log(typeof seenAfter);
//2.STRING VARIABLE:
var name = "kolimUddin Zukerbarg"
console.log(name);
console.log(typeof name);

var name = "salmanKhan";
console.log(name);
console.log(typeof name);

//3.BOOLEAN VARIABLE
var isHot = true;
var isRich = false;
console.log(isHot);
console.log(typeof isHot);

/*JAVASCRIPTS PROGRAMMING KEW WORD 
abstract	arguments	boolean	break byte	case	catch	chaconst	continue	debugger	default delete	do	double	else eval	false	final	finally float	for	function	goto
if	     implements	in	instanceof int   	interface	let	long native	new	null	package private	protected	public	return short	static	switch	synchronized
this throw	throws	transient true	try	typeof	var void	volatile	while	with yield
NEW ADD KEYWORD : class	enum	export	extends import	super*/


/*SINGLE LINE COMMENT
SINGLE LINE COMMENT START WITH //SINGLE LINE COMMENT 
MULTILINE COMMENTS START WITH /* AND END WITH */

//Make conditional decision ,If-else comparison
//CONDITIONAL javascript 
var biscuitPrice = 15;
if(biscuitPrice < 10){
      console.log("I will eat the biscuit ")
}
else{
    console.log("khali cha is better")
}

var clothPrice = 1200;
if(clothPrice < 1100){
    console.log("i will buy it")
}
else{
    console.log("i will not buy it ")
}

//two type variable 
var jobPaico = true;
var savingAmount = 5000;
if(jobPaico == true && savingAmount > 20000){
   console.log("we ready ")
}
else{
   console.log("we are not ready")
}

var jobPaico = true;
var savingAmount = 5000
if(jobPaico == true || savingAmount > 200000){
    console.log("we are ready")
}
else{
    console.log("we are not ready ")
}

//ARRAY,INDEX,SET BY INDEX, INDEX OF:

//position=index=position start 0
var friendsAge = [14, 15, 16, 17];
console.log(friendsAge);
console.log(friendsAge[0]);
console.log(friendsAge[1]);
console.log(friendsAge[2]);

//HOW CAN ARRAY UPDATE
friendsAge[1] = 27;
friendsAge[4] = 29;
console.log(friendsAge);

//HOW CAN FIND ARRAY POSITION
var position = friendsAge.indexOf(14);
var position = friendsAge.indexOf(27);
console.log(position);

//HOW CAN PUSH OR ADD ARRAY
//pushing items into an array
friendsAge.push(23);
friendsAge.push(36);
console.log(friendsAge);

//HOW CAN FIND ARROW element or LENGTH
console.log(friendsAge.length);

//HOW CAN ELWMENT OUT OR POP
//pooping any items out of an array 
friendsAge.pop();
console.log (friendsAge);

//google:javascript add element add the begining
//google:javascript remove element from the begining

//WHILE LOOP , DEBUG JAVASCRIPT CODE ,LESS OR EQUAL :
//WHILE LOOP
var num = 0;
while (num < 5){
     console.log(num);
     num = num + 1;//or num++
}

var num = 0;
while(num <=5){           //less or equal :<=
    console.log (num);
    num++
}
//FOR LOOP
for(var i = 0; i<6; i++){
    console.log(i);
}
for(var i=0; i<=5; i++){
    console.log(i);
}
 var nums = [55, 56, 57, 58, 59, 60];
 for(i=0; i<nums.length; i++){
     var element = nums[i];
     console.log(element);
 }
//FUNCTION,CALL FUNCTION
function sayLoveYou(){
    console.log("hi you");
    console.log("how are you");
}
sayLoveYou();
var date = 24;
var place = "Restaurent"
sayLoveYou();
var hangoutPlace = "tsc"
sayLoveYou();
//FUNCTION PARAMETER , MULTIPLE PARAMETER , FUNCTION RETURN:
function doubleIt(num){
    var result = num * 2;
    console.log(result);

}
doubleIt(5);
doubleIt(50);
doubleIt(500);
function doubleIt(num){
    var result = num * 2;
    return result;
}
var first = doubleIt(5);
var second = doubleIt(50);
var total = first + second;//total value declare 
console.log (first, second);//when console log two value 
console.log(total);//total value declare

function add(num1, num2){
    var result = num1 * num2;
    var result = num1 + num2;
    return result;
}
var sum = add(15, 17);
console.log(sum);

//OBJECT , KEY VALUE PAIR, GET OBJECT PROPERTY, SET VALUE 
var student = { id:121, phone:1745, nmae:"Abir"};
var student2 = { id:122, phone:1746, name:"mitun"};
console.log(student);
console.log(student2);
var phoneNo = student.phone;//1st way: how can find phone nb an object
var id  = student2["id"]//2nd way: another way find id
var phonePropName = "phone";//3rd way
var phoneNo = student[phonePropName];//3rd way
console.log(phoneNo);
var name = student2.name;//how can find name an object 
console.log(name);
console.log(id);
/*//update phone 
student2.phone = 232526;
student2["phone"] = 66668;
student2[phoneProName] = 99991
console.log(phoneNo1);
console.log(student2);

//HOW CAN ADD NEW PROPERTY:
student2.cinema = "ogni 2";
console.log();*/


//SWAP VARIABLE, SWAP WITHOUT TEMP, DISTRUCTING:
//1st way with swap
var a = 5;
var b = 7;
console.log("before swap: a =", a, "b=", b);
var temp = a;
a = b;
b = temp;
console.log("after swap: a=", a, "b=", b);
//2nd way without swap
var x = 5;
var y = 7;
x = x + y;
y = x - y;
x = x - y;
console.log("after swap: x=", x, "y =", y);
//3rd way 
var p = 5;
var q = 7;
[p, q] = [q, p];
console.log("after swap: p =", p, "q=", q);


//RANDOM NUMBER , RANDOM NUMBER BETWEEN 1 TO 6:
var num = 2.12458;
var num1 = 2.5696           //flot inteser
var result = Math.floor(num); //floor= go on 
var result2 = Math.ceil(num); // ceil = go under
var result3 = Math.round(num1);
var result3 = Math.round(num);
//var dice = Math.random()
var dice = Math.random() * 10;
console.log(result);
console.log(result2);
console.log(result3);
console.log(dice);

var randomNum = Math.random() * 6;
var output = Math.round(randomNum);
console.log(output);
//FOR LOOP ---------RANDOM
for( var i=0; i<10; i++){
     var randomNum = Math.random() * 6;
     var output = Math.round(randomNum);
     console.log(output);
}
//FIND MAX OF TWO VALUES , FIND MAX OF THREE VALUES:

//FIND MAX TWO VALUE:
var business = 450;
var minister = 350;
if(business > minister){
    console.log("Business is bigger");
}
else{
    console.log("Minister is bigger");
}

var student = 320;
var teacher = 450;
if(student > teacher){
    console.log("student is best")
}
else{
    console.log("teacher is best ")
}
//FIND MAX THREE VALUES :
var business = 450;
var minister = 650;
var sochib = 550;
if( business > sochib){
    console.log("Business is bigger");
}
else{
    console.log("sochib is bigger")
}

    if(minister > sochib){
        console.log("minister is bigger");
    }
    else{
        console.log("sochib is bigger")
    }

var teacher = 1200;
var student = 1000;
var doctor = 800;
if(student > doctor ){
    console.log("student is best ")
}
else { 
    console.log("doctor is best")
}
if(teacher > student){
    console.log("teacher is best")
}
else{
    console.log("student is best ")
}

var people = 850;
var boy = 650;
var girl = 750;
var max = Math.max(people, boy, girl);
console.log(max);
