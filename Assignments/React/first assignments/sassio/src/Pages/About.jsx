import WrapperAbout from '../Components/AboutFile/WrapperAbout'
import NavAbout from '../Components/AboutFile/NavAbout'
import WrapperMdAbout from '../Components/AboutFile/WrapperMdAbout'
import WrapperMetricAbout from '../Components/AboutFile/WrapperMetricAbout'
import DevelopmentAbout from '../Components/AboutFile/DevelopmentAbout'
import CustomerAbout from '../Components/AboutFile/CustomerAbout'
import CreativeAbout from '../Components/AboutFile/CreativeAbout'
import BrandAbout from '../Components/AboutFile/BrandAbout'
import LgAbout from '../Components/AboutFile/LgAbout'

export default function About(){
    return(
        <div>
            <NavAbout />
        <WrapperAbout />
        <WrapperMdAbout />
        <WrapperMetricAbout />
        <DevelopmentAbout />
        <CustomerAbout />
        <CreativeAbout />
        <BrandAbout />
        <LgAbout />

        </div>
    );
}