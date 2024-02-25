export interface Item {
  listing_id: string,
  url: string,
  MainImage: {
    url_570xN?: string
  },
  title: string,
  currency_code: string,
  price: string,
  quantity: number
}

export interface Items {
  items: Item[]
}

export function Listing ({ items }: Items) {
  const getCurrency = (currency: string, price: string) => {
    if (currency === 'USD') {
      return `$${price}`
    } else if (currency === 'EUR') {
      return `€${price}`
    } else {
      return `${price} ${currency}`
    }
  }

  const getQuantity = (quantity: number) => {
    if (quantity < 10) {
      return 'level-low'
    } else if (quantity < 21) {
      return 'level-medium'
    } else {
      return 'level-high'
    }
  }

  return(
    <>
    <div className="item-list">
      {items.map((item, index) => (
        <div className="item" key={index}>
        <div className="item-image">
          <a href={item.url}>
            <img src={item.MainImage?.url_570xN} />
          </a>
        </div>
        <div className="item-details">
          <p className="item-title">{item.title}</p>
          <p className="item-price">{getCurrency(item.currency_code, item.price)}</p>
          <p className={`item-quantity ${getQuantity(item.quantity)}`}>{item.quantity} left</p>
        </div>
        </div>
      ))      
      }
    </div>
    </>
  )
}
