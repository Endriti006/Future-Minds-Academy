import Nav from '../Components/Nav'
import Hero from '../Components/Hero'
import Footer from '../Components/Footer'

export default function Fall(){
    return(
<div className='container-fixed'>
    <Nav 
    active1="undefind"
    active2="undefind"
    active3="active"
    active4="undefind"
    />
    <Hero
    title="Fall"
    images="assets/images/fall.png"
    />
    <Footer
    />
</div>
    );
}