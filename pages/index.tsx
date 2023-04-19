import type {NextPage} from 'next'

const Home: NextPage = () => {
  let name = 'zzong'
  let link = 'http://google.com'
  return (
    <div>
      <h4 className={'title'} style={{'color': 'coral', 'fontSize': 24}}>Hello Next</h4>
      <p className="title-sub">by dev {name}</p>
    </div>
  )
}

export default Home
