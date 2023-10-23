import React, { useContext } from 'react'
import { bucket } from '../Store/CreateStore';
import { Link} from 'react-router-dom';
import "./Style.css"
import Footer from '../Routes/Footer';
function Hollywood() {
  const [data] = useContext(bucket)
  console.log(data);
  return (
    <>
      <div className='parentContainer'>
        <div>
          <h2 className='news-head'>Hollywood Latest</h2>
          {data.filter((data)=> data.footer === "Hollywood Latest").map((item ,index)=>{
            // console.log(item);
            console.log(item.id)
            return (
              <div key={index}>
                  <Link to={`/detailshollywood/${item.id}`}>
                    <div className='child-compo-left'>                      
                      <div>
                        <img className='imageLatest' src={item.image} alt="not found"/> 
                      </div>
                      <div>
                        <h2>{item.heading}</h2>
                        <p>{item.description.slice(0, 80)} . . .</p>
                      </div>
                    </div>
                  </Link>
                  <hr/>
                </div>
              )
            })}
          </div>
          <div style={{borderLeft:"2px solid black"}}>
          <h2 className='news-head'>Hollywood Top</h2>
          {data.filter((data)=> data.footer === "Hollywood Top").map((item ,index)=>{
            // console.log(item);
            console.log(item.id)
            return (
              <div key={index}>
                  <Link to={`/detailshollywood/${item.id}`}>
                    <div className='child-compo-right'>                      
                      <div>
                        <img className='imageLatest' src={item.image} alt="not found"/> 
                      </div>
                      <div>
                        <h2>{item.heading}</h2>
                      </div>
                    </div>
                  </Link>
                  <hr/>
              </div>
                             
              )
            })}
            <a href="https://karnatakatourism.org/">
            <div className='advertisement'>
              <h2 className='news-head'>Advertisement</h2>
                <img width={"200px"} height={"150px"} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg9ppROvd32lgEZuWK1CtEY0uqCOC1UL0jWzLYybidwnyDj2ZUTLpw&usqp=CAE&s' alt='ad img' />
                <img width={"400px"} height={"550px"} src='https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/652c3184501321.Y3JvcCw5MzAsNzI4LDM3Nyww.jpg' alt='ad img'/>
            </div>
            </a> 
          </div>
        </div>
        <Footer/>
    </>
  )
}

export default Hollywood;
