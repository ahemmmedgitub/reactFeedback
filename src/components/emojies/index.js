import './index.css'

const Emojie = props => {
  const {eachCart, onClickingHappy} = props
  const {id, name, imageUrl} = eachCart

  let onButton
  if (id === 2) {
    onButton = () => {
      onClickingHappy(id)
    }
  }

  return (
    <li className="list-items">
      <img
        src={imageUrl}
        alt={name}
        onClick={onButton}
        className="emoji-style"
      />
      <p className="smaily-para">{name}</p>
    </li>
  )
}
export default Emojie
