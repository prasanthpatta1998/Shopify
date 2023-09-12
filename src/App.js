import { useState } from "react"
import Navbar from "./components/Navbar"
import { RiCornerDownRightLine } from "react-icons/ri";
import './App.css'

const shopifyData = [
  {
    id: 1,
    payMethod: "Basic",
    pay1: "FOR INDIVIDUALS & SMALL BUSINESSES",
    pay2: "Everything you need to create your store, ship products, and process payments",
    amount: "1,994",
    includes: ["Basic reports", "Up to 1,000 inventory locations", "2 staff accounts"]
  },
  {
    id:2,
    payMethod: "Shopify",
    pay1: "FOR SMALL BUSINESSES",
    pay2: "Level up your business with professional reporting and more staff accounts",
    amount: "7,447",
    includes: ["Professional reports", "Up to 1,000 inventory locations", "5 staff accounts"]
  },
  {
    id: 3,
    payMethod: "Advanced",
    pay1: "FOR MEDIUM TO LARGE BUSINESSES",
    pay2: "Get the best of Shopify with custom reporting and our lowest transaction fees",
    amount: "30,164",
    includes: ["Custom report builder", "Up to 1,000 inventory locations", "15 staff accounts"]
  }
]



const App = () => {

  const [method, changeMethod] = useState(shopifyData[0])
  const [dynamicb1, changeDynamicButton1] = useState(true)
  const [dynamicb2, changeDynamicButton2] = useState(false)

  const dynamicStyle1 = dynamicb1 && "change" 
  const dynamicStyle2 = dynamicb2 && "change"
  console.log(dynamicStyle2)
 
  return(
    <div>
      <Navbar />
      <ul className="sm-pay-method">
        {shopifyData.map(each => {

          const payMethod = method.id === each.id && "pay-method-2" 

          return(
        <li className={`pay-method ${payMethod}`} onClick={()=>{
           const newData = shopifyData.filter(eachone => eachone.id === each.id)
           changeMethod(newData[0])
        }} key={each.id}>{each.payMethod}</li>
          )
      })}
      </ul>
      <div className="pay-method-item"> 
              <h1 className="heading">{method.payMethod}</h1>
              <p className="pay1">{method.pay1}</p>
              <p className="pay2">{method.pay2}</p>
              <div className="amount"><h1>{`₹${method.amount}`}</h1>
              <div className="inr-mo">
                <p className="inr">INR</p>
                <p className="inr">/mo</p>
                </div></div>
              <p className="grabasa">Get your first 3 months for ₹20/mo</p>
              <p className="plan">{`What included on ${method.payMethod}`}</p>
              <div className="plan-container">
                {method.includes.map(eachItem => <div className="plan-list-item">
                  <RiCornerDownRightLine className="right-mark"/>
                  <p >{eachItem}</p>
                  </div>)}
              </div>
              <button className="try-button">Try for free</button>
      </div>
      <div className="paying-option-container">
      <div className="paying-option">
        <button className={`${dynamicStyle1} dynamic-button`} onClick={() => {
          changeDynamicButton1(true)
          changeDynamicButton2(false)
        }}>Pay Monthly</button>
        <button className={`${dynamicStyle2} dynamic-button`} onClick={()=>{
          changeDynamicButton2(true)
          changeDynamicButton1(false)
        }}>{`Pay Yearly (save 25%)`}</button>
      </div>
      </div>
      <ul className="display-pay-methods">
        {
          shopifyData.map(each => {

            const intValue = parseInt(each.amount.replace(/,/g, ''), 10);
            const charges = dynamicb1 ? each.amount : parseInt(((intValue * 12) - (intValue * 12 * 0.25)) / 12)
        

            return(
            <li className="pay-method-items"> 
              <h1 className="heading">{each.payMethod}</h1>
              <p className="pay1">{each.pay1}</p>
              <p className="pay2">{each.pay2}</p>
              <div className="amount"><h1>{`₹${charges}`}</h1>
              <div className="inr-mo">
                <p className="inr">INR</p>
                <p className="inr">/mo</p>
                </div></div>
              <p className="grabasa">Get your first 3 months for ₹20/mo</p>
              <p className="plan">{`What included on ${each.payMethod}`}</p>
              <div className="plan-container">
                {method.includes.map(eachItem => <div className="plan-list-item">
                  <RiCornerDownRightLine className="right-mark"/>
                  <p >{eachItem}</p>
                  </div>)}
              </div>
              <button className="try-button">Try for free</button>
            </li>
            )
          }
          )
        }
      </ul>
    </div>
  )
}

export default App