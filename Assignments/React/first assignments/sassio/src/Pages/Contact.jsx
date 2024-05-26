import React from "react";
import ContactNav from "../Components/Contact/ContactNav";
import ContactHero from "../Components/Contact/ContactHero";
import ContactWrapper from "../Components/Contact/ContactWrapper";
import ContactFooter from "../Components/Contact/ContactFooter";
export default function Contact(){
    return(
        <div>
            <ContactNav/>
            <ContactHero/>
            <ContactWrapper/>
            <ContactFooter/>
        </div>
    );
}