import React, { Component } from "react";
import './CardListFur.css'

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
  

export class CardListFur extends Component{
    render() {
        document.addEventListener('DOMContentLoaded', animateScrollingElements);
        window.addEventListener('scroll', animateScrollingElements);
        return(
            <div className="doorlist">
                {this.props.item.map(el => (
                    <div className="element-fur element-to-animate">
                        <div>
                            <img src={el.img} alt="" className="img-of-fur"/>
                        </div>
                        <p className="cost1">{el.id}</p>
                    </div>
                ))}
            </div>

        )
    }
}

export default CardListFur;