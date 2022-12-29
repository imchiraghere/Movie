function screen()
{
	switch(scr.selectedIndex)
  {
     case 1:
      var bolly=[["-Choose Movies-",0],["Brahmastra: Part One ------ 12:05 PM",130],["KGF Chapter 2 (03:05 PM)",150],["RRR ------ 7:00 PM",100],["The Kashmir Files ------ 9:15 PM",140]]
      fillDropDown(bolly)
      break;
     case 2:
      var holly=[["-Choose Movies-",0],["Lucy ------ 12:00 PM",120],["Engle Eye ------ 3:00 PM",150],["Titanic ------ 6:10 PM",230],["Lucifer ----- 10:00 PM",150]]
      fillDropDown(holly)
      break;
	 case 3:
      var tolly=[["-Choose Movies-",0],["Pushpa ------ 12:00 PM",130],["KGF Chapter ------ 3:00 PM",100],["Key  ------ 6:00 PM",100],["Lucky  ------ 9:00 PM",80]]
      fillDropDown(tolly)
      break;
     case 4:
      var toon=[["-Choose Movies-",0],["Doraemon  ------ 12:00 PM",120],["Shinchan  ------ 2:00 PM",150],["Tom-Jerry  ------ 5:00 PM",230]]
      fillDropDown(toon)
      break;
	 case 5:
      var fun=[["-Choose Movies-",0],["Hera Pheri  ------ 1:00 PM",130],["Pheri Hera Pheri  ------ 5:00 PM",150],["Joker  ------ 9:00 PM",100]]
      fillDropDown(fun)
      break;
  }
}


function fillDropDown(movie)
{	
 removeElements()
 
 for(i=0;i<movie.length;i++)
      {var opt=document.createElement('option')
       opt.text=movie[i][0]
	   opt.value=movie[i][1]
       list.add(opt)
      }
}

function removeElements()
{ 
     for(j=list.options.length-1;j>=0;j--)
     {
       list.remove(j)
     }
}

function book()
{
	var t=ticket.value
	if (t>=5 && t<=10)
	{
		var off="<img src='pep.png' width='150'>"
	}
	else if (t>=10){
		var off="<img src='pop.png'>"
	}
	else{
		var off="<img src='no.png'>"
	}
	
	var mname=list.options[list.selectedIndex].text
	var mprice=list.value
	var tprice=list.options[list.selectedIndex].value*ticket.value
	
	var tic="<table border='1' cellpadding='5' cellspacing='2'>"
		tic+="<tr><td align='center'><img src='inox.png' width='200'></td></tr>"
		tic+="<tr><td align='center'><b>"+mname+"</b></td></tr>"
		
		tic+="<tr><td><img src='RRR.png' width='300'></td></tr>"
		tic+="<tr><td><b>Price : &nbsp;"+mprice+"&nbsp;&nbsp; No. Of Ticket :&nbsp;"+t+"</b></td></tr>"
		tic+="<tr><td><b>Total Price : &nbsp;&#8377; "+tprice+"</b></td></tr>"
		tic+="<tr><td align='center'>"+off+"</td></tr>"
	
	show.innerHTML=tic
}