function SELECTIONS(div_clz,elmnt,color) {

    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "";
    }
    document.getElementById(div_clz).style.display = "block";
    elmnt.style.backgroundColor = color;

  console.error("U.V.D. Kumuthu Prabhasha")
  }

var his_count = 1


const click_del = () => {

  var onckick = document.getElementById('error_audio')
  onckick.play()

  document.getElementById('cli').value = ""
  console.log("{proccess} -- cleared !")
}
const click_num = (key) => {

  var onckick = document.getElementById('click_audio')
  onckick.play()

  document.getElementById('cli').value = document.getElementById('cli').value + key
  console.log("{proccess} -- pressed",key)
}

const click_plus = (key) => {

  var onckick = document.getElementById('click_audio')
  onckick.play()

  document.getElementById('cli').value = document.getElementById('cli').value + key
  console.log("{proccess} -- pressed",key)
}
const click_minus = (key) => {

  var onckick = document.getElementById('click_audio')
  onckick.play()

  document.getElementById('cli').value = document.getElementById('cli').value + key
  console.log("{proccess} -- pressed",key)
}
const click_devi = (key) => {

  var onckick = document.getElementById('click_audio')
  onckick.play()

  document.getElementById('cli').value = document.getElementById('cli').value + key
  console.log("{proccess} -- pressed",key)
}
const click_multi = (key) => {

  var onckick = document.getElementById('click_audio')
  onckick.play()

  document.getElementById('cli').value = document.getElementById('cli').value + key
  console.log("{proccess} -- pressed",key)
}
const click_log = (key) => {

  var onckick = document.getElementById('equal_audio')
  onckick.play()

  var prabhasha = document.getElementById('cli').value
  var history_temp = prabhasha
  prabhasha = Number(prabhasha)
  prabhasha = Math.log(prabhasha)
  document.getElementById('cli').value = prabhasha

  document.getElementById('history_load').innerHTML = document.getElementById('history_load').innerHTML + "\n(" + his_count + ")   log " + history_temp + " =  " + prabhasha
  var newE = document.createElement("p")
  var node = document.createTextNode(" ")
  var element = document.getElementById("history_load")
  element.appendChild(newE)
  his_count = his_count + 1

  console.log("{proccess} -- pressed",key)
}
const click_sqrt = (key) => {
  
  var onckick = document.getElementById('equal_audio')
  onckick.play()

  var prabhasha = document.getElementById('cli').value
  var history_temp = prabhasha
  prabhasha = Number(prabhasha)
  prabhasha = Math.sqrt(prabhasha)
  document.getElementById('cli').value = prabhasha

  document.getElementById('history_load').innerHTML = document.getElementById('history_load').innerHTML + "\n(" + his_count + ")   square root " + history_temp + " =  " + prabhasha
  var newE = document.createElement("p")
  var node = document.createTextNode(" ")
  var element = document.getElementById("history_load")
  element.appendChild(newE)
  his_count = his_count + 1

  console.log("{proccess} -- pressed",key)
}
/*document.getElementById('cli').value
  prabhasha = prabhasha.toString()*/

function enterKeyPressed(event) {
  var prabhasha = document.getElementById('cli').value
  prabhasha = prabhasha.toString()
  if (event.keyCode == 13) {
    event.preventDefault();
     console.log("{proccess} -- enter key")
     click_equal(prabhasha)
  }
}


const click_equal = (key) => {

  var onckick = document.getElementById('equal_audio')
  onckick.play()
  
  var prabhasha = key
    
  if(prabhasha.match(/\+/g)){
    if(prabhasha.match(/-|×|÷|%/g)){
      alert("Use only one math function at a time!")
      var onckick = document.getElementById('error_audio')
      onckick.play()
      return
    }
    var charcod_pl = prabhasha.indexOf("+")
    var charcod = prabhasha.slice(0,charcod_pl)
    charcod = Number(charcod)
    var charcodh = prabhasha.length
    charcodh = prabhasha.slice(charcod_pl+1 , charcodh)
    charcodh = Number(charcodh)
    var result = charcod + charcodh
    console.log("{proccess} -- answer =",charcod + charcodh)
  }else{
  if(prabhasha.match(/-/g)){
    if(prabhasha.match(/\+|×|÷|%/g)){
      alert("Use only one math function at a time!")
      var onckick = document.getElementById('error_audio')
      onckick.play()
      return
    }
    var charcod_pl = prabhasha.indexOf("-")
    var charcod = prabhasha.slice(0,charcod_pl)
    charcod = Number(charcod)
    var charcodh = prabhasha.length
    charcodh = prabhasha.slice(charcod_pl+1 , charcodh)
    charcodh = Number(charcodh)
    var result = charcod - charcodh
    console.log("{proccess} -- answer =",charcod - charcodh)
  }else{
  if(prabhasha.match(/×|\*/g)){
    if(prabhasha.match(/\+|-|÷|%/g)){
      alert("Use only one math function at a time!")
      var onckick = document.getElementById('error_audio')
      onckick.play()
      return
    }
    if(prabhasha.match(/×/g)){var charcod_pl = prabhasha.indexOf("×")
    }else{
    var charcod_pl = prabhasha.indexOf("*")}
    var charcod = prabhasha.slice(0,charcod_pl)
    charcod = Number(charcod)
    var charcodh = prabhasha.length
    charcodh = prabhasha.slice(charcod_pl+1 , charcodh)
    charcodh = Number(charcodh)
    var result = charcod * charcodh
    console.log("{proccess} -- answer =",charcod * charcodh)
  }else{
  if(prabhasha.match(/÷|\//g)){
    if(prabhasha.match(/\+|-|×|%/g)){
      alert("Use only one math function at a time!")
      var onckick = document.getElementById('error_audio')
      onckick.play()
      return
    }
    if(prabhasha.match(/÷/g)){var charcod_pl = prabhasha.indexOf("÷")
    }else{
    var charcod_pl = prabhasha.indexOf("/")}
    var charcod = prabhasha.slice(0,charcod_pl)
    charcod = Number(charcod)
    var charcodh = prabhasha.length
    charcodh = prabhasha.slice(charcod_pl+1 , charcodh)
    charcodh = Number(charcodh)
    var result = charcod / charcodh
    console.log("{proccess} -- answer =",charcod / charcodh)
  }else{
  if(prabhasha.match(/%/g)){
    if(prabhasha.match(/\+|-|×|÷/g)){
      alert("Use only one math function at a time!")
      var onckick = document.getElementById('error_audio')
      onckick.play()
      return
    }
    var charcod_pl = prabhasha.indexOf("%")
    var charcod = prabhasha.slice(0,charcod_pl)
    charcod = Number(charcod)
    var result = charcod / 100
    console.log("{proccess} -- answer =",charcod / 100)
  }else{
  return
  }}}}}
  document.getElementById('cli').value = result

  document.getElementById('history_load').innerHTML = document.getElementById('history_load').innerHTML + "\n(" + his_count + ")   " + prabhasha + " =  " + result
  var newE = document.createElement("p")
  var node = document.createTextNode(" ")
  var element = document.getElementById("history_load")
  element.appendChild(newE)

  his_count = his_count + 1

  document.getElementById('name').innerHTML = "POWERED BY: K.Prabhasha"

  var onckick = document.getElementById('equal_audio')
  onckick.play()

  }
