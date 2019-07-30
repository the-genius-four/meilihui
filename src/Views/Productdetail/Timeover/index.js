import React,{Component} from 'react'
import css from './index.module.scss'
class Timeover extends Component {
    componentWillMount(){
        setInterval(()=>{
            var endtime=new Date("2019/7/5,09:00:00");
            var nowtime = new Date()
            var lefttime=parseInt((endtime.getTime()-nowtime.getTime())/1000); 
            var d=parseInt(lefttime/3600/24);
            var h=parseInt((lefttime/3600)%24);
            var m=parseInt((lefttime/60)%60);
            var s=parseInt(lefttime%60);
            this.setState({
                d:d,
                h:h,
                m:m,
                s:s
            })
           },1000)
    }
    constructor(props) {
        super(props);
        this.state = { 
                d:null,
                s:null,
                h:null,
                m:null,
         };
    }
    render() {
        return (
            <div className={css.TimeServer}>
                <div className={css.Time}>
                    <span>闪购</span>
                    <span className={css.over}>距结束
                        <span className={css.special}>{this.state.d}</span>天
                        <span className={css.special}>{this.state.h}</span>小时
                        <span className={css.special}>{this.state.m}</span>分
                        <span className={css.special}>{this.state.s}</span>秒
                     </span>
                </div>
            <div className={css.Server}>
                <span>服务</span>
                <span type="primary" onClick={this.showActionSheet} className={css.warning}>
                    正品保障&nbsp;|&nbsp;买手推荐&nbsp;|&nbsp;不支持七天无理由退货
                </span>
                
            </div>
         </div>
        );
    }
}

export default Timeover;