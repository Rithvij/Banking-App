import HeaderBox from '@/components/HeaderBox'
import RightSideBar from '@/components/RightSideBar'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import React from 'react'

const Home = () => {
    const loggedIn = {
        firstName: 'Rithvij', lastName:"Pasupuleti", email : "testemail.com"
    }
    return (
        <div>
            <section className='home'>
                <div className='home-content'>
                    <header className='home-header'>
                        <HeaderBox type="greeting" title="Welcome"
                            user={loggedIn?.firstName || "Guest"}
                            subtext="Access and manage your account and transactions efficiently"
                        ></HeaderBox>

                        <TotalBalanceBox accounts={[]} totalBanks={1}
                            totalCurrentBalance={1250.35}></TotalBalanceBox>
                    </header>
                    RECENT TRANSACTIONS
                </div>
                <RightSideBar user={loggedIn} transactions={[]}
                banks={[{currentBalance:123.50},{currentBalance:500}]}></RightSideBar>
            </section>
        </div>
    )
}

export default Home
