import { styled } from './styles'

const Button = styled('button', {
  backgroundColor: '$blue600',
  color: '$white',
  borderRadius: '$sm',
  padding: '$2 $4',
  fontSize: '$md',
  fontWeight: '$bold',
  border: 'none',
  cursor: 'pointer',
  height: '$10',

  '&:hover': {
    backgroundColor: '$blue600',
  },
})

export function App() {
  return (
    <div>
      <h1>Hello, Paulinho UI!</h1>
      <Button>Click Me</Button>
    </div>
  )
}
