import { FC, useEffect } from "react";
import classNames from "classnames";
import ReactDOM from "react-dom";
import styles from "./index.module.scss";
import { IModalProps } from "@constants/interfeaces";
import { MODAL_SIZE } from "@constants/types";
import { ICON_NAMES } from "@constants/config";
import useBodyScrollLock from "@hooks/useBodyScrollLock";
import useGlobalContext from "@hooks/useGlobalContext";
import SVGIcon from "@components/reusables/SVGIcon";

/**
 *
 * When requiring users to interact with the application without jumping to a new page and interrupting the user's workflow,
 * we can use this Modal to create a new floating layer over the current page to get user feedback or display information.
 */
const CModal: FC<IModalProps> = ({
  isOpen,
  closable = true,
  children,
  className = "",
  title,
  size = MODAL_SIZE.DEFAULT,
  onClose,
}) => {
  const _root = document.querySelector("#modal") as Element;

  const { closeAllModal } = useGlobalContext();

  useBodyScrollLock(isOpen);

  useEffect(() => {
    const modalContent = _root?.querySelectorAll(`.${styles.modal_wrap}`);

    if (modalContent) {
      for (let i = 0; i < modalContent.length; i++) {
        modalContent[i].removeEventListener("mousedown", (event) => {});
        modalContent[i].addEventListener("mousedown", (event) => {
          const clickedElement = event.target as HTMLElement;
          if (clickedElement.className === styles.modal_wrap) {
            closeAllModal();
          } else if (
            clickedElement.nodeName !== "INPUT" &&
            clickedElement.nodeName !== "TEXTAREA"
          )
            event.preventDefault();
        });
      }
    }
  }, [isOpen]);

  return isOpen ? (
    <>
      {ReactDOM.createPortal(
        <>
          <div
            className={styles.modal_overlay}
            data-testid="modal"
            onClick={() => {}}
          />
          <div
            className={classNames(styles.modal_wrap, className)}
            onClick={() => {}}
          >
            <div className={styles.modal_body}>
              <div className={classNames(styles.modal_content, styles[size])}>
                {title !== undefined && (
                  <div className={styles.modal_title}>{title}</div>
                )}
                {children}
                {closable && (
                  <button
                    className={styles.close_icon}
                    onClick={onClose ? onClose : closeAllModal}
                    data-testid="close-modal"
                  >
                    <SVGIcon name={ICON_NAMES.CLOSE} active />
                  </button>
                )}
              </div>
            </div>
          </div>
        </>,
        _root
      )}
    </>
  ) : (
    <></>
  );
};

export default CModal;
