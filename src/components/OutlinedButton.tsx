interface Props {
  text: string
  onClick?: () => void
}

const OutlinedButton = ({ text, onClick }: Props) => {
  return (
    <button
      className="outlined-button"
      onClick={onClick}
    >
      {text}
    </button>
  )
}

export default OutlinedButton;