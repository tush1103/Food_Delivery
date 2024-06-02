import Link from 'next/link'
import classes from './page.module.css'
export default function Home () {
  return (
    <>
      <header className={classes.header}>
        <div className={classes.slideshow}></div>
        <div>
          <div className={classes.hero}>
            <h1>NextLevel Food for NextLevel foodies</h1>
            <p>Taste & share food from all over the world</p>
          </div>
          <div className={classes.cta}>
            <Link href='/community'>Join the community</Link>
            <Link href='/meals'>Explore Meals</Link>
          </div>
        </div>
      </header>
      <main></main>
    </>
  )
}
