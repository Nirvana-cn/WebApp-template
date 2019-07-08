import style from './search.css';
import qr from '../../assets/qr_code.svg';
import searchIcon from '../../assets/search.svg';
import history from '../../assets/history.svg';
import userIcon from '../../assets/user.svg';

export default function () {
  return (
    <div className={style.wrapper}>
      <img src={userIcon}/>
      <div className={style.content}>
        <img src={searchIcon} width="30px" height="70%"/>
        <span>搜一搜</span>
        <img src={qr} width="30px" height="60%"/>
      </div>
      <img src={history}/>
    </div>
  )
}
