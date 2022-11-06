var guest=["asad", "aqib", "ahmad"];
var notcoming = "aqib";

for(i=0; i<guest.length; i++)
{
    if(guest[i]==notcoming)
    {
        guest[i]="kumail";
        var invitation=`hello ${guest[i]}, you are invited`
        console.log(invitation);
    }
    else
    {
        var invitation=`hello ${guest[i]}, you are also invited`
        console.log(invitation);
    }
}
console.log(notcoming);
