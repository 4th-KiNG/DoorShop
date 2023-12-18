import React, { Component } from "react";
import './CardList.css'

function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  function animateScrollingElements() {
    const elements = document.querySelectorAll('.element-to-animate');
    elements.forEach((element) => {
      if (isElementInViewport(element)) {
        element.classList.add('animated2');
      }
    });
  }
  

export class CardList extends Component{
    render() {
        document.addEventListener('DOMContentLoaded', animateScrollingElements);
        window.addEventListener('scroll', animateScrollingElements);
        return(
            <div className="doorlist">
                {this.props.item.map(el => (
                    <div className="element element-to-animate">
                        <div>
                            <img src={el.img} alt="" className="img-of-door"/>
                        </div>
                        <p className="cost">{el.id}</p>
                    </div>
                ))}
            </div>

        )
    }
}

export default CardList;