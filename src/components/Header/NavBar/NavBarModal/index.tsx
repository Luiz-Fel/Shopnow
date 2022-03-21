import Link from "next/link";
import { AiFillTag } from "react-icons/ai";
import ReactModal from "react-modal";
import { showProps } from "..";
import styles from "./styles.module.scss";
interface NavBarModalProps {
  show: showProps,
  content: contentProps[],
  handleClose: () => void,
  name: string,
}
interface contentProps {


    title: string;
    contentLinks: {
      name: string;
      url: string;
    }[];
}

export function NavBarModal({show, content, handleClose, name} : NavBarModalProps) {
  return (
    <ReactModal
      //isOpen={show[name]}
      isOpen={true}
      style={{
        overlay: {
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0)",
        },
        content: {
          position: "absolute",
          top: "120px",
          left: "0px",
          right: "0px",
          bottom: "40px",
          border: "1px solid #851919",
          background: "#fff",
          overflow: "auto",
          WebkitOverflowScrolling: "touch",
          borderRadius: "4px",
          outline: "none",
          padding: "0px",
        },
      }}
    >
    
      <div onMouseLeave={handleClose}  className={styles.modal}>
          <div className={styles.links}>

          {content.map((curr) => {
            return(
              <div className={styles.linkColumn}>
                <div className={styles.linkTitleSection}>
                  <AiFillTag />
                  <h3 className={styles.linkTitle}>{curr.title}</h3>
                </div>
                {curr.contentLinks.map((contentLink) => {
                  return(
                    <Link href={contentLink.url}>
                      <a className={styles.link}>
                        {contentLink.name}
                      </a>
                    </Link>
                  )
                })}
              </div>
            )
          })}
        </div>
        <div className={styles.others}>

        </div>
      </div>
    </ReactModal>
  );
}
