import { ReactNode } from "react";
import styles from "../styles/common/card.module.css";

interface ChildProps {
  children: ReactNode;
}

function Card({ children }: ChildProps) {
  return <div className={styles.card}>{children}</div>;
}

export default Card;
