class form
{
    constructor()
    {

    }
    display()
    {
        var title = createElement('h2');
        title.html("car racing game");
        title.position(130,180);
        var input = createInput("name");
        input.position(150,180);
        var button = createButton("play");
        button.position(170,180);
        var greeting = createElement('h4');
        button.mousePressed(function (){
            var name = input.value()
            playerCount = playerCount + 1
            player1.update(name)
            player1.updateCount(playerCount)
            greeting.html("hello " + name);
            greeting.position(200,200);
        })

    }
}