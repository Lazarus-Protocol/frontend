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

export const ModalWrapper: React.FC<IModalWrapperProps> = ({ onClose, title, description, children, animation, className }) => {
  return (
    <Modal animation={animation} onClose={onClose} className={classNames("!h-screen relative w-full flex flex-col text-white bg-transparent font-dalek prose", className)}>
      <div className="absolute right-0 top-0 p-vmd z-[1]"><Button className="!py-1 border-t-2 border-t-sky-200" onClick={onClose}>X</Button></div>
      <div className="flex flex-col h-auto w-full p-vmd flex-wrap gap-vsm absolute top-0 z-[0]">
        <VTitle type="h4" className="!text-amber-500">{title}</VTitle>
        <VText size="lg">{description}</VText>
      </div>
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
        <ModalWrapper animation='fade' title="HELL&apos;S DAO" description="this is a place where you will be able to vote blah blah" onClose={() => {onClose && onClose() }}>
          <HellsDao />
        </ModalWrapper>
      )
    case 'polyVidya':
      return (
        <ModalWrapper animation='fade' title="PolyVIDYA" description="polygon + vidya = mad returns" onClose={onClose}>
          <PolyVidya/>
        </ModalWrapper>
      )
    case 'donate':
      return (
        <ModalWrapper animation='fade' title="Donate" description="if you want devs to do something then please consider donating" onClose={onClose}>
          <Donate/>
        </ModalWrapper>
      )
    case 'dta':
      return (
        <ModalWrapper animation='fade' title="DTA" description="really have no idea where to even begin" onClose={onClose}>
          <DTA/>
        </ModalWrapper>
      )
    case 'generator':
      return (
        <ModalWrapper animation='fade' title="Generator" description="this is a generator" onClose={onClose}>
          <Generator/>
        </ModalWrapper>
      )
    case 'cerberus-inu':
      return (
        <ModalWrapper animation='fade' title="Cerberus Inu" description="not a meme coin, memeazing coin!" onClose={onClose}>
          <CerberusInu />
        </ModalWrapper>
      )
    case 'about':
      return (
        <ModalWrapper animation='fade' title="About" description="this is a place where you will be able to vote blah blah" onClose={onClose}>
        </ModalWrapper>
      )
    default:
      return null;
  }
}