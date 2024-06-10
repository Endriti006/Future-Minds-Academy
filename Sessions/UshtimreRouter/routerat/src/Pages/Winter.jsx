import Nav from '../Components/Nav'
import Hero from '../Components/Hero'
import Footer from '../Components/Footer'

export default function Winter(){
    return(
<div className='container-fixed'>
<Nav 
active1="undefind"
active2="undefind"
active3="undefind"
active4="active"
    />

    <Hero
    title="Winter"
    images="assets/images/winter.png"
    />
    <Footer/>
</div>
    );
}