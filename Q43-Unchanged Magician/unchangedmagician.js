let magician = ["AB", "carto", "luf"];
function show_magicians(magician){
    for(let n = 0; n < magician.length; n++){
        console.log(magician[n]);
    }
}


let great_magicians = magician.slice();

function make_super(great_magicians){
    for(let n = 0; n < great_magicians.length; n++)
    {
        console.log(`Great ${great_magicians[n]}`);
    }
}

show_magicians(magician);
make_super(great_magicians);