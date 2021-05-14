import dynamic from 'next/dynamic'
import styles from '../styles/Home.module.css'

const SlideShow = dynamic(
    () => import('../components/SlideShow'),
    { ssr: false }
  )

const Main = ({children}) => {
  return (
    <div>
      {children}
      <div className={styles.bg_slider} >
          <a href="" className={styles.mainTitle}>Beyond Capital</a>
      </div>
      <div style={{display:'none'}}>
        <SlideShow />
      </div>
    </div>
  )
}

export default Main
