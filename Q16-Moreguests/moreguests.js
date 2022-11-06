var guest=["aqib", "ahmad", "asad"];
var notcoming="ahmad";
function invitationfunction()
{
    for(var i=0; i<guest.length; i++)
    {
        if(guest[i]==notcoming)
        {
            guest[i]="kumail";
            var invitation=`Hello ${guest[i]}, you are invited`
            console.log(invitation);
        }
        else
        {
            var invitation=`Hello ${guest[i]}, you are invited`
            console.log(invitation);    
        }
    }
}

console.log("As we got a bigger dinner table, now we are inviting more friends");

guest.unshift("Omair");
guest.splice(2,0,"muzammil");
guest.push("Usman");
invitationfunction();