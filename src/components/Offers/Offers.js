import Offer from '../Offer/Offer.js';
import './Offers.scss';

function Offers({items}) {
  return (
    <section className="offers">
      <h1 className="offers__title">Find The Most <span className="offers__underline"><span className="offers__underlinePart">Effective&nbsp;Gutter</span> <span className="offers__underlinePart">Solution</span></span> For YOU</h1>
      <div className="offers__list">
        {
          items.map((el) => <Offer className="offers__item" data={el} key={el.id}></Offer>)
        }
        <></>
      </div>
    </section>
  );
}

export default Offers;
