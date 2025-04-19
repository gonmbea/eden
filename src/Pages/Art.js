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

    const artWork = [
        stJamesAnglican,
        idosa,
        cubismChicken,
        pinkScream,
        whieRabit,
        mel,
        homemAzul,
        bule,
        mug,
        blueShop,
        oldCity,
        barringtonSt,
        olhos,
        womanScreaming,
        casaJp,
        perfil,
        selfPortrait,
        birthdayFrog,
        trunkGuy,
        gardenFaeries,
        bebe
    ];

    return (
        <div className="art-container">
            <h1>{t("title")}</h1>

            <div className="art-gallery">
                {artWork.map((artWork, index) => (
                    <div className="photo" key={index}>
                        <img src={artWork} alt={`Artwork ${index}`} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Art;