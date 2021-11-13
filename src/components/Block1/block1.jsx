import c from './block1.module.css';
import kid1 from '../../Images/kid1.png';
import kid2 from '../../Images/kid2.png';

const Block1 = () => {
  return (
    <div className={c.Rows}>
      <div className={c.RowImage}>
        <img src={kid1} alt="" />
      </div>
      <div className={c.Row}>
        <div className={c.Name}>
          <h1>Детская футбольная школа "ПСЖ"</h1>
          <h2>Набор детей c 3-х лет (мальчики и девочки)</h2>
        </div>
        <div className={c.Register}>
          <h1>Запишись на бесплатное занятие</h1>
        </div>
      </div>
      <div className={c.RowImage}>
        <img src={kid2} alt="" />
      </div>
    </div>
  )
}

export default Block1;