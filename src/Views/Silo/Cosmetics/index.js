import React,{Component} from 'react'
import MktBanner from '../MktBanner'
import {getBanner,removeBanner,getList,removeList,getcategoryList,removecategoryList} from './actionCreator'
import {connect} from 'react-redux'
import css from './index.module.scss'
import Siloitem from '../Siloitem'
class Cosmetics extends Component {

    render() {
        return (
            <div>
                {
                    this.props.banner.map(item => 
                        <MktBanner key={item.id} info={item} {...this.props} ></MktBanner>
                    )
                }
                <div className={css.categoryList}>
                    <div className={css.subMenu}>
                        <ul>
                            {
                                this.props.categoryList.map(item =>
                                    <li key={item.categoryTwoId} className={css.CategoryList}>
                                        <img src={item.categoryImgStr} alt=""></img>
                                    </li>
                                )
                            }
                        </ul>
                    </div>
                </div>
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
        this.props.getcategoryList()
    }
    componentWillUnmount() {
        this.props.removeBanner()
        this.props.removeList()
        this.props.removecategoryList()
    }
}
const mapStateToProps = (state) => {
    return {
        banner: state.banner,
        list: state.list,
        categoryList: state.categoryList
    }
}
const mapDispatchToProps = {
    getBanner: getBanner,
    removeBanner: removeBanner,
    getList: getList,
    removeList: removeList,
    getcategoryList: getcategoryList,
    removecategoryList: removecategoryList
}


export default connect(mapStateToProps,mapDispatchToProps)(Cosmetics)