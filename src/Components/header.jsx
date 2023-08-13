

const Header = () =>{
    return (
        <div style={{display:"flex", height: "70px", width: "100%", justifyContent: "space-around", alignItems: "center"}}>
            <div>Logo</div>
            <div style={{display: "flex",}}>
                
                <nav style={{marginLeft: "20px"}}>Home</nav>
                <nav style={{marginLeft: "20px"}}>About</nav>
                <nav style={{marginLeft: "20px"}}>Blog</nav>
                <nav style={{marginLeft: "20px"}}>Feedback</nav>
            </div>
            <div>
                <button>Get Started</button>
            </div>
        </div>
    )
}
export default Header