import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Backdrop } from './Backdrop';
import { classNames } from '@/common/helpers';
import { createPortal } from 'react-dom';

import styles from '@/styles/modal.module.scss';

export type AnimationTypes = 'slide-left' | 'slide-right' | 'dropIn' | 'fade' | 'dropOut';

export interface IModalProps {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  animation: AnimationTypes;
  onClose?: () => void;
}

const animations = {
  'slide-left': {
    hiddenModal: {
      x: '-100vw',
      opacity: 0,
    },
    visibleModal: {
      x: '0',
      opacity: 1,
      transition: {
        duration: 0.06,
        type: 'spring',
        stiffness: 400,
        damping: 25
      } 
    },
    exitModal: {
      x: '-100vw',
      transition: {
        duration: 0.06,
      }
    }
  },
  'slide-right': {
    hiddenModal: {
      x: '100vw',
      opacity: 0,
    },
    visibleModal: {
      x: '0',
      opacity: 1,
      transition: {
        duration: 0.06,
        type: 'spring',
        stiffness: 400,
        damping: 25
      } 
    },
    exitModal: {
      x: '100vw',
      transition: {
        duration: 0.06,
      }
    }
  },
  'dropIn': {
    hiddenModal: {
      y: '-100vw',
      opacity: 0,
    },
    visibleModal: {
      y: '0',
      opacity: 1,
      transition: {
        duration: 0.06,
        type: 'spring',
        stiffness: 400,
        damping: 25
      } 
    },
    exitModal: {
      y: '100vw',
      transition: {
        duration: 0.06,
      }
    }
  },
  'dropOut': {
    hiddenModal: {
      y: '100vw',
      opacity: 0,
    },
    visibleModal: {
      y: '0',
      opacity: 1,
      transition: {
        duration: 0.06,
        type: 'spring',
        stiffness: 400,
        damping: 25
      } 
    },
    exitModal: {
      y: '-100vw',
      transition: {
        duration: 0.06,
      }
    }
  },
  'fade': {
    hiddenModal: {
      opacity: 0,
    },
    visibleModal: {
      opacity: 1,
      transition: {
        duration: 0.06,
        type: 'spring',
        stiffness: 400,
        damping: 25
      }
    },
    exitModal: {
      opacity: 0,
      transition: {
        duration: 0.06,
      }
    }
  }
}

export const AnimatePresenceModal = ({ children }: {children: any}) => {
  return (
    <AnimatePresence initial={false} exitBeforeEnter={true}>
      {children}
    </AnimatePresence>
  )
}

const theModal = ({onClose, className, style, children, animation}: IModalProps) => {
  const selectedAnimation = animations[animation] || animations['fade'];
  return (
    <Backdrop onClick={onClose}>
      <motion.div key='modal' 
      style={{
        ...style,
        zIndex: 9999,
      }} 
      variants={ selectedAnimation  } 
      initial='hiddenModal' 
      animate='visibleModal'
      exit='exitModal' 
      onClick={(e) => e.stopPropagation()} 
      className={classNames(styles.modal, 'relative flex justify-center items-center max-w-page-modal', className)}>
        {children}
      </motion.div>
    </Backdrop>
  )
}


export const Modal: React.FC<IModalProps> = ({children, className, style, onClose, animation='slide-left'}) => {
  let portalModalRootDiv = document.getElementById('modal-root') as HTMLElement;
  return(
    createPortal(
      React.createElement(theModal, {className, style, onClose, animation}, children),
      portalModalRootDiv
    )
  )
}