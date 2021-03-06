import React from 'react';
import img_1 from '@/static/img/1.jpg';
import img_2 from '@/static/img/2.jpg';
import img_3 from '@/static/img/3.jpg';
import img_4 from '@/static/img/4.jpg';
import img_5 from '@/static/img/5.png';

import './index.less';

export default class Carousel extends React.Component {
    state = {
        carouselList: [{
            url: 'https://www.google.com',
            src: img_1
        }, {
            url: '',
            src: img_2
        }, {
            url: '',
            src: img_3
        }, {
            url: '',
            src: img_4
        }, {
            url: '',
            src: img_5
        }],
        carouselOffset: 0,
        offsetWidth: 0,
    };

    render() {
        const { carouselList, carouselOffset, offsetWidth } = this.state;
        let lists = []
        for (let i = 0; i < carouselList.length; i++) {
            lists[i] = 0;
        }


        let carousel_offset = {
            left: - carouselOffset * offsetWidth + 'px'
        };

        return (
            <div className='carousel'>
                <div // ref={(el) => this.carouselWrapper = el}
                    className='carousel_wrapper'
                    style={carousel_offset}>
                    <For each='item' index='i' of={carouselList}>
                        <div key={i} className='carousel_content'>
                            <a href={item.url} target="blank">
                                <img src={item.src} alt="" />
                            </a>
                        </div>
                    </For>
                </div>
                <div className='bottom_line'>
                    <For index='i' of={lists}>
                        <a key={i}
                            onClick={() => this.gotoPosition(i)}
                            className={`bottom_circle ${i === carouselOffset ? 'bottom_circle_choosed' : ''}`}>
                        </a>
                    </For>
                </div>
            </div>
        );
    }

    UNSAFE_componentWillMount() {
        this.getOffsetWidth();
    }

    componentDidMount() {
        this.timerID = setInterval(() => {
            this.setState((prevState) => {
                if (prevState.carouselOffset + 1 == this.state.carouselList.length) {
                    return {
                        carouselOffset: 0
                    };
                }
                return {
                    carouselOffset: prevState.carouselOffset + 1
                };
            });
        }, 6000);
        window.addEventListener('resize', () => this.getOffsetWidth());
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
        window.removeEventListener('resize', () => this.getOffsetWidth());
    }

    getOffsetWidth() {
        let offsetWidth = document.body.clientWidth;
        console.log(offsetWidth);
        this.setState({ offsetWidth });
    }

    onResize(time) {
        let timer = null;
        return () => {
            clearTimeout(timer);
            timer = setTimeout(() => {
                this.getOffsetWidth();
            }, time);
        }
    }

    gotoPosition(id) {
        this.setState({
            carouselOffset: id
        });
    }
}
