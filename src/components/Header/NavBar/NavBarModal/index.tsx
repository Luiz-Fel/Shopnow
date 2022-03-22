import Link from "next/link";
import { AiFillTag, AiOutlineArrowRight } from "react-icons/ai";
import ReactModal from "react-modal";
import { showProps } from "..";
import styles from "./styles.module.scss";
import Image from 'next/image'

interface NavBarModalProps {
  show: showProps,
  content: contentProps[],
  handleClose: () => void,
  name: string,
  others: {
    saleBanner: {
      url: string,
      src: StaticImageData,
    }
    navBarScroll: {
      name: string,
      sale: number,
      imageUrl: StaticImageData,
    }[]
  }
}
interface contentProps {


    title: string;
    contentLinks: {
      name: string;
      url: string;
    }[];
}

export function NavBarModal({show, content, handleClose, name, others} : NavBarModalProps) {
  return (
    <ReactModal
      isOpen={show[name]}
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
          bottom: "150px",
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
          <div className={styles.linksSection}>

          {content.map((curr) => {
            return(
              <div className={styles.linkColumn}>
                <div className={styles.linkTitleSection}>
                  <AiFillTag size={"1.5rem"} color={'#1071FF'}/>
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
          {
          //<img src={others.saleBanner.src} />
          }
          {others.navBarScroll.map((item) => {
            return(
              <Link href={""}>
                <a>
                  <div className={styles.promotialCard}>
                    <Image src={item.imageUrl}  width={40} height={40}/>
                    <p>{item.name} <span> {item.sale + '% off'}</span> </p>
                  </div>
                </a>
              </Link>
            )
          })}
        </div>
      <Link href={'/'}>
          <a className={styles.viewAllLink}>
            View all markets
            <AiOutlineArrowRight  color={'#1071FF'}/>
          </a>
      </Link>
      </div>
    </ReactModal>
  );
}
