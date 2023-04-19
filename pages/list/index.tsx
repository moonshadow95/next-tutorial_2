import type {NextPage} from 'next'

const List: NextPage = () => {
  let products = ['Product1', 'Product2', 'product3']
  return (
    <div>
      <h4 className={'title'}>상품목록</h4>
      {products.map((name, index) =>
        <div className="food" key={index}>
          {/*<Image src={product_image} width={200} height={200} alt="product"/>*/}
          <img src={`/product_${index}.png`} width={200} alt="product"/>
          <h4>{name} $50</h4>
        </div>)
      }
    </div>
  )
}

export default List
