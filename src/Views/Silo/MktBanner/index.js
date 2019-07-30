import React,{Component} from 'react'
import css from './index.module.scss'
class MktBanner extends Component {

    render() {
        return (
            <div className={css.banner}>
                <div className={css.bannerImg}>
                    <img src={this.props.info.main_image} alt="" />
                </div>
                <div className={css.bannerSlogan}>
                    <h2 className={css.h2}>{this.props.info.main_title}</h2>
                    <p className={css.p}>{this.props.info.sub_title}</p>
                    <p className={css.p}>{this.props.info.description}</p>
                </div>
            </div>
        )
    }
}

export default MktBanner