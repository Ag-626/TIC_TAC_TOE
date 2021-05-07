var b;
var i=0;
var k=0;
var arr=[" "," "," "," "," "," "," "," "," "];
var Player1;
var Player2;
var b1;
var b2;
var b3;
var d1;
var d2;
var d3;

function store(k1,k2,k3,l,box1,box2,box3)
{
  if(arr[k1]==l&&arr[k2]==l&&arr[k3]==l)
  {
    document.getElementById(box1).style.backgroundColor="orange";
    document.getElementById(box2).style.backgroundColor="orange";
    document.getElementById(box3).style.backgroundColor="orange";
    d1=box1;
    d2=box2;
    d3=box3;
  return(1);
}
else {
  return(0);
}
}
function play()
{
document.getElementById("mybutton").onclick=function()
{
  Player1=((document.getElementById("name1").value)!="")?(document.getElementById("name1").value):"Player1";
  Player2=((document.getElementById("name2").value)!="")?(document.getElementById("name2").value):"Player2";
  document.getElementById("display");
  document.getElementById("display1").innerHTML="Player 1 :"+Player1;
  document.getElementById("display2").innerHTML="Player 2 :"+Player2;
  click("box1");
  click("box2");
  click("box3");
  click("box4");
  click("box5");
  click("box6");
  click("box7");
  click("box8");
  click("box9");
}

function winner(l)
{
if(store(0,1,2,l,"box1","box2","box3")==1)
{
  return(1);
}
else if(store(3,4,5,l,"box4","box5","box6")==1)
{
    return(1);
}
else if(store(6,7,8,l,"box7","box8","box9")==1)
{
    return(1);
}
else if(store(0,3,6,l,"box1","box4","box7")==1)
{
    return(1);
}
else if(store(1,4,7,l,"box2","box5","box8")==1)
{
    return(1);
}
else if(store(2,5,8,l,"box3","box6","box9")==1)
{
    return(1);
}
else if(store(0,4,8,l,"box1","box5","box9")==1)
{
    return(1);
}
else if(store(2,4,6,l,"box3","box5","box7")==1)
{
    return(1);
}
  else {
    return(0);
  }
}

function click(box)
{
document.getElementById(box).onclick=function()
{
  b=box.substr(3,1);
  if(arr[b-1]==" ")
  {
  if(i%2==0)
  {
    document.getElementById(box).innerHTML="O";
    arr[b-1]="O";
    if(i>3)
    {
      k=winner("O");
      if(k==1)
      {
       document.getElementById("box1").style.pointerEvents = "none"
       document.getElementById("box2").style.pointerEvents = "none"
       document.getElementById("box3").style.pointerEvents = "none"
       document.getElementById("box4").style.pointerEvents = "none"
       document.getElementById("box5").style.pointerEvents = "none"
       document.getElementById("box6").style.pointerEvents = "none"
       document.getElementById("box7").style.pointerEvents = "none"
       document.getElementById("box8").style.pointerEvents = "none"
       document.getElementById("box9").style.pointerEvents = "none"
       document.getElementById("win").innerHTML="Congratulations!! Winner is "+Player1;
      }
    }
  }
  else
  {
   document.getElementById(box).innerHTML="X";
   arr[b-1]="X";
   if(i>3)
   {
    k=winner("X");
    if(k==1)
    {
      document.getElementById("box1").style.pointerEvents = "none"
       document.getElementById("box2").style.pointerEvents = "none"
       document.getElementById("box3").style.pointerEvents = "none"
       document.getElementById("box4").style.pointerEvents = "none"
       document.getElementById("box5").style.pointerEvents = "none"
       document.getElementById("box6").style.pointerEvents = "none"
       document.getElementById("box7").style.pointerEvents = "none"
       document.getElementById("box8").style.pointerEvents = "none"
       document.getElementById("box9").style.pointerEvents = "none"
     document.getElementById("win").innerHTML="Congratulations!! Winner is "+Player2;
    }
   }
  }
  i++;
}
  if(i==9&&k==0)
  {
   document.getElementById("win").innerHTML="Draw";
  }

}
}
}

play();
document.getElementById("mybutton1").onclick=function()
{
  restart("box1");
  restart("box2");
  restart("box3");
  restart("box4");
  restart("box5");
  restart("box6");
  restart("box7");
  restart("box8");
  restart("box9");
  document.getElementById("win").innerHTML="";
  i=0;
  document.getElementById(d1).style.backgroundColor="#AFEEEE";
  document.getElementById(d2).style.backgroundColor="#AFEEEE";
  document.getElementById(d3).style.backgroundColor="#AFEEEE";
}
function restart(box)
{
  document.getElementById("box1").style.pointerEvents = "all";
       document.getElementById("box2").style.pointerEvents = "all";
       document.getElementById("box3").style.pointerEvents = "all";
       document.getElementById("box4").style.pointerEvents = "all";
       document.getElementById("box5").style.pointerEvents = "all";
       document.getElementById("box6").style.pointerEvents = "all";
       document.getElementById("box7").style.pointerEvents = "all";
       document.getElementById("box8").style.pointerEvents = "all";
       document.getElementById("box9").style.pointerEvents = "all";
  b=box.substr(3,1);
  arr[b-1]=" ";
  document.getElementById(box).innerHTML="";
}

