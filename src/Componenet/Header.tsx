import { CiSearch } from "react-icons/ci";
import { MdGroupAdd } from "react-icons/md";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoIosLogOut } from "react-icons/io";
import styles from "../styles/header.module.css";
import { ReactNode, useState } from "react";
import AddGroup from "../pages/AddGroup";

interface Children {
  children: ReactNode;
}

function ConditionalHeader({ children }: Children) {
  const currentPath = window.location.pathname;
  const showHeader = ["/home"].includes(currentPath);
  return (
    <>
      {showHeader && <Header />} {children}
    </>
  );
}

export default ConditionalHeader;

const Header = () => {
  const [isOpenGroupScreen, setIsOpenGroupSceen] = useState<boolean>(false);

  const closeGroupScreen = () => setIsOpenGroupSceen((prev) => !prev);

  return (
    <nav className={styles.nav}>
      <div>
        <h2>Chattu</h2>
      </div>
      <ul>
        <li>
          <CiSearch onClick={() => console.log()} />
        </li>
        <li>
          <MdGroupAdd onClick={closeGroupScreen} />
          <AddGroup isOpen={isOpenGroupScreen} onClose={closeGroupScreen} />
        </li>

        <li>
          <IoIosNotificationsOutline />
          <span className={styles.notification}>3</span>
        </li>
        <li>
          <IoIosLogOut />
        </li>
      </ul>
    </nav>
  );
};

// const AddGroup = () => {
//   return (
//     <>
//       <div className={styles.add_group}>
//         <h3>Add Group</h3>
//         <input type="text" />
//         <FaSearch className={styles.icon} />
//       </div>
//       <div className={styles.user_list}>
//         <ul>
//           <li>
//             <Avatar imageHeight="4rem" />
//             <h4>Aman Shah Ahamed</h4>
//             <input type="checkbox" className={styles.checkbox} />
//           </li>
//           <li>
//             <Avatar imageHeight="4rem" />
//             <h4>Aman Shah Ahamed</h4>
//             <input type="checkbox" className={styles.checkbox} />
//           </li>
//           <li>
//             <Avatar imageHeight="4rem" />
//             <h4>Aman Shah Ahamed</h4>
//             <input type="checkbox" className={styles.checkbox} />
//           </li>
//           <li>
//             <Avatar imageHeight="4rem" />
//             <h4>Aman Shah Ahamed</h4>
//             <input type="checkbox" className={styles.checkbox} />
//           </li>
//           <li>
//             <Avatar imageHeight="4rem" />
//             <h4>Aman Shah Ahamed</h4>
//             <input type="checkbox" className={styles.checkbox} />
//           </li>
//         </ul>
//       </div>
//       <button className={styles.btn} type="button">
//         {"Add To Group"}
//       </button>
//     </>
//   );
// };

// interface AddGroupProps {
//   userInfo: { imageUrl?: string; username: string }[];
// }

// const AddGroupForm = () => {};
