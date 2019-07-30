import React,{Component} from 'react'
import MktBanner from '../MktBanner'
import {getBanner,removeBanner,getList,removeList} from './actionCreator'
import {connect} from 'react-redux'
import css from './index.module.css'
import Siloitem from '../Siloitem'
class Men extends Component {

    render() {
        return (
            <div>
                {
                    this.props.banner.map(item => 
                        <MktBanner key={item.id} info={item} {...this.props} ></MktBanner>
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
    }
    componentWillUnmount() {
        this.props.removeBanner()
        this.props.removeList()
    }
}
const mapStateToProps = (state) => {
    return {
        banner: state.banner,
        list: state.list
    }
}
const mapDispatchToProps = {
    getBanner: getBanner,
    removeBanner: removeBanner,
    getList: getList,
    removeList: removeList
}
export default connect(mapStateToProps,mapDispatchToProps)(Men)
