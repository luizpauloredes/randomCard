
  let whichCard =  ['A',2,3,4,5,6,7,8,9,10,'J','Q','K']
  let whichNaipe = ['&diams;','&spades;','&clubs;','&hearts;']
  
  let randCard = Math.floor(Math.random() * whichCard.length)
  let randNaipe = Math.floor(Math.random() * whichNaipe.length)

  let info1 = document.querySelector('#info1').innerHTML= whichCard[randCard]  
  var info2 = document.querySelector('#info2').innerHTML= whichNaipe[randNaipe]
 //set up the color red when the naipe is diamond or hearts
  /*if (info2 == '&diams;'|| info2 == '&spades;' )  {
     document.querySelector('#info2').class = info2
  }
  */
   document.querySelector('#info3').innerHTML = info1
   document.querySelector('#info4').innerHTML = info2
   document.querySelector('#naipe-info2').innerHTML = info2
   
