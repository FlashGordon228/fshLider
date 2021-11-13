import c from './block2.module.css';
import kid from '../../Images/Kid.png';
import ball from '../../Images/ball.png';
import skill from '../../Images/skill.png';
import trophy from '../../Images/trophy.png';
import friends from '../../Images/friends.png';
import leader from '../../Images/leader.png';
import communication from '../../Images/communication.png';

const Block2 = () => {
  return (
    <div className={c.Test}>
      <h1>Что Ваш ребенок получит в "ПСЖ"?</h1>
      <Rows />
    </div>
  )
}

const Rows = () => {
  return (
    <div className={c.Rows}>
      <Row message1 = 'Освоит технику игры в футбол' img1={ball}
            message2 = 'Разовьёт свои природные данные' img2={skill}
            message3 = 'Научится быть смелым и побеждать' img3={trophy}/>
      <div className={c.Kid}>
        <img src={kid} alt="" />
      </div>
      <Row message1 = 'Найдет отличных друзей' img1={friends}
            message2 = 'Сформирует характер лидера' img2={leader}
            message3 = 'Улучшит навыки общения с другими детьми' img3={communication}/>
    </div>
  )
}

const Row = (props) => {
  return (
    <div className={c.Row}>
      <Item message={props.message1} img={props.img1} />
      <Item message={props.message2} img={props.img2} />
      <Item message={props.message3} img={props.img3} />
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

export default Block2;