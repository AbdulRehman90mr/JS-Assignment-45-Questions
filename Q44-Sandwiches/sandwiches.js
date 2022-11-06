function sandwich(){
    console.log(`Your sandwich has the following items:`);
    for(let n = 0; n < arguments.length; n++)
    {
        console.log(arguments[n]);
    }
}

sandwich("tomato", "onions", "ketchup", "mayo");
sandwich("cheese", "mayo");