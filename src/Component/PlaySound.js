import React from 'react'
import { Button, Icon } from 'semantic-ui-react'
import g from '../assets/sound/gSound.m4a'
import n from '../assets/sound/nSound.m4a'
import d from '../assets/sound/dSound.m4a'
import r from '../assets/sound/rSound.m4a'
import m from '../assets/sound/mSound.m4a'
import b from '../assets/sound/bSound.m4a'
import s from '../assets/sound/sSound.m4a'
import o from '../assets/sound/oSound.m4a'
import j from '../assets/sound/jSound.m4a'
import c from '../assets/sound/cSound.m4a'
import k from '../assets/sound/kSound.m4a'
import t from '../assets/sound/tSound.m4a'
import p from '../assets/sound/pSound.m4a'
import h from '../assets/sound/hSound.m4a'


const PlaySound = props => {
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

  const handleClickSound = () =>{
    // console.log("clicked!", props)
    switch(props.id){
      case 1:
        gSound.play()
        break;
      case 2:
        nSound.play()
        break;
      case 3:
        dSound.play()
        break;
      case 4:
        rSound.play()
        break;
      case 5:
        mSound.play()
        break;
      case 6:
        bSound.play()
        break;
      case 7:
        sSound.play()
        break;
      case 8:
        oSound.play()
        break;
      case 9:
        jSound.play()
        break;
      case 10:
        cSound.play()
        break;
      case 11:
        kSound.play()
        break;
      case 12:
        tSound.play()
        break;
      case 13:
        pSound.play()
        break;
      case 14:
        hSound.play()
        break;
      default:
    }
  }
  return (

    <Button onClick={()=>handleClickSound(props)}><Icon name='volume up' size='big'/></Button>
  )
}

export default PlaySound
