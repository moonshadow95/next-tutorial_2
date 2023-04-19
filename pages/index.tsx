import type {NextPage} from 'next'
import Link from "next/link";

const Home: NextPage = () => {
  let name = 'zzong'
  let link = 'http://google.com'
  return (
    <div>
      <div className="navbar">
        <Link href={'/'}>홈</Link>
        <Link href={'list'}>List</Link>
      </div>
      <h4 className={'title'} style={{'color': 'coral', 'fontSize': 24}}>Hello Next</h4>
      <p className="title-sub">by dev {name}</p>
    </div>
  )
}

export default Home
