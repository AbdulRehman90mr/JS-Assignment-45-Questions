var magician=["AB", "hacko", "carto"];
function show_magician(magician)
{
    for(var n=0; n<magician.length; n++)
    {
        console.log(magician[n]);
    }
}
show_magician(magician)

function great_magacians(magician){
    for(let n = 0; n < magician.length; n++)
    {
        console.log(`Great ${magician[n]}`);
    }
}
great_magacians(magician);