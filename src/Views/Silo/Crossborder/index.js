import React,{Component} from 'react'
import MktBanner from '../MktBanner'
import Siloitem from '../Siloitem'
import {getBanner,removeBanner,getList,removeList,ShowEventIcon,HideEventIcon} from './actionCreator'
import {connect} from 'react-redux'
import css from './index.module.css'
class Crossborder extends Component {

    render() {
        return (
            <div>
                {
                    this.props.banner.map(item =>
                        <MktBanner key={item.id} info={item} {...this.props}></MktBanner>
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
    componentWillMount() {
        this.props.ShowEventIcon()
    }
    componentDidMount() {
        this.props.getBanner()
        this.props.getList()
    }
    componentWillUnmount() {
        this.props.removeBanner()
        this.props.removeList()
        this.props.HideEventIcon()
    }
}
const mapStateToProps = (state) => {
    return {
        banner: state.banner,
        list: state.list,
    }
}
const mapDispatchToProps = {
    getBanner: getBanner,
    removeBanner: removeBanner,
    getList: getList,
    removeList: removeList,
    ShowEventIcon: ShowEventIcon,
    HideEventIcon: HideEventIcon,
}


export default connect(mapStateToProps,mapDispatchToProps)(Crossborder)