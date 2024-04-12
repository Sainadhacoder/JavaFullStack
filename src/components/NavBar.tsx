import './NavBar.css'
function NavBar(){
    return <nav>
    <input type="checkbox" id="check"/>
    <label  className="checkbtn">
      <i className="fas fa-bars"></i>
    </label>
    <label className="logo">DesignX</label>
    <ul>
      <li><a className="active" href="/">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="/prd">Products</a></li>
      <li><a href="/create">Create</a></li>
      <li><a href="#">Feedback</a></li>
    </ul>
  </nav>
}
export default NavBar 