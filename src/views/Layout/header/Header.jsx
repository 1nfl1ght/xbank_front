import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../../assets/header/bank-logo.png'
import communicationIcon from '../../../assets/header/chat_icon.png'
import s from './Header.module.scss'

const setActive = ({ isActive }) => isActive ? 'active-link' : '';

const Header = () => {
  return (
    <>
      <div className={s['upper-header']}>
        <div className={s['upper-header__logo']}>
          <img src={logo} alt="logo" />
        </div>
        <div className={s['upper-header__contacts']}>
          <div className={s['contacts']}>
            <div className={s['contacts__phone']}>
              <p>8 800 555-25-18</p>
            </div>
            <div className={s['contacts__phone__description']}>
              <p>Бесплатно по России</p>
            </div>
          </div>
          <div className={s['contacts']}>
            <div className={s['contacts__phone']}>
              <p>+7 861 2-777-888</p>
            </div>
            <div className={s['contacts__phone__description']}>
              <p>Для звонков из-за границы</p>
            </div>
          </div>
        </div>
        <div className={s['upper-header__communication-with-bank'] + ' ' + s['contacts']}>
          <a href="google.com"><img src={communicationIcon} alt="" />Cвязь c банком</a>
        </div>
      </div>
      <nav className={s['lower-header']}>
        <ul>
          <li><NavLink to='/' className={setActive}>Главная</NavLink></li>
          <li><NavLink to='/transfers' className={setActive} >Переводы</NavLink></li>
          <li><NavLink to='/payments' className={setActive} >Платежи</NavLink></li>
          <li><NavLink to='/depositsandaccounts' className={setActive} >Вклады и счета</NavLink></li>
          <li><NavLink to='/cards' className={setActive} >Карты</NavLink></li>
          <li><NavLink to='/credits' className={setActive} >Кредиты</NavLink></li>
          <li><NavLink to='/history' className={setActive} >История</NavLink></li>
        </ul>
      </nav>
    </>
  )
}

export default Header