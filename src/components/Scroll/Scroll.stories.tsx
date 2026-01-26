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
  },
}

export default meta
type Story = StoryObj<typeof Scrollbar>

// === ОСНОВНЫЕ СОСТОЯНИЯ ===

export const Default: Story = {
  args: {
    orientation: 'vertical',
  },
  render: (args) => (
    <div style={{ width: 200, height: 200 }}>
      <Scrollbar orientation={args.orientation}>
        <div style={{ width: '100%' }}>
          {[...Array(30)].map((_, i) => (
            <p key={i} style={{ margin: 0, padding: '8px 0', color: 'white', fontSize: 14 }}>
              Item {i + 1} - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia.
            </p>
          ))}
        </div>
      </Scrollbar>
    </div>
  ),
}

export const Horizontal: Story = {
  args: {
    orientation: 'horizontal',
  },
  render: (args) => (
    <div style={{ width: 300, height: 100 }}>
      <Scrollbar orientation={args.orientation}>
        <div style={{ display: 'flex', height: '100%' }}>
          {[...Array(50)].map((_, i) => (
            <span 
              key={i} 
              style={{ 
                marginRight: 20, 
                color: 'white', 
                fontSize: 14, 
                whiteSpace: 'nowrap' 
              }}
            >
              Item {i + 1} - Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </span>
          ))}
        </div>
      </Scrollbar>
    </div>
  ),
}

export const Playground: Story = {
  args: {
    orientation: 'vertical',
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
      <Scrollbar orientation={args.orientation}>
        {args.orientation === 'vertical' ? verticalContent : horizontalContent}
      </Scrollbar>
    )
  },
}