import React from "react";
import classes from './HomePage.module.scss'
import {useTranslation} from "react-i18next";

export default function HomePage() {
    const { t } = useTranslation();
    return (
        <div className={classes.home}>

            <h1>Home Page</h1>

            <p className={classes.p1}>{t('home.test')}</p>
            <p className={classes.p1}>{t('home.test')}</p>
            <p className={classes.p1}>{t('home.test')}</p>
            <p className={classes.p1}>{t('home.test')}</p>
            <p className={classes.p1}>{t('home.test')}</p>
            <p className={classes.p1}>{t('home.test')}</p>
            <p className={classes.p1}>{t('home.test')}</p>
            <p className={classes.p1}>{t('home.test')}</p>
            <p className={classes.p1}>{t('home.test')}</p>
            <p className={classes.p1}>{t('home.test')}</p>
            <p className={classes.p1}>{t('home.test')}</p>
            <p className={classes.p1}>{t('home.test')}</p>
            <p className={classes.p1}>{t('home.test')}</p>
            <p className={classes.p1}>{t('home.test')}</p>
            <p className={classes.p1}>{t('home.test')}</p>
            <p className={classes.p1}>{t('home.test')}</p>
            <p className={classes.p1}>{t('home.test')}</p>
            <p className={classes.p1}>{t('home.test')}</p>
            <p className={classes.p1}>{t('home.test')}</p>
            <p className={classes.p1}>{t('home.test')}</p>
            <p className={classes.p1}>{t('home.test')}</p>
            <p className={classes.p1}>{t('home.test')}</p>
            <p className={classes.p1}>{t('home.test')}</p>
            <p className={classes.p1}>{t('home.test')}</p>
            <p className={classes.p1}>{t('home.test')}</p>
            {/*<p className={classes.p2}>Hui</p>*/}
            {/*<p className={classes.p3}>Hui</p>*/}
        </div>
    )
}