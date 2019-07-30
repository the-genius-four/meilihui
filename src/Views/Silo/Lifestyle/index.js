import React,{Component} from 'react'
import SwiperBanner from '../SwiperBanner'
import {getBanner,removeBanner,getList,removeList,getHitarea,removeHitarea} from './actionCreator'
import {connect} from 'react-redux'
import css from './index.module.scss'
import Siloitem from '../Siloitem'
class Lifestyle extends Component {

    render() {
        return (
            <div>
                <SwiperBanner></SwiperBanner>
                {
                    this.props.hitarea.map(item =>
                        <div className={css.hotarea} key="">
                            <div className={css.pic}>
                                <img src={item.imageUrl} alt="" />
                            </div>
                        </div>    
                    )
                }
                <div className={css.eventContainer}>
                    {
                        this.props.list.map(item =>
                            <Siloitem key={item.eventId} info={item} {...this}></Siloitem>
                        )
                    }
                </div>
            </div>
        )
    }
    componentDidMount() {
        this.props.getBanner()
        this.props.getList()
        this.props.getHitarea()
    }
    componentWillUnmount() {
        this.props.removeBanner()
        this.props.removeList()
        this.props.removeHitarea()
    }
}
const mapStateToProps = (state) => {
    return {
        banner: state.banner,
        list: state.list,
        hitarea: state.hitarea
    }
}
const mapDispatchToProps = {
    getBanner: getBanner,
    removeBanner: removeBanner,
    getList: getList,
    removeList: removeList,
    getHitarea: getHitarea,
    removeHitarea: removeHitarea
}
export default connect(mapStateToProps,mapDispatchToProps)(Lifestyle)