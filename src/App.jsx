
import Button from "./Components/Button"
import Profile from "./Components/Profile"
import Header from "./Components/header"
import Input from "./Components/input"


// image
import pic1 from "./assets/download.jpeg"
import pic2 from "./assets/jude.jpg"
import pic3 from "./assets/download.jpeg"










const App = () =>{
  return(
    <div>
      <center>Hello react</center>
      <Button />
      <Header/>
      <Input />
      <Profile 
        avater={pic1}
        name= "Shogo"
        email= "Shogo@gmail.com"
        pNumber="034456332233"
      />
      <Profile 
        avater={pic2}
        name= "Vera"
        email= "Shogo@gmail.com"
        pNumber="034456332233"
         />
      <Profile 
          avater={pic3}
          name= "Jude"
          email= "Shogo@gmail.com"
          pNumber="034456332233"
      />
      
    </div>
  )
}
export default App