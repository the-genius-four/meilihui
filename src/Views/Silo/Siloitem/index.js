import React,{Component} from 'react'
import css from './index.module.scss'
import {connect} from 'react-redux'
class Siloitem extends Component {
    render() {
        return (
            <div className={css.item}>
                <div className={css.eventItem}>
                    <div>
                        <img src={this.props.info.imageUrl} alt="" />
                        <div className={css.eventInfo}>
                            <div className={css.eventIcon}>
                                {
                                    this.props.eventIconShow?
                                    <span>海外直发</span>
                                    : null
                                }
                            </div>
                            <div className={css.eventBase}>
                                <span className={css.eventBrand}>{this.props.info.englishName}</span>
                                <span className={css.eventName}>{this.props.info.chineseName}</span>
                                <span className={css.eventDiscount}>{this.props.info.discountText}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        eventIconShow: state.eventIconShow
    }
}


export default connect(mapStateToProps,null)(Siloitem)