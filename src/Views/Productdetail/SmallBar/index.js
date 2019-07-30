import React,{Component} from 'react'
import css from './index.module.scss'
class SmallBar extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            scrollY:null
         };
    }
    render() {
        return (
            <div>
            {
                this.state.scrollY>591?
                <ul className={css.smallbar}>
                    <li
                    className={(
                        this.state.scrollY>591&&this.state.scrollY<800?
                        css.current:
                        ''
                        )}
                    >参数</li>
                    <li
                    className={(
                        this.state.scrollY>800&&this.state.scrollY<6592?
                        css.current:
                        ''
                        )}
                    >详情</li>
                    <li
                    className={(
                        this.state.scrollY>6592?
                        css.current:
                        ''
                        )}
                    >品牌</li>
                    <li>评论</li>
                </ul>:
                null
            }
                
            </div>
        );
    }
    componentDidMount(){
        window.addEventListener('scroll', this.handleScroll);	
      }
         
      handleScroll=()=>{
        this.setState({
            scrollY:window.scrollY
        })
      }
}

export default SmallBar;