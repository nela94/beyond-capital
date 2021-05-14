import Head from 'next/head'


export default function Home() {

  //
  // useEffect(() =>{
  //   console.log("hittinh")
  //     document.getElementsByClassName("Home_bg_slider__1jKsY")[0].style.color='var(--slideTextColor)'
  //     document.getElementsByClassName("Home_bg_slider__1jKsY")[0].style.transition='background_position=-50% 100%'
  //     // document.getElementsByClassName("Home_bg_slider__1jKsY")[0].style.background_size='400%'
  //     console.log("yeah")
  // })


  return (
    <div>
      <Head>
        <title>Beyond Capital</title>
        <meta name="building info" content="promo Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  )
}
