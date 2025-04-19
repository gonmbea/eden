import React from 'react';
import { useTranslation } from 'react-i18next';
import '../Scss/_art.scss';

// Art for gallery
import barringtonSt from '../Assets/Art/barringtonSt.png';
import bebe from '../Assets/Art/bebe.png';
import birthdayFrog from '../Assets/Art/birthdayFrog.png';
import blueShop from '../Assets/Art/blueShop.png';
import bule from '../Assets/Art/bule.png';
import casaJp from '../Assets/Art/casaJp.png';
import cubismChicken from '../Assets/Art/cubismChicken.png';
import gardenFaeries from '../Assets/Art/gardenFaeries.png';
import homemAzul from '../Assets/Art/homemAzul.png';
import idosa from '../Assets/Art/idosa.png';
import leConsulat from '../Assets/Art/leConsulat.png';
import mel from '../Assets/Art/mel.png';
import mug from '../Assets/Art/mug.png';
import oldCity from '../Assets/Art/oldCity.png';
import olhos from '../Assets/Art/olhos.png';
import perfil from '../Assets/Art/perfil.png';
import pinkScream from '../Assets/Art/pinkScream.png';
import scream from '../Assets/Art/scream.png';
import selfPortrait from '../Assets/Art/selfPortrait.png';
import stJamesAnglican from '../Assets/Art/stJamesAnglican.png';
import trunkGuy from '../Assets/Art/trunkGuy.png';
import whieRabit from '../Assets/Art/whieRabit.png';
import womanScreaming from '../Assets/Art/womanScreaming.png';


function Art() {

    const { t } = useTranslation("Art");

    return(
    
    <div className='art-container'>
        <h1>{t("title")}</h1>

        {/* Three Collumns, with 9 images each */}
        <div className='art-gallery'>
        <div className='collumn'>
                <div className='photo' >
                    <img src={stJamesAnglican}/>
                </div>
                <div className='photo' >
                    <img src={birthdayFrog}/>
                </div>
                <div className='photo' >
                    <img src={bule}/>
                </div>
                <div className='photo' >
                    <img src={blueShop}/>
                </div>
                <div className='photo' >
                    <img src={casaJp}/>
                </div>
                <div className='photo' >
                    <img src={trunkGuy}/>
                </div>
                

            </div>
            <div className='collumn'>
                <div className='photo' >
                    <img src={idosa}/>
                </div>
                {/* <div className='photo' >
                    <img src={leConsulat}/>
                </div> */}
                <div className='photo' >
                    <img src={pinkScream}/>
                </div>
                <div className='photo' >
                    <img src={mel}/>
                </div>
                <div className='photo' >
                    <img src={mug}/>
                </div>
                <div className='photo' >
                    <img src={oldCity}/>
                </div>
                <div className='photo' >
                    <img src={olhos}/>
                </div>
                <div className='photo' >
                    <img src={perfil}/>
                </div>
                <div className='photo' >
                    <img src={gardenFaeries}/>
                </div>
                

            </div>
            <div className='collumn'>
                <div className='photo' >
                    <img src={cubismChicken}/>
                </div>
                <div className='photo' >
                    <img src={whieRabit}/>
                </div>
                <div className='photo' >
                    <img src={homemAzul}/>
                </div>
                <div className='photo' >
                    <img src={barringtonSt}/>
                </div>
                <div className='photo' >
                    <img src={womanScreaming}/>
                </div>
                <div className='photo' >
                    <img src={selfPortrait}/>
                </div>
                <div className='photo' >
                    <img src={bebe}/>
                </div>
                

            </div>

        </div>
    </div>
    
    );
}

export default Art;