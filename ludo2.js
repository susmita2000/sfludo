var cvs=document.getElementById("ludo1");
var ctx=cvs.getContext("2d");
var box=50;
var d;
var moves=0;
var pre;
var locker1=2;
var locker2=2;
let p11,p12,p22,p21;
var c1=0;
var c2=0;

var u=0;
score1=0;
score2=0;
document.getElementById("loc1").disabled = true;
document.getElementById("loc2").disabled = true;
p11={
	x:40,
	y:40

};
p21={
	x:40,
	y:40

};
p12={
	x:40,
	y:40

};
p22={
	x:40,
	y:40

};
function ini1()
{ p11={
	x:0,
	y:0
};
}

function ini2(){

 p12={
	x:0,
	y:0
};
}
function ini3()
{
 p21={
	x:9,
	y:9
};
}

function ini4()
{
 p22={
	x:9,
	y:9
};
}

function drawback()
{
	for(var i=0;i<10;i++)
	{
		for(var j=0;j<10;j++)
		{
			if(i==0||j==0||i==9||j==9)
			{
				if(i==0&&j==0)
				{
					ctx.fillStyle="green";
				ctx.fillRect(j*box,i*box,box,box);
				}
				else if(i==1&&j==0)
				{
						ctx.fillStyle="lightgreen";
				ctx.fillRect(j*box,i*box,box,box);
				}
				else if(i==9&&j==9)
				{
						ctx.fillStyle="blue";
				ctx.fillRect(j*box,i*box,box,box);
				}
				else if(i==8&&j==9)
				{
							ctx.fillStyle="lightblue";
				ctx.fillRect(j*box,i*box,box,box);
				}
				else if((i+j)%2==0)
			{   
				ctx.fillStyle="white";
				ctx.fillRect(j*box,i*box,box,box);
			}
			else
			{
				ctx.fillStyle="pink";
				ctx.fillRect(j*box,i*box,box,box);
			}
		}
			
		}
	}
}
function drawpiece(x,y,p){
	ctx.beginPath();
ctx.arc(x*box+25, y*box+25, 15, 0, 2 * Math.PI);
ctx.stroke();
if(p==1)
ctx.fillStyle="lightgreen";
else
ctx.fillStyle="lightblue";
ctx.fill();

}
function drawpiece2(x,y,p){
  ctx.beginPath();
ctx.arc(x*box+25, y*box+25, 15, 0, 2 * Math.PI);
ctx.stroke();
if(p==1)
{
ctx.fillStyle="lightgreen";
ctx.strokeStyle="green";
}
else
{
ctx.fillStyle="lightblue";
ctx.strokeStyle="blue";
}
ctx.fill();
ctx.stroke();

}


function movea11()
{
  if(pre==0)
  {
    
       if(p11.y==9){
        p11.x=p11.x-d;
        
        if(p11.x<0)
        {
          var t=0-p11.x;
          p11.y=p11.y-t;
          p11.x=0;
          
        }
       }
      else if(p11.x==0&&p11.y!=0)
      {
        p11.y=p11.y-d;
        
      }



      else{
      p11.x=p11.x+d;
    
    if(p11.x>=9&&p11.y!=9)
    {
      var t=p11.x-9;
      p11.x=9;
      p11.y=p11.y+t;
      

    }
     if(p11.y>=9)
    {
      var t=p11.y-9;
      p11.y=9;
      p11.x=p11.x-t;
      
    }
  }
  
    pre=pre+1;
    if(p11.x==0&&p11.y==1)
    {
      score1=score1+1;
      p11.x=30;
    }
    else if(p11.x==0&&p11.y<1)
    {
      p11.y=p11.y+d;
      alert("no valid move");
    }
    if(p11.x==p21.x&&p11.y==p21.y)
    {
      p21.x=40;
      p21.y=40;
      locker2=locker2+1;
    }
    if(p11.x==p22.x&&p11.y==p22.y)
    {
      p22.x=40;
      p22.y=40;
      locker2=locker2+1;
    }
    
  
  }
  document.getElementById("loc1").disabled = true;
document.getElementById("loc2").disabled = true;
if(pre!=0)
{
  document.getElementById("myBtn").disabled = false;
  document.getElementById("use").disabled = false;
}
}
function movea12()
{
  if(pre==0)
  {
        if(p12.y==9){
        p12.x=p12.x-d;
        if(p12.x<0)
        {
          var t=0-p12.x;
          p12.y=p12.y-t;
          p12.x=0;
        }
       }
      else if(p12.x==0&&p12.y!=0)
      {
        p12.y=p12.y-d
      }



      else{
      p12.x=p12.x+d;
    
    if(p12.x>=9&&p12.y!=9)
    {
      var t=p12.x-9;
      p12.x=9;
      p12.y=p12.y+t;

    }
     if(p12.y>=9)
    {
      var t=p12.y-9;
      p12.y=9;
      p12.x=p12.x-t;
    }
  }
    pre=pre+1;
    if(p12.x==0&&p12.y==1)
    {
      score1=score1+1;
      p12.x=30;
    }
     else if(p12.x==0&&p12.y<1)
    {
      p12.y=p12.y+d;
      alert("no valid move");
    }
    if(p12.x==p21.x&&p12.y==p21.y)
    {
      p21.x=40;
      p21.y=40;
      locker2=locker2+1;
    }
    if(p12.x==p22.x&&p12.y==p22.y)
    {
      p22.x=40;
      p22.y=40;
      locker2=locker2+1;
    }
    
  }
  document.getElementById("loc1").disabled = true;
document.getElementById("loc2").disabled = true;
if(pre!=0)
{
  document.getElementById("myBtn").disabled = false;
  document.getElementById("use").disabled = false;
}
}
function movea21()
{
  if(pre==0)
   {
    
    if(p21.y==0)
    {
      p21.x=p21.x+d;
      if(p21.x>9)
      {
        var t=p21.x-9;
        p21.y=p21.y+t;
        p21.x=9
      }
    }
    else if(p21.x==0&&p21.y!=0)
    {
      p21.y=p21.y-d;
      if(p21.y<0)
      {
        var t=0-p21.y;
        p21.x=p21.x+t;
        p21.y=0;
      }
    }
    else{
      p21.x=p21.x-d;
      if(p21.x<0)
      {
        var t=0-p21.x;
        p21.x=0;
        p21.y=p21.y-t;
      }
      else if(p21.x<9&&p21.y!=0&&p21.y!=9)
      {
        var t=9-p21.x;
        p21.x=9;
        p21.y=p21.y+t;
      }
    }


 pre=pre+1;
 if(p21.x==9&&p21.y==8)
    {
      score2=score2+1;
      p21.x=30;
    }
    else if(p21.x==9&&p21.y>8)
    {
      p21.y=p21.y-d;
      alert("no valid move");

    }

    if(p21.x==p11.x&&p21.y==p11.y)
    {
      p11.x=40;
      p11.y=40;
      locker1=locker1+1;
    }
    if(p21.x==p12.x&&p21.y==p12.y)
    {
      p12.x=40;
      p12.y=40;
      locker1=locker1+1;
    }
    
  
  }
  document.getElementById("loc1").disabled = true;
document.getElementById("loc2").disabled = true;
if(pre!=0)
{
  document.getElementById("myBtn").disabled = false;
  document.getElementById("use").disabled = false;
}
}
function movea22()
{
  if(pre==0)
  {
    if(p22.y==0)
    {
      p22.x=p22.x+d;
      if(p22.x>9)
      {
        var t=p22.x-9;
        p22.y=p22.y+t;
        p22.x=9
      }
    }
    else if(p22.x==0&&p22.y!=0)
    {
      p22.y=p22.y-d;
      if(p22.y<0)
      {
        var t=0-p22.y;
        p22.x=p22.x+t;
        p22.y=0;
      }
    }
    else{
      p22.x=p22.x-d;
      if(p22.x<0)
      {
        var t=0-p22.x;
        p22.x=0;
        p22.y=p22.y-t;
      }
      else if(p22.x<9&&p22.y!=0&&p22.y!=9)
      {
        var t=9-p22.x;
        p22.x=9;
        p22.y=p22.y+t;
      }
    }
    pre=pre+1;
    if(p22.x==9&&p22.y==8)
    {
      score2=score2+1;
      p22.x=30;
    }
    else if(p22.x==9&&p22.y>8)
    {
      p22.y=p22.y-d;
      alert("no valid move");

    }
   if(p22.x==p11.x&&p22.y==p11.y)
    {
      p11.x=40;
      p11.y=40;
      locker1=locker1+1;
    }
    if(p22.x==p12.x&&p22.y==p12.y)
    {
      p12.x=40;
      p12.y=40;
      locker1=locker1+1;
    }
  }
  document.getElementById("loc1").disabled = true;
document.getElementById("loc2").disabled = true;
if(pre!=0)
{
  document.getElementById("myBtn").disabled = false;
  document.getElementById("use").disabled = false;
}
}
function user()
{
  d = document.getElementById("myText").value;
  u=1;
}
function free12()
{
	ini2();
	pre++;
	drawpiece(p12.x,p12.y,1);
	locker1=0;
	document.getElementById("loc1").disabled = true;
	document.getElementById("myBtn").disabled = false;
  document.getElementById("use").disabled = false;
}
function free1()
{
if(p11.x==40)
  free11();
else if(p12.x==40)
  free12();
}
function free2()
{
if(p21.x==40)
  free21();
else if(p22.x==40)
  free22();
}
function free11()
{
  ini1();
  pre++;
  drawpiece(p11.x,p11.y,1);
  locker1=0;
  document.getElementById("loc1").disabled = true;
  document.getElementById("myBtn").disabled = false;
  document.getElementById("use").disabled = false;
}
function free12()
{
  ini2();
  pre++;
  drawpiece(p12.x,p12.y,1);
  locker1=0;
  document.getElementById("loc1").disabled = true;
  document.getElementById("myBtn").disabled = false;
  document.getElementById("use").disabled = false;
}
function free22()
{
	ini4();
	
	pre++;
	drawpiece(p22.x,p22.y,2);
	locker2=0;
	document.getElementById("loc2").disabled = true;
	document.getElementById("myBtn").disabled = false;
  document.getElementById("use").disabled = false;
}
function free21()
{
  ini3();
  
  pre++;
  drawpiece(p21.x,p21.y,2);
  locker2=0;
  document.getElementById("loc2").disabled = true;
  document.getElementById("myBtn").disabled = false;
  document.getElementById("use").disabled = false;
}
function dice()
{
	ctx.fillStyle="white";
	pre=0;
	
ctx.fillRect(4*box,4*box,2*box,2*box);
if(u==1)
d=parseInt(d);
if(u==0)
 d=Math.floor(Math.random()*6)+1;
 document.getElementById("myBtn").disabled = true;
 document.getElementById("use").disabled = true;
 u=0;

var img1;
moves=moves+1;
if(d==1)
{
 img1 = document.getElementById("dic1");
 ctx.drawImage(img1,4*box,4*box,2*box,2*box);
}
else if(d==2)
{
  img1 = document.getElementById("dic2");
  ctx.drawImage(img1,4*box,4*box,2*box,2*box);
}
else if(d==3)
{
  img1 = document.getElementById("dic3");
  ctx.drawImage(img1,4*box,4*box,2*box,2*box);
}
else if(d==4)
{
  img1 = document.getElementById("dic4");
  ctx.drawImage(img1,4*box,4*box,2*box,2*box);
}
else if(d==5)
{
  img1 = document.getElementById("dic5");
  ctx.drawImage(img1,4*box,4*box,2*box,2*box);

}
else if(d==6)
{
  img1 = document.getElementById("dic6");
  ctx.drawImage(img1,4*box,4*box,2*box,2*box);
}


if(moves%2==1&&locker1==2&&d!=6)
{
	pre++;
	document.getElementById("myBtn").disabled = false;
  document.getElementById("use").disabled = false;
}
else if(moves%2==1&&locker1==2&&d==6)
{
	ini1();
	pre++;
	drawpiece(p11.x,p11.y,1);
	locker1=1;
	document.getElementById("myBtn").disabled = false;
  document.getElementById("use").disabled = false;

}
else if(moves%2==0&&locker2==2&&d!=6)
{
	pre++;
	document.getElementById("myBtn").disabled = false;
  document.getElementById("use").disabled = false;
}
else if(moves%2==0&&locker2==2&&d==6)
{
	ini3();
	pre=pre+1;
      locker2=1;
	drawpiece(p21.x,p21.y,2);
	document.getElementById("myBtn").disabled = false;
  document.getElementById("use").disabled = false;

}
else if(moves%2==1&&locker1==1&&d==6&&p12.x==40)
{
	 document.getElementById("loc1").disabled = false;
   
}
else if(moves%2==1&&locker1==1&&d==6&&p11.x==40)
{
   document.getElementById("loc1").disabled = false;
   
}
else if(moves%2==0&&locker2==1&&d==6&&p22.x==40)
{
	 document.getElementById("loc2").disabled = false;
   
}
else if(moves%2==0&&locker2==1&&d==6&&p21.x==40)
{
   document.getElementById("loc2").disabled = false;
   
}
if((moves%2==0&&locker2==1&&d!=6&&score2!=1)||( moves%2==0&&score2==1&&locker2==0))
{
  if(p21.x<10&&p21.y<10)
  {
    movea21();
  }

  else if(p22.x<10&&p22.y<10)
  {
     movea22();
  }
}
else if((moves%2==1&&locker1==1&&d!=6&&score1!=1)||(moves%2==1&&score1==1&&locker1==0))
{
if(p11.x<10&&p11.y<10)
  {
    movea11();
  }

  else if(p12.x<10&&p12.y<10)
  {
     movea12();
  }



}
 if(moves%2==1&&locker1==1&&score1==1&&d!=6)
 {
  document.getElementById("myBtn").disabled = false;
  document.getElementById("use").disabled = false;
  pre++;
 }
 if(moves%2==0&&locker2==1&&score2==1&&d!=6)
 {
  document.getElementById("myBtn").disabled = false;
  document.getElementById("use").disabled = false;
  pre++;
 }
 if(moves%2==1&&p11.x==0&&p11.y!=0&&p11.y-d<1&&p12.x==0&&p12.y!=0&&p12.y-d<1&&pre==0)
 {
  pre++;
  alert("no valid move for player1");
   document.getElementById("myBtn").disabled = false;
  document.getElementById("use").disabled = false;

 }
 else if(moves%2==0&&p21.x==9&&p21.y!=9&&p21.y+d>8&&p22.x==9&&p22.y!=9&&p22.y+d>8&&pre==0)
 {
  pre++;
  alert("no valid move for player2");
   document.getElementById("myBtn").disabled = false;
  document.getElementById("use").disabled = false;
 }
 else if(moves%2==1&&c1==1)
 {
  movea11();
  c1=0;
 }
 else if(moves%2==0&&c2==1)
 {
  movea21();
  c2=0;
 }
 

console.log(p11.x);
console.log(p11.y);
console.log(" ");

}

function check(point,c)
{
	
	return(Math.pow(point.x-c.x*box-25,2)+Math.pow(point.y-25-c.y*box,2)<225);
}



//dice();
//drawpiece(p22.x,p22.y,2);
//drawpiece(p11.x,p11.y,1);
cvs.addEventListener('click', (e) => {
  const pos = {
    x: e.clientX-cvs.offsetLeft,
    y: e.clientY-cvs.offsetTop
  };
if(moves%2==1)
{
  if(check(pos,p11)&&pre==0)
  {
  	
       if(p11.y==9){
       	p11.x=p11.x-d;
        
       	if(p11.x<0)
       	{
       		var t=0-p11.x;
       		p11.y=p11.y-t;
       		p11.x=0;
          
       	}
       }
      else if(p11.x==0&&p11.y!=0)
      {
      	p11.y=p11.y-d;
        
      }



      else{
  		p11.x=p11.x+d;
  	
  	if(p11.x>=9&&p11.y!=9)
  	{
  		var t=p11.x-9;
  		p11.x=9;
  		p11.y=p11.y+t;
      

  	}
  	 if(p11.y>=9)
  	{
  		var t=p11.y-9;
  		p11.y=9;
  		p11.x=p11.x-t;
      
  	}
  }
  
  	pre=pre+1;
    if(p11.x==0&&p11.y==1)
    {
      score1=score1+1;
      p11.x=30;
    }
    else if(p11.x==0&&p11.y<1)
    {
      alert("not allowed");
      pre=0;
      p11.y=p11.y+d;
    }
    if(p11.x==p21.x&&p11.y==p21.y)
    {
      p21.x=40;
      p21.y=40;
      locker2=locker2+1;
    }
    if(p11.x==p22.x&&p11.y==p22.y)
    {
      p22.x=40;
      p22.y=40;
      locker2=locker2+1;
    }
    
  
  }
 else if(check(pos,p12)&&pre==0)
  {
        if(p12.y==9){
       	p12.x=p12.x-d;
       	if(p12.x<0)
       	{
       		var t=0-p12.x;
       		p12.y=p12.y-t;
       		p12.x=0;
       	}
       }
      else if(p12.x==0&&p12.y!=0)
      {
      	p12.y=p12.y-d
      }



      else{
  		p12.x=p12.x+d;
  	
  	if(p12.x>=9&&p12.y!=9)
  	{
  		var t=p12.x-9;
  		p12.x=9;
  		p12.y=p12.y+t;

  	}
  	 if(p12.y>=9)
  	{
  		var t=p12.y-9;
  		p12.y=9;
  		p12.x=p12.x-t;
  	}
  }
    pre=pre+1;
      if(p12.x==0&&p12.y==1)
    {
      score1=score1+1;
      p12.x=30;
    }
     else if(p12.x==0&&p12.y<1)
    {
      alert("not allowed");
      pre=0;
      p12.y=p12.y+d;
    }
    if(p12.x==p21.x&&p12.y==p21.y)
    {
      p21.x=40;
      p21.y=40;
      locker2=locker2+1;
    }
    if(p12.x==p22.x&&p12.y==p22.y)
    {
      p22.x=40;
      p22.y=40;
      locker2=locker2+1;
    }
  
  }
  if(p11.x==p12.x&&p11.y==p12.y)
  {
    c1=1;
  }
  else
    c1=0;
}
else
{
if(check(pos,p21)&&pre==0)

  {
  	
  	if(p21.y==0)
  	{
  		p21.x=p21.x+d;
  		if(p21.x>9)
  		{
  			var t=p21.x-9;
  			p21.y=p21.y+t;
  			p21.x=9
  		}
  	}
  	else if(p21.x==0&&p21.y!=0)
  	{
  		p21.y=p21.y-d;
  		if(p21.y<0)
  		{
  			var t=0-p21.y;
  			p21.x=p21.x+t;
  			p21.y=0;
  		}
  	}
  	else{
  		p21.x=p21.x-d;
  		if(p21.x<0)
  		{
  			var t=0-p21.x;
  			p21.x=0;
  			p21.y=p21.y-t;
  		}
  		else if(p21.x<9&&p21.y!=0&&p21.y!=9)
  		{
  			var t=9-p21.x;
  			p21.x=9;
  			p21.y=p21.y+t;
  		}
  	}


 pre=pre+1;
 if(p21.x==p11.x&&p21.y==p11.y)
    {
      p11.x=40;
      p11.y=40;
      locker1=locker1+1;
    }
    if(p21.x==p12.x&&p21.y==p12.y)
    {
      p12.x=40;
      p12.y=40;
      locker1=locker1+1;
    }
    if(p21.x==9&&p21.y==8)
    {
      score2=score2+1;
      p21.x=30;
    }
     else if(p21.x==9&&p21.y>8)
    {
      alert("not allowed");
      pre=0;
      p21.y=p21.y-d;
    }
  
  }
 else if(check(pos,p22)&&pre==0)
  {
    if(p22.y==0)
  	{
  		p22.x=p22.x+d;
  		if(p22.x>9)
  		{
  			var t=p22.x-9;
  			p22.y=p22.y+t;
  			p22.x=9
  		}
  	}
  	else if(p22.x==0&&p22.y!=0)
  	{
  		p22.y=p22.y-d;
  		if(p22.y<0)
  		{
  			var t=0-p22.y;
  			p22.x=p22.x+t;
  			p22.y=0;
  		}
  	}
  	else{
  		p22.x=p22.x-d;
  		if(p22.x<0)
  		{
  			var t=0-p22.x;
  			p22.x=0;
  			p22.y=p22.y-t;
  		}
  		else if(p22.x<9&&p22.y!=0&&p22.y!=9)
  		{
  			var t=9-p22.x;
  			p22.x=9;
  			p22.y=p22.y+t;
  		}
  	}
    pre=pre+1;
    if(p22.x==9&&p22.y==8)
    {
      score2=score2+1;
      p22.x=30;
    }
     else if(p22.x==9&&p22.y>8)
    {
      alert("not allowed");
      pre=0;
      p22.y=p22.y-d;
    }
   if(p22.x==p11.x&&p22.y==p11.y)
    {
      p11.x=40;
      p11.y=40;
      locker1=locker1+1;
    }
    if(p22.x==p12.x&&p22.y==p12.y)
    {
      p12.x=40;
      p12.y=40;
      locker1=locker1+1;
    }
  }

 if(p21.x==p22.x&&p21.y==p22.y)
  {
    c2=1;
  }
  else
    c2=0;
}

document.getElementById("loc1").disabled = true;
document.getElementById("loc2").disabled = true;
if(pre!=0)
{
  document.getElementById("myBtn").disabled = false;
  document.getElementById("use").disabled = false;
}

}
)
function draw()
{
  ctx.clearRect(3*box,1*box,300,100);
	drawback();

	
if(c1==0)	
{
drawpiece(p11.x,p11.y,1);
drawpiece(p12.x,p12.y,1);
}

if(c2==0)
{
drawpiece(p21.x,p21.y,2);

drawpiece(p22.x,p22.y,2);
}
if(c1==1) 
{
drawpiece2(p11.x,p11.y,1);
drawpiece2(p12.x,p12.y,1);
}

if(c2==1)
{
drawpiece2(p21.x,p21.y,2);

drawpiece2(p22.x,p22.y,2);
}
ctx.fillStyle = "white";
    ctx.font = "40px Changa one";
    if(moves%2==1&& moves!=0)
    ctx.fillText("Player 1",3.6*box,2*box);
  if(moves%2==0&& moves!=0)
    
    ctx.fillText("Player 2",3.6*box,2*box);
ctx.fillStyle = "white";
    ctx.font = "20px Changa one";
    ctx.fillText("Locker1:",2.8*box,2.8*box);
     ctx.fillText(locker1,4.3*box,2.8*box);
ctx.fillText("Locker2:",5.8*box,2.8*box);
     ctx.fillText(locker2,7.3*box,2.8*box);



if(score1==2)
{
alert("Player 1 wins");
clearInterval(draw);
}
else if(score2==2)
{
alert("Player 2 wins");
clearInterval(draw);
}
}
setInterval(draw,100);