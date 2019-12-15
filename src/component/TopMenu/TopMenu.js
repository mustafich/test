import React from "react"
import "./css/index.css"

const TopMenu = () => {
  return (
      <div className="topMenu">
          <div className="container">
            <div className="topMenu-block">
                <div className="topMenu-block_text">
                    <h1>Тестовое задание для artjoker</h1>
                </div>
               <div className="topMenu-block_img">
                   <img src="https://artjoker.ua/frontend/images/logo.svg" alt=""/>
               </div>
            </div>
          </div>
      </div>
    )
}

export default TopMenu