import React from 'react'
import { Button, Icon } from 'semantic-ui-react'
import g from '../assets/sound/word_sound/g.m4a'
import n from '../assets/sound/word_sound/n.m4a'
import d from '../assets/sound/word_sound/d.m4a'
import r from '../assets/sound/word_sound/r.m4a'
import m from '../assets/sound/word_sound/m.m4a'
import b from '../assets/sound/word_sound/b.m4a'
import s from '../assets/sound/word_sound/s.m4a'
import o from '../assets/sound/word_sound/o.m4a'
import j from '../assets/sound/word_sound/j.m4a'
import c from '../assets/sound/word_sound/c.m4a'
import k from '../assets/sound/word_sound/k.m4a'
import t from '../assets/sound/word_sound/t.m4a'
import p from '../assets/sound/word_sound/p.m4a'
import h from '../assets/sound/word_sound/h.m4a'

let gSound = new Audio(g)
let nSound = new Audio(n)
let dSound = new Audio(d)
let rSound = new Audio(r)
let mSound = new Audio(m)
let bSound = new Audio(b)
let sSound = new Audio(s)
let oSound = new Audio(o)
let jSound = new Audio(j)
let cSound = new Audio(c)
let kSound = new Audio(k)
let tSound = new Audio(t)
let pSound = new Audio(p)
let hSound = new Audio(h)

const PlayWordSound = props => {

  const handleClickSound = () =>{
    console.log(props.id, props.name)
  switch(props.name){
    case "g-dino":
      gSound.play()
      break;
    case "n-butterfly":
      nSound.play()
      break;
    case "d-pig":
      dSound.play()
      break;
    case "r-robot":
      rSound.play()
      break;
    case "m-rainbow":
      mSound.play()
      break;
    case "b-airplane":
      bSound.play()
      break;
    case "s-apple":
      sSound.play()
      break;
    case "o-monkey":
      oSound.play()
      break;
    case "j-bicycle":
      jSound.play()
      break;
    case "c-toothbrush":
      cSound.play()
      break;
    case "k-elephant":
      kSound.play()
      break;
    case "t-tomato":
      tSound.play()
      break;
    case "p-piano":
      pSound.play()
      break;
    case "h-hippo":
      hSound.play()
      break;
    default:
  }
}


  return (

    <Button onClick={()=>handleClickSound(props)}> <Icon name="volume up"/> </Button>
  )
}


export default PlayWordSound;
