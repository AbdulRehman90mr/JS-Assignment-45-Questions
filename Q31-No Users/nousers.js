var userName = ["admin", "mas", "jwd", "saif", "nas"];

userName = [];

if(userName.length != 0)
 {
    for(let n = 0; n < userName.length; n++)
     {
        console.log(`Hola ${userName[n]}`);
        if(userName[n] == "admin")
         {
            console.log(`Hello admin, would you like to see a status report?`);
         }
        else
         {
            console.log(`Hello Eric, thank you for logging in again.`);
         }

     }
 }
else if(userName.length == 0)
 {
    console.log("We need to find some users!");
 }