import React from 'react'
import background from '../../assets/SOL_Background.png'
import icon from '../../assets/SOL_logo.svg'
import './home.less'

export const Home = () => (
  <article className={'homeContainer'}>
    <div className={'leftSide'}>
      <img src={background} alt='background' />
    </div>
    <div className={'rightSide'}>
      <img src={icon} alt='icon' />
      <span className={'pronunciation'}>
        /s&ouml;l/ noun / verb / adj
      </span>
      <div className={'definition'}>
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
