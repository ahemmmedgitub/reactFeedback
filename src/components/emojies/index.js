import './index.css'

const Emojie = props => {
  const {eachCart} = props
  const {id, name, imageUrl} = eachCart

  return (
    <li className="list-items">
      <img src={imageUrl} alt="name" className="emoji-style" />
      <p>{name}</p>
    </li>
  )
}
export default Emojie
