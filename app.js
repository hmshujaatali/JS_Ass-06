//                      QUESTION#01
//  var firstName=prompt("Enter Your First NAME")
// var lastName=prompt("Enter your Last NAME")
// var fullName=firstName+" "+" "+lastName
// document.write("Welcome ",fullName)
//                      QUESTION#02
// var num=prompt("Enter your  mobile phone name")
// var a=num.length
// document.write("Your Mobile: ",num,"<br/>","Length: ",a)
//                      QUESTION#03
// var a="pakistan"
// var fi=a.indexOf("n")
// document.write("String: ",a,"<br/>","Index of 'n': ",fi)
//                      QUESTION#04
// var string="Hello World!"
// var fi=string.lastIndexOf("l")
// document.write("String: ",fi,"<br/>","Last Index Of 'l': ",fi)
//                      QUESTION#05
// var string="Pakistani"
// var fi=string.charAt(3)
// document.write("String: ",string,"<br/>","Char at 3rd index of: ",fi)
//                      QUESTION#06
// var firstName=prompt("Enter your first name")
// var lastName=prompt("Enter your last name")
// var fullName=firstName.concat(" ",lastName)
// document.write("Welecome ",fullName)
//                      QUESTION#07
// var text1="Hyderabad"
// var text2=text1.replace("Hyder","Islam")
// document.write("City: ",text1,"<br/>","After Replacement: ",text2)
//                      QUESTION#08
// var message = "Ali and Sami are best friends. They play cricket and football together"
// var text1 =message.replace(/and/g,"&")
// document.write(text1)
//                      QUESTION#09
// var string="47.2"
// var num=Number(string)
// alert(num)
//                      QUESTION#10
// var input=prompt("Enter something!")
// document.write(input.toUpperCase())
//                      QUESTION#11
// var input=prompt("ENETR SOMETHING!")
// var a=input.slice(0,1)
// var b=input.slice(1,input.length)
// var c=a.toUpperCase()
// var d=b.toLowerCase()
// var e=c.concat(d)
// document.write(e)
//                      QUESTION#12
// var num = 35.36
// var a=num.toString()
// document.write(a)
//    not completed                  QUESTION#13xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// var nam = prompt("enter username")
// var b = nam.toLowerCase()
// for (var i = 0; i<= b.length; i++) {
//     if (nam !== "!" || "@" || "," || ".") {
//         console.log(nam, "valid", "<br/>")
//         break
//     }
// }
//                      QUESTION#14
// var a = ["cake", "apple pie", "cookie", "chips", "patties"]
// var input = prompt("enter your search")
// var c = input.toLowerCase()
// for (var i = 0; i <= a.length; i++) 
//     if (a[i] == c) {
//         document.write(a[i])
//     break
// }if(a[i]!==c){
//     document.write("your entry not available", "<br/>")} 
//                      QUESTION#15
// var password = prompt("Enter the password")
// if ((password>="a"||password>="A")& (password<="z"||password<="Z")) {
//     console.log("valid",password)
//     var a=password.slice(0,1)
//         if (isNaN(a)) {
//         console.log("valid",a)
//         var e=password.length
//         if (e>=6)
//             console.log("valid",e)
//     }}else{
//     console.log("Enter valid password")
// }
//                      QUESTION#16
// var university = "University of Karachi"
// var a=university.split("")
// for(var i=0;i<=a.length-1;i++){
//     document.write(a[i],"<br/>")
// }
//                      QUESTION#17
// var a=prompt("enter pakistan")
// var b=a.charAt(a.length-1)
// document.write(b)
//                       QUESTION#18
// var a = "The quick brown fox jumps over the lazy dog"
// var b = 0
// var c = a.toLowerCase()
// c=c.split(" ")
// var e = Number(b)
// for (var i = 0; i <= c.length; i++) {
//     if (c[i] === "the") {
//         b = b + 1
//     }
// }
// document.write("Text: ", a, "<br/>", "There are ", b, " Conqurence(s) of word 'the'")

// var invalidChar = ["!",",",".","@"];
// var userName = prompt("Enter city name");
// for(var i=0; i<=invalidChar.length; i++){
//         for(var j=0;j<=userName.length;j++){
//     if(userName[j] == invalidChar[i]){
//         console.log("invalid username")
//         break
//     }else
//     console.log("valid")
// }}
// //_______________________________________________________
// var userName=prompt("enter")
// if(userName>="a"||"A" & userName<="z"||"Z"){
//     console.log("okay")
// }else{
//     console.log(" notokay")
// }
// //_______________________________________________________
// var nam = prompt("enter username")
// var b = nam.toLowerCase()
// for (var i = 0; i<= b.length; i++) {
//     if (nam !== "!" || "@" || "," || ".") {
//         console.log(nam, "valid", "<br/>")
//         break}}
// //_______________________________________________________
// var a = prompt("Enter")
// console.log(a)
// a = a.split("")
// console.log(a)
// for (var i = 0; i <= a.length; i++) 
//     if (a[i] === "!" || "@" || "," || ".") {
//         console.log("not ok")
//         break
//     }
//     else {
//         console.log("ok")
// }









