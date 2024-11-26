import { ReactNode } from "react";
import { ModalSizeType, TokenDirectionType } from "./types";

export interface ICButtonStyleProps {
  dynamicstyle: {
    hoverBackColor?: string;
    hoverAction?: boolean;
    radius?: string;
    color?: string;
    width?: string;
    height?: string;
    backColor?: string;
    hoverColor?: string;
    fontFamily?: string;
    fontSize?: number;
    padding?: string;
    borderColor?: string;
    borderWidth?: string;
  };
}

export interface IModalProps {
  /**
   * Whether the modal is visible or not
   */
  isOpen: boolean;

  /**
   * Whether a close (x) button is visible on bottom of the modal or not
   */
  closable?: boolean;

  /**
   * Specify a function that will be called when the user clicks the Cancel button.
   */
  onClose?: () => void;

  /**
   * The Child nodes that are being rendered inside the Container Component
   */
  children: ReactNode;

  /**
   * The classname for adding additional styling to the modal
   */
  className?: string;
  /**
   * The modal title
   */
  title?: string;
  /**
   * The modal title
   */
  size?: ModalSizeType;
}

export interface IModalState {
  opened: boolean;
  params?: Record<string, any>;
}

export interface IModalsState {
  [modalId: string]: IModalState;
}

export interface ISVGIconProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  active?: boolean;
  black?: boolean;
  color?: string;
  fillColor?: string;
  size?: number;
}

export interface IToken {
  id: string;
  name: string;
  logo: string;
  display_name: string;
  color: string;
  keyword: string;
  network?: INetwork;
  category_id: Array<string>;
  network_id: string;
  network_name: string;
  network_logo: string;
}

export interface INetwork {
  id: string;
  logo: string;
  name: string;
}

export interface ICategory {
  id: string;
  name: string;
}

export interface ITokenModalParams {
  type: TokenDirectionType;
  tokens: IToken[];
  networks: INetwork[];
  categories: ICategory[];
  selToken?: IToken;
  selNetwork?: INetwork;
}

export interface IOrderDetail {
  orderId: string;
  creation_time: number;
  deposit_tx_hash?: string;
  receive_tx_hash?: string;
  first_tx_receive_time: 0;
  from_amount: string;
  from_network: {
    logo: string;
    name: string;
  };
  from_symbol: string;
  to_amount: string;
  to_address: string;
  to_symbol: string;
  to_network: {
    logo: string;
    name: string;
  };
  paying_address: string;
  status: number;
}
