import React from 'react'

import { MdSend } from 'react-icons/md'

import {FooterBar, NewsLatter} from './style'

const Footer = ()=>{
    return(
        <FooterBar>
            <NewsLatter>
                <h2>Se inscreva em nossa NewsLatter</h2>
                <p>Digite seu e-mail para ser avisado sempre das melhores promoções do dia</p>
                <div>
                    <input type="email" placeholder="digite seu e-mail..."/>
                    <button> <MdSend/> </button>
                </div>
            </NewsLatter>
            <div>
                <h4>CopyWriter: @brendoSantiago</h4>
            </div>
        </FooterBar>
    )
}
export default Footer;