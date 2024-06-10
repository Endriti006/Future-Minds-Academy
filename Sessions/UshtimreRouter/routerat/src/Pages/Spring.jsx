import Nav from '../Components/Nav'
import Hero from '../Components/Hero'
import Footer from '../Components/Footer'

export default function Spring(){
    return(
<div className='container-fixed'>
<Nav 
active1="active"
active2="undefind"
active3="undefind"
active4="undefind"
    />
    <Hero
    title="Spring"
    images="assets/images/spring.png"
    />
    <Footer/>
</div>
    );
}