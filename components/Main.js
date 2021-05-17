import dynamic from 'next/dynamic'
import styles from '../styles/Home.module.css'

const SlideShow = dynamic(
    () => import('../components/SlideShow'),
    { ssr: false }
  )

const handleOnClick = () =>{
  document.getElementsByClassName("Home_bg_slider__1jKsY")[0].style.display = "none"
  document.getElementsByClassName("Home_slide_show__fyOIu")[0].style.display = "block"
}

const Main = ({children}) => {
  return (
    <div>
      {children}
      <div onClick={() => handleOnClick()} className={styles.bg_slider} >
          <a href="" className={styles.mainTitle}>Beyond Capital</a>
      </div>
      <div className={styles.slide_show}>
        <SlideShow />
      </div>
    </div>
  )
}

export default Main
