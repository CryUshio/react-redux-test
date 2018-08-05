import React, {Component} from 'react';
import Clock from '@/component/Clock';
import './index.less';

export default class Topbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShow: false,
            username: props.username,
        };
        this.timer = '';
    }

    showMenu(bool) {
        clearTimeout(this.timer);
        this.timer = setTimeout(() => {
            this.setState(() => ({
                isShow: bool,
            }));
        }, 70);
    }

    render() {
        return (
            <div className="topbar">
                <span className="logo">LOGO</span>
                <div className='userarea'>
                    <span className='clock'><Clock></Clock></span>
                    <div className='userarea_wrapper'
                         onMouseOver={() => this.showMenu(true)} 
                         onMouseOut={() => this.showMenu(false)}
                         onClick={() => this.showMenu(false)}>
                        <a className='username'>
                            {this.state.username}
                        </a>
                        <i className={`iconfont icon-unfold unfold ${this.state.isShow ? 'unfold_hover' : ''}`}></i>
                        <div className={`usermenu_wrapper ${this.state.isShow ? 'usermenu_wrapper_show' : ''}`}>
                            <div className='usermenu'>
                                <ul>
                                    <li>修改密码</li>
                                    <li>退出登录</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
