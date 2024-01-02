import React, { useEffect,useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faCoffee } from '@fortawesome/free-solid-svg-icons'
    import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
    import { Button } from 'react-bootstrap';
    import Form from 'react-bootstrap/Form';
export default function Home() {
    const [data, setData] = useState(null);
    const [filteredData, setFilteredData] = useState([]);
    const [search, setSearch] = useState('');
    const [addtocart, setAddtocart] = useState([]);
    useEffect(() => {
        fetch('https://dummyjson.com/products')
.then(res => res.json())
// .then(console.log)
.then(data => {
    setData(data.products);
    setFilteredData(data.products);
    console.log(data.products);
});

    }, []) ;
    const handlesearch = (e) => {
        setSearch(e.target.value);
      
        let value = e.target.value;
    
        const filteredData = data.filter((data) => {
          return data.title.toLowerCase().includes(value.toLowerCase()) ;
        });
        

        setFilteredData(filteredData);
        // console.log(filteredData);
      }

  return (
    <div >
    
<div class="containersearch">
  <div class="searchInputWrapper">
    <input class="searchInput" 
    onChange={handlesearch}
    type="text" placeholder='Search'/>
     
   
    
    

    
    
  </div>
  <div class="pricerange">
    <Form.Select
      onChange={(e) => {
        let value = e.target.value;
        if(value === 'hol'){
            const sortedData = [...filteredData].sort((a,b) => b.price - a.price);
            setFilteredData(sortedData);
        }else if(value === 'loh'){
            const sortedData = [...filteredData].sort((a,b) => a.price - b.price);
            setFilteredData(sortedData);
        }else{
            setFilteredData(data);
        }
        }}
    aria-label="Default select example">
    <option value="loh">low-to-high</option>
        <option value="hol">high-to-low</option>
    </Form.Select>
    </div>
<div class="cart">
  <FontAwesomeIcon icon={faCartShopping} />
    <span class="cart__count">{
        addtocart.length
    }</span>
</div>
</div>
<div class="container">
<main class="main bd-grid">
  {
  filteredData.length > 0 ? (
    filteredData.map((data,id) => {
      return (
        
  
    
        <article class="card"
        key={id}
          >
            <div class="card__img">
                <img src="https://i.postimg.cc/8PkwdTYd/image.png" alt=""/>
            </div>
            <div class="card__name">
                <p><a>View Product</a></p>
            </div>
            <div class="card__precis">
                
                
                <div>
                    <span class="card__preci card__preci--before">{data.title}</span>
                    <span class="card__preci card__preci--after">{data.price}rs</span>
                    <span class="card__preci card__preci--after">
                        <Button class="btn btn-primary btn-custom"
                        onClick={() => {
                            setAddtocart([...addtocart, data]);
                        }}
                        >
                            Add to Cart
                        </Button>
                    </span>

                </div>
                {/* <div class="wishlist" onClick={()=>{
                  data.wishlist = !data.wishlist;
                  setData([...datajson.products]);
                }}>

                <FontAwesomeIcon icon={faCoffee}
               
                />

                </div> */}
                
            {/* {product.name} */}
            
      
       
            </div>
        </article>

      
   


      );
    })
  ) : (
    <p>No Data Found</p>
  )
  }
 </main>
</div>
  
   
    </div>
  )
}
