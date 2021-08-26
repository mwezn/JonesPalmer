import React from 'react'
import './Section2.css'

function Slide1() {
    return (
      <div class="mySlides fade">
      <div class="contain">
      <div class="card2 inner-outline">
            <h2>Heading 2</h2>
            <ul>
              <li>&#128167;Bullet 1</li>
              <li>&#128167;Bullet 2</li>
              <li>&#128167;Bullet 3</li>
            </ul>
        </div>
        <div class="card2 inner-outline">
       
         <h2>Heading 2</h2>
         <p>Si cum sequatiste
          porrovit estiorroEces
          ipsusa volorio cus prae
          mos volum ut ciuamus .
          Nam, esendae 1.aut arum
          rem rerum faccustotam
          quiantin nem.</p>
        <p>Fercidigenit eturionsed
            quas es consedistor
            re velectur maxim qui
            dolorporrum @"2rersped</p>
      
        </div>
        <div class="card2 inner-outline">
         <h2>Heading 2</h2>
         <ul class="card-ul">
          <li>&#128167;Hi</li>
          <li>&#128167;Hi2</li>
        </ul>
        </div>
        </div>
      </div>
    )
}

function Slide2 (){
  return(<div class="mySlides fade">
  <div class="contain">
  <div class="card3 inner-outline">
        <h2>Heading 2</h2>
        <ul>
          <li>&#128167;Bullet 1</li>
          <li>&#128167;Bullet 2</li>
          <li>&#128167;Bullet 3</li>
        </ul>
    </div>
    <div class="card3 inner-outline">
   
     <h2>Heading 2</h2>
     <p>Si cum sequatiste
      porrovit estiorroEces
      ipsusa volorio cus prae
      mos volum ut ciuamus .
      Nam, esendae 1.aut arum
      rem rerum faccustotam
      quiantin nem.</p>
    <p>Fercidigenit eturionsed
        quas es consedistor
        re velectur maxim qui
        dolorporrum @"2rersped</p>
  
    </div>
    <div class="card3 inner-outline">
     <h2>Heading 2</h2>
     <ul class="card-ul">
      <li>&#128167;Hi</li>
      <li>&#128167;Hi2</li>
    </ul>
    </div>
    </div>
  </div>)
}
function Slide3 (){
  return(<div class="mySlides fade">
  <div class="contain">
  <div class="card4 inner-outline">
        <h2>Heading 2</h2>
        <ul>
          <li>&#128167;Bullet 1</li>
          <li>&#128167;Bullet 2</li>
          <li>&#128167;Bullet 3</li>
        </ul>
    </div>
    <div class="card4 inner-outline">
   
     <h2>Heading 2</h2>
     <p>Si cum sequatiste
      porrovit estiorroEces
      ipsusa volorio cus prae
      mos volum ut ciuamus .
      Nam, esendae 1.aut arum
      rem rerum faccustotam
      quiantin nem.</p>
    <p>Fercidigenit eturionsed
        quas es consedistor
        re velectur maxim qui
        dolorporrum @"2rersped</p>
  
    </div>
    <div class="card4 inner-outline">
     <h2>Heading 2</h2>
     <ul class="card-ul">
      <li>&#128167;Hi</li>
      <li>&#128167;Hi2</li>
    </ul>
    </div>
    </div>
  </div>)
}

function Sect2(){
  return (
    <div id="section2">
      <Slide1></Slide1>
    </div>
  )

}
export {Sect2, Slide1, Slide2, Slide3}
