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

  let messages=[
    {id: 1, message: 'Профессиональные тренеры', img: coach1},
    {id: 2, message:'Индивидуальный подход к каждому ребенку', img:unic},
    {id: 3, message:'Собственная методика тренировок', img:program},
    {id: 4, message:'Современный инвентарь и экипировка', img:player}
  ]

  let messagesElements = messages.map(m => <Item message={m.message} img = {m.img} />);

  return (
    <div className={c.Footbal}>
      <h1>Футбол, который нравится детям!</h1>
      <h2>Занятия футболом – это полноценная тренировка организма.
        Ведь это не просто игра, а целый комплекс физических упражнений.
        Он помогает развить выносливость и координацию движений.
        При регулярных тренировках происходит укрепление костной структуры и мускулатуры!</h2>
      <div className={c.columns}>
          {messagesElements}
      </div>
      <a href='/' className={c.Link}>Запишись на бесплатное занятие</a>
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