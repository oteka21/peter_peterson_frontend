
import React from "react"
import { Header } from './components/Header'
import { GlobalSyles } from './assets/GlobalStyles'
import { Carousel } from './components/Carousel'
import { Utilities } from './components/Utilities'
import { Downloads } from './components/Downloads'
import { Footer } from './components/Footer'
import resources from './assets/resources.json'


// TODO:
// Visual Comments
// - Main slider doesn't have dots to control slide image effect, it's automatic.
// - Please implement dot control
// - "Download pdf files" section doesn't have margin bottom enough.
// - Dimension images aren't alike to the design provided.
// - Footer section is incomplete, +information, documents and contact sections are missing, 
// - Please be sure to add hover behavior for footer links.
// - In contact section implement mailto for contact email.
// - Social media icons doesn't have hover color behavior
// - Final footer links without hover behavior.
// - Copyright section is missing.
// - For mobile devices Where is the navigation section ?, please add  menu hamburguer  and styles for this.
// - For mobile devices, "Download pdf file" section is break, please adapt each box stacking one under the other.

// Code Comments
// - In nav, the structure used was ul -> li, but there is a div included
// - Article tags used :)
// - Incorrect html structure for "Download pdf files" sections, divs inner <a> tags.
// - Warning: Failed prop type: The prop `list` is marked as required in `Navigation`, but its value is `undefined`. (Error in console)
// - Page-sizer component or wrapper component doesn't included.
// - Recommendation, In Navigation component don't declare static values for dynamic content or general content, instead of this use a new file where you can put that kind of data.
// - The same recommendation for Carousel component of bullet 6. Keep in mind that you are building components as simple as you can, and business logic must be implemented without modify internal logic of your components.
// - Please changes html structure of Card component to avoid divs inner <a> tags.
// - Good for using styled-components 👍
// - Goog indentation. Legible code :)👍





function App (){
  return <>
    <GlobalSyles />
    <Header />
    <Carousel images={resources.images}/>
    <Utilities />
    <Downloads />
    <Footer />
  </>
}

export default App;
