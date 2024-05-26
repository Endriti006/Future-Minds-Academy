import React from 'react';
import PortfolioNav from '../Components/Portofolio/PortofolioNav';
import PortfolioWrapper from '../Components/Portofolio/PortofolioWrapper';
import PortfolioFooter from '../Components/Portofolio/PortofolioFooter';

export default function Portofolio(){
    return (
        <div>
            <PortfolioNav />
            <PortfolioWrapper/>
            <PortfolioFooter />
        </div>
    );
}
