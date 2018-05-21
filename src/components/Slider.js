import React, { Component } from 'react';

class Slider extends Component {
  constructor() {
    super();
    this.state = {
      activeSlideIndex: 0,
    };
  }

  handleChangeSlide = (index) => {
    if (index < 0 || index + 1 > this.props.slides.length) {
      return;
    }

    this.setState(
      ({activeSlideIndex}) => ({activeSlideIndex: index})
    )
  }

  handleKeyPress = (e) => {
    if (e.keyCode === 39) {
      this.handleChangeSlide(this.state.activeSlideIndex + 1);
    } else if (e.keyCode === 37) {
      this.handleChangeSlide(this.state.activeSlideIndex - 1);
    }
  }

  render() {
    const {activeSlideIndex} = this.state;
    const {slides} = this.props;

    const translateXPercent = activeSlideIndex * (100 / slides.length);

    const styleSlides = {
      transform: `translateX(-${translateXPercent}%)`,
      width: `${slides.length * 100}%`,
    };

    const isPrevBtnDisabled = !activeSlideIndex;
    const isNextBtnDisabled = activeSlideIndex + 1 === slides.length;

    const shortcutButtons = slides.map((slide, index) => {
      return (
        <button
          className={`slider__shortcut-btn ${index === activeSlideIndex && 'slider__shortcut-btn--active'}`}
          onClick={() => this.handleChangeSlide(index)}
          key={index}>
          {index + 1}
        </button>
      );
    });

    return (
      <div className="slider" tabIndex="0" onKeyDown={this.handleKeyPress}>
        <div className="slider__slides-container">
          <div className="slider__slides" style={styleSlides}>
            {slides}
          </div>
        </div>

        <div className="slider__nav">
          <button 
            className="slider__arrow-btn"
            onClick={() => this.handleChangeSlide(activeSlideIndex - 1)} 
            disabled={isPrevBtnDisabled}>
            &larr;
          </button>

          <div className="slider__shortcut-btns">
            {shortcutButtons}
          </div>

          <button 
            className="slider__arrow-btn"
            onClick={() => this.handleChangeSlide(activeSlideIndex + 1)} 
            disabled={isNextBtnDisabled}>
            &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default Slider;
