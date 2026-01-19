import type { Meta, StoryObj } from '@storybook/react'
import { Scrollbar } from './Scroll'

const Wrapper = ({ children }: { children: React.ReactNode }) => (
  <div
    style={{
      backgroundColor: 'black',
      width: '100vw',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
    }}
  >
    {children}
  </div>
)

const meta: Meta<typeof Scrollbar> = {
  title: 'Components/Scrollbar',
  component: Scrollbar,
  decorators: [(Story) => <Wrapper><Story /></Wrapper>],
  argTypes: {
    orientation: {
      control: { type: 'radio' },
      options: ['horizontal', 'vertical'],
    },
    state: {
      control: { type: 'radio' },
      options: ['default', 'hover'],
    },
  },
}

export default meta
type Story = StoryObj<typeof Scrollbar>

export const Playground: Story = {
  args: {
    orientation: 'vertical',
    state: 'default',
  },
  render: (args) => {
    const verticalContent = (
      <div style={{ width: '100%' }}>
        {[...Array(15)].map((_, i) => (
          <p key={i} style={{ margin: 0, padding: '8px 0', color: 'white', fontSize: 14 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.
          </p>
        ))}
      </div>
    )

    const horizontalContent = (
      <div style={{ display: 'flex', height: '100%' }}>
        {[...Array(25)].map((_, i) => (
          <span key={i} style={{ marginRight: 20, color: 'white', fontSize: 14, whiteSpace: 'nowrap' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.
          </span>
        ))}
      </div>
    )

    return (
      <Scrollbar orientation={args.orientation} state={args.state}>
        {args.orientation === 'vertical' ? verticalContent : horizontalContent}
      </Scrollbar>
    )
  },
}