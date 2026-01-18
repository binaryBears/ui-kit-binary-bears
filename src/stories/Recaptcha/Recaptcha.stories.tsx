import type { Meta, StoryObj } from '@storybook/react'

import { Recaptcha } from './Recaptcha'



const meta: Meta<typeof Recaptcha> = {

  title: 'Components/Recaptcha',

  component: Recaptcha,

  parameters: {

    layout: 'centered',

    docs: {

      description: {

        component: ``,

      },

    },

  },

  tags: ['autodocs'],

  argTypes: {

    initialStatus: {

      control: 'select',

      options: ['default', 'loading', 'checked', 'error', 'expired'],

      description: 'Начальное состояние компонента',

      table: {

        type: { summary: 'RecaptchaStatus' },

        defaultValue: { summary: 'default' },

      },

    },

    expirationTime: {

      control: 'number',

      description: 'Время до истечения в миллисекундах',

      table: {

        type: { summary: 'number' },

        defaultValue: { summary: '120000' },

      },

    },

    disabled: {

      control: 'boolean',

      description: 'Отключить компонент',

      table: {

        type: { summary: 'boolean' },

        defaultValue: { summary: 'false' },

      },

    },

    onStatusChange: {

      action: 'status changed',

      description: 'Callback при изменении статуса',

      table: {

        type: { summary: '(status: RecaptchaStatus) => void' },

      },

    },

  },

}



export default meta

type Story = StoryObj<typeof Recaptcha>




export const Default: Story = {

  args: {

    initialStatus: 'default',

  },

}


export const Loading: Story = {

  args: {

    initialStatus: 'loading',

  },

}



export const Checked: Story = {

  args: {

    initialStatus: 'checked',

  },

}


export const Error: Story = {

  args: {

    initialStatus: 'error',

  },

}


export const Expired: Story = {

  args: {

    initialStatus: 'expired',

  },

}