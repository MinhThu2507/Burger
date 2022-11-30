import React from 'react';
// ket noi redux
import { connect } from 'react-redux';
import { increaseDecrease } from '../../redux/actions/actions'
class BurgerExample extends React.Component {
    render() {
        return (
            <div className="container">
                <h3 className="display-4 text-success">
                    <div className='row'>
                        <div className='col-7'>
                            <h3 className='text-center text-danger'>Your Burger</h3>
                            <div className='breadTop'></div>
                            <>
                                {
                                    //entries: chuyển object sang cac mảng con
                                    Object.entries(this.props.burger).map(([propBurger, value], index) => {
                                        const burgerMid = [];
                                        for (let i = 0; i < value; i++) {
                                            burgerMid.push(
                                                <div key={i} className={propBurger}></div>
                                            )
                                        }
                                        return burgerMid
                                    }
                                    )}
                            </>
                            <div className='breadBottom'></div>

                        </div>
                        <div className='col-5'>
                            <h3 className='text-center text-success'>CHOOSE YOUR FOOD</h3>
                            <table className='table text-center' style={{ fontSize: '20px' }}>
                                <thead>
                                    <tr>
                                        <th>Food</th>
                                        <th colSpan={2}></th>
                                        <th>Price</th>
                                        <th>Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        Object.entries(this.props.menu).map(([propMenu, price], index) => {
                                            return (
                                                <tr key={index}>
                                                    <td>{propMenu}</td>
                                                    <td colSpan={2}>
                                                        <button
                                                            className='btn btn-info'
                                                            onClick={() => this.props.handleIncreaseDecrease(propMenu, 1)}
                                                        >
                                                            +
                                                        </button>
                                                        {
                                                            <span className='text-danger'>
                                                                {this.props.burger[propMenu]}
                                                            </span>
                                                        }
                                                        <button
                                                            onClick={() => this.props.handleIncreaseDecrease(propMenu, -1)}
                                                            className='btn btn-info'
                                                        >
                                                            -
                                                        </button>

                                                    </td>
                                                    <td>{price}</td>
                                                    <td>{this.props.burger[propMenu] * price}</td>

                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <td colSpan={2}></td>
                                        <td>Sum</td>
                                        <td>{this.props.total}</td>
                                    </tr>
                                </tfoot>
                            </table>

                        </div>
                    </div>
                </h3>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        burger: state.burger.burger,
        menu: state.burger.menu,
        total: state.burger.total

    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        handleIncreaseDecrease: (propBurger, type) => {
            dispatch(increaseDecrease({
                propBurger,
                type
            }))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BurgerExample);