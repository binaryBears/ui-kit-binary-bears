import { useState } from 'react'
import {Modal, type ModalProps} from "./Modal.tsx";
import type {Meta, StoryObj} from "@storybook/react-vite";

const meta = {
    title: 'Components/Modal',
    component: Modal,
    tags: ['autodocs'],
} satisfies Meta<typeof Modal>

export default meta
type Story = StoryObj<typeof Modal>

function Render(args: ModalProps) {
    const [showModal, setShowModal] = useState<boolean>(false)

    const openModal = () => {
        setShowModal(true)
    }
    const closeModal = () => {
        setShowModal(false)
    }
    return (
        <>
            <button onClick={openModal}>
                Open Modal
            </button>
            <Modal {...args} open={showModal} onClose={closeModal} modalTitle={args.modalTitle}></Modal>
        </>
    )
}

/**BaseModal */
export const BaseModal: Story = {
    args: {
        modalTitle: 'Modal title',
        children: (
            <div style={{ padding: '30px 24px 36px' }}>
                <p style={{ textAlign: 'left' }}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, error
                </p>
                <div style={{ display: 'flex', justifyContent: 'end', marginTop: '30px' }}>
                    <button style={{ padding: '6px 34px' }}>
                        Yes
                    </button>
                    <button style={{ padding: '6px 37px' }}>
                        No
                    </button>
                </div>
            </div>
        ),
    },
    render: Render,
}

export const SmallModal: Story = {
    args: {
        ...BaseModal.args,
        size: 'sm',
    },
    render: Render,
}
