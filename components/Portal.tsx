import { classNames } from "@/common/helpers";
import { useState } from "react";
import { Button } from "./Button";
import { CerberusInu } from "./CerberusInu";
import { Donate } from "./Donate";
import { DTA } from "./DTA";
import { Generator } from "./Generator";
import { HellsDao } from "./HellsDao";
import { AnimatePresenceModal, AnimationTypes, Modal } from "./Modal";
import { PolyVidya } from "./PolyVidya";
import { VText } from "./VText";
import { VTitle } from "./VTitle";

export type PortalType = 'hellsDao' | 'polyVidya' | 'donate' | 'dta' | 'generator' | 'cerberus-inu' | 'about';

export interface IPortalProps {
  type?: PortalType | null;
  onClose?: () => void;
}

export interface IModalWrapperProps {
  onClose?: () => void;
  title?: string;
  description?: string;
  children?: React.ReactNode;
  animation: AnimationTypes;
  className?: string;
}

export interface IAppModalProps {
  onClose?: () => void;
}

export const ModalWrapper: React.FC<IModalWrapperProps> = ({ onClose, children, title, description, animation, className }) => {
  return (
    <Modal animation={animation} onClose={onClose} className={classNames("!h-screen relative w-full flex flex-col text-white bg-black/40 font-dalek prose", className)}>
     { title && description && <> <div className="absolute right-0 top-0 p-vmd z-[1]"><Button className="!py-1 " onClick={onClose}>X</Button></div>
      <div className="flex flex-col h-auto w-full p-vmd flex-wrap gap-vsm absolute top-0 z-[0]">
        <VTitle type="h4" className="!text-amber-500">{title}</VTitle>
        <VText size="lg">{description}</VText>
      </div></>}
      <div className="flex justify-center items-center h-full w-full">
        {children}
      </div>
    </Modal>
  )
}


export const Portal: React.FC<IPortalProps> = ({ type, onClose }) => {
  switch(type) {
    case 'hellsDao':
      return (
        <ModalWrapper animation='fade' onClose={onClose}>
          <HellsDao onClose={onClose}/>
        </ModalWrapper>
      )
    case 'polyVidya':
      return (
        <ModalWrapper animation='fade'onClose={onClose} title="PolyVidya" description="polygon + vidya = profit">
          <PolyVidya onClose={onClose}/>
        </ModalWrapper>
      )
    case 'donate':
      return (
        <ModalWrapper animation='fade'onClose={onClose} title="dev do something" description="by supporting us the devs are indeed able to do something">
          <Donate onClose={onClose}/>
        </ModalWrapper>
      )
    case 'dta':
      return (
        <ModalWrapper animation='fade' onClose={onClose}>
          <DTA onClose={onClose}/>
        </ModalWrapper>
      )
    case 'generator':
      return (
        <ModalWrapper animation='fade' onClose={onClose}>
          <Generator onClose={onClose}/>
        </ModalWrapper>
      )
    case 'cerberus-inu':
      return (
        <ModalWrapper animation='fade' onClose={onClose}>
          <CerberusInu  onClose={onClose}/>
        </ModalWrapper>
      )
    case 'about':
      return (
        <ModalWrapper animation='fade' onClose={onClose} title="about us" description="who are we?">
        </ModalWrapper>
      )
    default:
      return null;
  }
}