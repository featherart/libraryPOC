import React from 'react'
import { Modal } from '../../components/Modal'
import background from '../../assets/SOL_Background.png'
import icon from '../../assets/SOL_logo.svg'
import style from './home.less'

export const Home = () => (
  <article className={style.homeContainer}>
    <Modal />
    <div className={style.leftSide}>
      <img src={background} alt="background" />
    </div>
    <div className={style.rightSide}>
      <img src={icon} alt="icon" />
      <span className={style.pronunciation}>
        /s&ouml;l/ noun / verb / adj
      </span>
      <div className={style.definition}>
        <ol>
          <li>
            The spiritual or immaterial part of a human being or animal,
            regarded as immortal.
          </li>
          <li>
            Emotional or intellectual energy or intensity, especially as
            revealed in a work of art.
          </li>
          <li>NVIDIA Design System</li>
          <li>Speed of Light</li>
        </ol>
      </div>
    </div>
  </article>
)
