import c from './block3.module.css';
import kid4 from '../../Images/kid4.png';
import coach1 from '../../Images/coach1.png';
import unic from '../../Images/unic.png';
import program from '../../Images/program.png';
import player from '../../Images/player.png';

const Block3 = () => {
  return (
    <div className={c.Test}>
      <div className={c.Rows}>
        <Footbal />
        <div className={c.Kids}>
          <img src={kid4} alt="" />
        </div>
      </div>
    </div>
  )
}

const Footbal = () => {
  return (
    <div className={c.Footbal}>
      <h1>Футбол, который нравится детям!</h1>
      <h2>Занятия футболом – это полноценная тренировка организма.
        Ведь это не просто игра, а целый комплекс физических упражнений.
        Он помогает развить выносливость и координацию движений.
        При регулярных тренировках происходит укрепление костной структуры и мускулатуры!</h2>
      <div className={c.columns}>
        <div className={c.Row}>
          <Item message='Профессиональные тренеры' img={coach1} />
          <Item message='Индивидуальный подход к каждому ребенку' img={unic} />
        </div>
        <div className={c.Row}>
          <Item message='Собственная методика тренировок' img={program} />
          <Item message='Современный инвентарь и экипировка' img={player} />
        </div>
      </div>
      <a href='/Main' className={c.Link}>Запишись на бесплатное занятие</a>
    </div>
  )
}

const Item = (props) => {
  return (
    <div className={c.Item}>
      <div className={c.ItemImage}>
        <img src={props.img} alt="" />
      </div>
      <span>{props.message}</span>
    </div>
  )
}



export default Block3;