import { ReactNode } from "react";
import styles from "../styles/common/overlasy.module.css";

interface OverlayProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}
function Overlay({ isOpen, onClose, children }: OverlayProps) {
  return (
    <>
      {isOpen ? (
        <div className={styles.overlay}>
          <div className={styles.overlay_background} onClick={onClose}></div>
          <div className={styles.overlay_container}>
            <div className={styles.overlay_controls}>
              <button
                className={styles.overlay_close}
                type="button"
                onClick={onClose}
              />
            </div>
            {children}
          </div>
        </div>
      ) : null}
    </>
  );
}

export default Overlay;
