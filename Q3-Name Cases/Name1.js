var name="AbdulRehman";
console.log(name.toUpperCase());
console.log(name.toLowerCase());

function TitleCase(name) // Make a Function First
{
name= name.toLowerCase(); //Convert all to Lower Case and Split
name=name.split(" ");
for(let n=0; n<name.length; n++) // making a loop
{
    name[n]=name[n].charAt(0).toUpperCase() + name[n].slice(1); //turn the first elements to capital
}
return name.join(" ");
}
console.log(TitleCase(name));