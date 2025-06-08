import React from 'react';
import cl from './PlanPanel.module.scss';
import BasisCard from '../../components/BasisCard';

export default function PlanPanel() {
    const planCards = [
        {
            tag: 'Montag',
            date: '08.06.2025',
            status: false,
            muskeln: [
                { zweck: 'Rücken', uebungen: ['Übung 1', 'Übung 2'] }
            ]
        },
        {
            tag: 'Dienstag',
            date: '09.06.2025',
            status: true,
            muskeln: [
                { zweck: 'Beine', uebungen: ['Übung A', 'Übung B'] }
            ]
        },
        {
            tag: 'Dienstag',
            date: '09.06.2025',
            status: true,
            muskeln: [
                { zweck: 'Beine', uebungen: ['Übung A', 'Übung B'] }
            ]
        },
        {
            tag: 'Dienstag',
            date: '09.06.2025',
            status: true,
            muskeln: [
                { zweck: 'Beine', uebungen: ['Übung A', 'Übung B'] }
            ]
        },
        {
            tag: 'Dienstag',
            date: '09.06.2025',
            status: true,
            muskeln: [
                { zweck: 'Beine', uebungen: ['Übung A', 'Übung B'] }
            ]
        },
        {
            tag: 'Dienstag',
            date: '09.06.2025',
            status: true,
            muskeln: [
                { zweck: 'Beine', uebungen: ['Übung A', 'Übung B'] }
            ]
        },
        {
            tag: 'Dienstag',
            date: '09.06.2025',
            status: true,
            muskeln: [
                { zweck: 'Beine', uebungen: ['Übung A', 'Übung B'] }
            ]
        }
    ];

    return (
        <div className={cl.container}>
            <div className={cl.planCard}>
                {planCards.map((card, idx) => (
                    <BasisCard key={idx} cardData={card} />
                ))}
            </div>
        </div>
    );
}
