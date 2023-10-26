import React, { useContext } from 'react'
import { bucket } from '../Store/CreateStore';
import { Link} from 'react-router-dom';
import "./Home.css"
import Footer from '../Routes/Footer';
function Home() {
  const [data] = useContext(bucket)
  console.log(data);
  return (
    <>
        <h1 className='news-head' style={{margin:"20px", color:"lightsalmon"}}>Latest</h1>
        <div className='home-latest'>
        {data.filter((data)=> data.cat === "Latest").map((item ,index)=>{
            // console.log(item);
            console.log(item.id)
            return (
              <div  className='home-latest-parent' key={index}>
                  <Link className='link-home' to={`/detailshome/${item.id}`}>
                    <div className='home-latest-child'>                      
                      <div>
                        <img className='home-latest-image' src={item.image} alt="not found"/> 
                        <h2 style={{margin:"20px 0px"}}>{item.heading}</h2>
                        <p style={{margin:"20px 0px"}}>{item.description.slice(0, 80)} . . .</p>
                      </div>
                    </div>
                  </Link>
                  {/* <hr/> */}
              </div>
              )
            })} 
        </div>
        <div className='article-parent'>
          <div className='left-cont'>
            <h2 className='news-head' style={{marginTop:"20px", color:"lightsalmon"}}>Latest Article</h2>
          {data.filter((data)=> data.cat === "Article").map((item ,index)=>{
            // console.log(item); 
            console.log(item.id)
            return (
              <div  className='home-latest-parent' key={index}>
                  <Link className='' to={`/detailshome/${item.id}`}>
                    <div className='home-latest-child'>                      
                      <div className='single-latest-article'>
                        <div>
                          <img className='home-latest-article-image' src={item.image} alt="not found"/> 
                        </div>
                        <div>
                          <h4>{item.heading}</h4>
                          <p style={{fontSize:"12px"}} >{item.description.slice(0, 80)} . . .</p>
                        </div>
                      </div>
                    </div>
                    {/* <hr/> */}
                  </Link>                  
              </div>
              )
            })}
          </div>
          <div className='right-cont'>
            <div className='advert-parent'>
              <a href="https://karnatakatourism.org/">
                <div className='advert'>
                    <h2 className='advert-head news-head' style={{marginTop:"20px", color:"lightsalmon"}}>Advertisement</h2>
                      <img width={"200px"} height={"150px"} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg9ppROvd32lgEZuWK1CtEY0uqCOC1UL0jWzLYybidwnyDj2ZUTLpw&usqp=CAE&s' alt='ad img' />
                      <img className='advert-image' width={"400px"} height={"550px"} src='https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/652c3184501321.Y3JvcCw5MzAsNzI4LDM3Nyww.jpg' alt='ad img'/>
                </div>
              </a> 
            </div>
            <div className='home-top'>
            <h2 className='news-head' style={{marginTop:"20px", color:"lightsalmon"}}>Latest Top</h2>
            {data.filter((data)=> data.cat === "Top").map((item ,index)=>{
            // console.log(item); 
            console.log(item.id)
            return (
              <div  className='home-latest-parent' key={index}>
                  <Link className='' to={`/detailshome/${item.id}`}>
                    <div className='home-latest-child'>                      
                      <div className='single-latest-top'>
                        <div>
                          <img className='home-latest-top-image' src={item.image} alt="not found"/> 
                        </div>
                        <div>
                          <h3>{item.heading.slice(0, 50)}...</h3>
                        </div>
                      </div>
                    </div>
                    {/* <hr/> */}
                  </Link>    
              </div>
              )
            })}
            </div>
          </div>
        </div>
        <h1 className='news-head' style={{margin:"20px", color:"lightsalmon"}}>Stories</h1>
        <hr/>
        <div className='home-latest'>
        {data.filter((data)=> data.cat === "Stories").map((item ,index)=>{
            // console.log(item);
            console.log(item.id)
            return (
              <div  className='home-latest-parent' key={index}>
                  <Link className='link-home' to={`/detailshome/${item.id}`}>
                    <div className='home-latest-child'>                      
                      <div>
                        {/* <img className='home-latest-image' src={item.image} alt="not found"/>  */}
                        <h2 style={{margin:"20px 0px"}}>{item.heading}</h2>
                        <p style={{margin:"20px 0px"}}>{item.description.slice(0, 230)} . . .</p>
                      </div>
                    </div>
                  </Link>
                  {/* <hr/> */}
              </div>
              )
            })} 
        </div>
        <Footer/>
    </>
  )
}

export default Home;