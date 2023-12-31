import React, { Component } from 'react'
import PropTypes from 'prop-types'
export class A{

}
export class B extends A{}
export default class VaildationComp extends Component {
    //先混合属性
    static defaultProps = {
        b:false
    }
    
    //在调用相应的函数进行验证
    static propTypes = {
        a: PropTypes.number.isRequired,//a属性必须是一个数字类型,并且必填
        b: PropTypes.bool.isRequired,//b必须是一个bool属性,并且必填
        onClick: PropTypes.func,//onClick必须是一个函数
        c: PropTypes.any,//1.可以设置必填
        d: PropTypes.node.isRequired,//d必填,而且必须是一个可以渲染的内容
        e: PropTypes.element, //e必须是一个React元素
        F: PropTypes.elementType,//F必须是一个组件类型
        g: PropTypes.instanceOf(A),//g必须是A的实例
        sex: PropTypes.oneOf(["男","女"]),//属性必须是数组中的一个
        h: PropTypes.arrayOf(PropTypes.number),//数组的每一项必须满足类型要求
        // i:PropTypes.objectOf(PropTypes.number),//每一个属性必须满足类型要求
        j: PropTypes.shape({
            name:PropTypes.string.isRequired,//name 必须是一个字符串,必填
            age:PropTypes.number,//age必须是一个数字
            address:PropTypes.shape({
                province:PropTypes.string,
                city: PropTypes.string
            })
        }),
        k: PropTypes.arrayOf(PropTypes.shape({
            name:PropTypes.string.isRequired,
            age:PropTypes.number.isRequired
        })),
        m: PropTypes.oneOfType([PropTypes.string,PropTypes.number]),
        score: function(props,propName , componentName){
            console.log(props,propName,componentName);
            const val = props[propName];
            //验证必填 切记不要直接if(val)因为有val等于0也会走,0的话人家填了呀
            if(val === undefined || val === null){
                return new Error(`invalid prop ${propName} in ${componentName} is Required`)
            }
            //严重该属性是数字
            if(typeof val !== 'number'){
                return new Error(`invalid prop ${propName} in ${componentName} is not a number`)
            }
            //并且取值范围是0-100
            if(val < 0 || val > 100){
                return new Error(`invalid prop ${propName} in ${componentName} must is between 0 and 100`)
            }
        }
    }
  render() {
    const F = this.props.F
    return (
      <div>
        {this.props.a}
        <div>
            {this.props.d}
            <F />
        </div>
        
      </div>
    )
  }
}
