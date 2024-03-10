import { useRef, useState } from "react";
import Avatar from "../Componenet/Avatar";
import Overlay from "../Componenet/Overlay";
import styles from "../styles/addGroup.module.css";
import { FaSearch } from "react-icons/fa";
import Notify from "../Componenet/Toaster";

interface AddGropsProps {
  isOpen: boolean;
  onClose: () => void;
}

function AddGroup({ isOpen, onClose }: AddGropsProps) {
  return (
    <>
      {isOpen && (
        <Overlay
          isOpen={isOpen}
          onClose={onClose}
          children={<AddGroupScreen />}
        />
      )}
    </>
  );
}

export default AddGroup;

const AddGroupScreen = () => {
  const [userInfo, setUserInfo] = useState<
    | {
        name: string;
        imageUrl: string;
      }[]
    | []
  >([]);

  const [isOpenCreateGroup, setIsOpenCreateGroup] = useState<boolean>(false);

  const closeOpenCreateGroupOverlay = () =>
    setIsOpenCreateGroup((prev) => !prev);

  const handleInputCheckBox = (
    e: React.ChangeEvent<HTMLInputElement>,
    name: string,
    imageUrl: string
  ) => {
    if (e.target.checked) setUserInfo((prev) => [{ name, imageUrl }, ...prev]);
    else
      setUserInfo((prev) =>
        prev.filter((el) => el.name !== name && el.imageUrl !== imageUrl)
      );
  };

  const handleGoToCreateGroup = () => {
    if (userInfo.length < 2)
      Notify({
        toastType: "error",
        msg: "Please Select atleast two memeber for creating group",
      });
    else setIsOpenCreateGroup((prev) => !prev);
  };

  return (
    <>
      <div className={styles.add_group}>
        <h3>Add Group</h3>
        <input type="text" required />
        <FaSearch className={styles.icon} />
      </div>
      <div className={styles.user_list}>
        <ul>
          {[...Array(18)].map((_) => (
            <li>
              <Avatar imageHeight="4rem" />
              <h4>Aman Shah Ahamed</h4>
              <input
                type="checkbox"
                className={styles.checkbox}
                onChange={(e) => handleInputCheckBox(e, "Aman Shah Ahamed", "")}
              />
            </li>
          ))}
        </ul>
      </div>
      <button
        className={styles.btn}
        type="button"
        onClick={handleGoToCreateGroup}
      >
        {"Add To Group"}
      </button>

      {isOpenCreateGroup && (
        <Overlay
          isOpen={isOpenCreateGroup}
          onClose={closeOpenCreateGroupOverlay}
          children={
            <AddGroupName
              user={userInfo}
              onClose={closeOpenCreateGroupOverlay}
            />
          }
        />
      )}
    </>
  );
};

interface AddGroupNameProps {
  user: { name: string; imageUrl: string }[];
  onClose: () => void;
}

const AddGroupName = ({ user, onClose }: AddGroupNameProps) => {
  const groupNameRef = useRef<HTMLInputElement>(null);
  const handleOnClick = () => {
    if (groupNameRef.current) {
      if (groupNameRef.current.value) {
        Notify({
          toastType: "success",
          msg: `${groupNameRef.current.value} group is created`,
        });
        onClose();
      } else Notify({ toastType: "error", msg: "Group name cant be empty" });
    }
  };
  return (
    <>
      <div className={styles.form}>
        <label htmlFor="group_name">Group Name</label>
        <input type="text" name="group_name" ref={groupNameRef} />
      </div>
      <div className={styles.user_list}>
        <ul>
          {user.map((_) => (
            <li>
              <Avatar imageHeight="4rem" />
              <h4>{_.name}</h4>
            </li>
          ))}
        </ul>
      </div>
      <button className={styles.btn} type="button" onClick={handleOnClick}>
        {"Create Group"}
      </button>
    </>
  );
};
