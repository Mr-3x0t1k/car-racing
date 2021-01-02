var gameState, playerCount;
var player1, player2, player3, player4;
var form1;
var database;
var game1;

function setup()
{
    createCanvas(400,400);
    database = firebase.database();
    game1 = new game();
    game1.getState();
    game1.start();



}
function draw()
{


}