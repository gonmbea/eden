import React from 'react';
import { useTranslation } from 'react-i18next';
import '../Scss/_wip.scss';
import snail from '../Assets/Wip/snail.png';


function Wip() {
    const { t } = useTranslation("WIP");
    return (
        <div className="wip-container">
            <div>
                <h1>{t("title")}</h1>
            </div>
            <div>
                <img src={snail} />
            </div>
            <div>
                <p>{t("text")}</p>
                <p>{t("subtext")}</p>
            </div>
        </div>
    );

}

export default Wip;