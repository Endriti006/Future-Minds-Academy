import Nav from '../Components/Nav'
import Hero from '../Components/Hero'
import Footer from '../Components/Footer'

export default function Summer(){
    return(
<div className='container-fixed'>
<Nav 

active1="undefind"
active2="active"
active3="undefind"
active4="undefind"
    />
    <Hero
    title="Summer"
    images="assets/images/summer.png"
    />
    <Footer/>
</div>
    );
}