var username = ["asad", "aqib", "admin", "ahmad", "junaid"];
for(n=0; n<username.length; n++)
{
    console.log(`hello ${username[n]}`)
    if(username[n]=="admin")
    {
        console.log(`hello admin, would you like see report`)
    } else{
        console.log(`Hi Eric, thank you for logging in ahain.`);
    }
}