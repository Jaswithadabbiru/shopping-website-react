import "./Header.css";
import {link} from "react-router-dom";



function Header(){
    return(
        <div className="header">
            <ul>
                <li><a href="/home">Home</a></li>
                <li><a href="/products">Products</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
                <li><a href="/cart">Cart</a></li>
                <li><a href="/login">Login</a></li>
                <li><a href="/signup">Sign Up</a></li>
                <li><a href="/logout">Logout</a></li>
                <li><a href="/profile">Profile</a></li>
                <li><a href="/orders">Orders</a></li>
                <li><a href="/wishlist">Wishlist</a></li>
                <li><a href="/settings">Settings</a></li>
                <li><a href="/help">Help</a></li>
            </ul>
        </div>
    )
}