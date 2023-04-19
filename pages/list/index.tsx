import type {NextPage} from 'next'

const List: NextPage = () => {
  let name = 'zzong'
  let link = 'http://google.com'
  return (
    <div>
      <h4 className={'title'}>상품목록</h4>
      <div className="food">
        <h4>상품1 $50</h4>
      </div>
      <div className="food">
        <h4>상품2 $60</h4>
      </div>
    </div>
  )
}

export default List
