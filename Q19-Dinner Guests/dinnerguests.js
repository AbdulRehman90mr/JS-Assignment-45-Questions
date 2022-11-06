let guest = ["Asad", "Osama", "Saif"];
let notComing = "Saif";

function invitationFunction() {
for(let i = 0; i < guest.length; i++)
{
if(guest[i] == notComing)
 {
    guest[i] = "Fahad";
    let invitation = `Hello ${guest[i]}, You are invited to be my guest on weekend`
    console.log(invitation);
 } 
else 
 {
    let invitation = `Hello ${guest[i]}, You are invited to be my guest on weekend`
    console.log(invitation);
 }
}}

console.log("Since we got a bigger dinner table, now we are inviting more friends");

guest.unshift("Wasaf");
guest.splice(2,0,"Waqas");
guest.push("Usman");

invitationFunction();
const newGuestList = guest;

 console.log("Unfotunayely the new dinner table is not available on the upcoming week so there is only space for 2 guests");

for(let i = 0; i < newGuestList.length + 2; i++)
{
console.log(` Sorry ${newGuestList.pop(i)} I am sorry since you can't be invited to dinner due to less space`);
}

for(let u = 0; u < newGuestList.length; u++)
{
console.log(`${newGuestList[u]} you are invited to dinner`)
}
// counting number of guests

var numberofguests=newGuestList.length;
console.log(`total number of guests are ${numberofguests}`);