import Link from "next/link";
import ReactModal from "react-modal";
import styles from "./styles.module.scss";

interface showProps {
  eletronics: boolean;
  computers: boolean;
  homeAndKitchen: boolean;
  tools: boolean;
  books: boolean;
}

interface contentProps {
  title: string;
  contentLinks: {
    name: string;
    url: string;
  }[];
}

export function NavBarModal(
  show: showProps,
  handleClose: () => void,
  content: contentProps[]
) {
  return (
    <ReactModal
      isOpen={show.eletronics}
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
          top: "128px",
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
      <div onMouseLeave={handleClose} className={styles.modal}>
        {content.map((current) => {
          return (

            <>
              <h3>{current.title}</h3>
              {

              current.contentLinks.map((link) => {
                return (
                  <Link href={link.url}>
                    <a>{link.name}</a>
                  </Link>
                );
              })
              
              }
            </>

          );
        })}
      </div>
    </ReactModal>
  );
}
