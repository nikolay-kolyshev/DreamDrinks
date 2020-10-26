import {connect} from "react-redux";
import Header from "./Header";

const mapStateToProps = state => ({
    basket: state.header.basket
})

const HeaderContainer = connect(mapStateToProps)(Header)

export default HeaderContainer