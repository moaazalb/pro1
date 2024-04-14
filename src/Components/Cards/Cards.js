import './Cards.css'
import img4 from '../../images/img-4.png'
const Cards = () => {
    return (
        <div class="col">
        <div class="p-3 border bg-light">
        <div class="card" >
    <img src={img4} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Samsung galaxy A20</h5>
      <p class="card-text">950000 Sp</p>
      <a href="#" class="btn btn-primary">Buy</a>
    </div>
  </div>
        </div>
      </div>
    
    )
}
export default Cards;