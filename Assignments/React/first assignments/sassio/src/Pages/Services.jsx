import ServicesHero from '../Components/Services/ServicesHero';
import ServicesNav from '../Components/Services/ServicesNav'
import ServicesSolution from '../Components/Services/ServicesSolution';
export default function Services(){
    return(
<div>
    <ServicesNav />
    <ServicesHero/>
    <ServicesSolution/>
</div>
    );
}