import React, { useEffect } from 'react';
import './App.css';
import {UtilExample} from './components/UtilExample'
import {WalletExample} from './components/WalletExample'
import logo from './logo.png'
import { web3 } from './web3/web3';

function App() {
    useEffect(() => {
        // 创建新的以太坊账户
        const account = web3.eth.accounts.create();
        
        // 打印账户地址和私钥
        console.log('Address:', account.address);
        console.log('Private Key:', account.privateKey);
    }, [])
    return (
        <div>
            {/* <div className='Header'>
                <img src={logo} alt='logo'/>
            </div> */}
            <div>
                {/* <div className='Card'><h1>Example React App</h1></div> */}
                {/* <UtilExample/> */}
                <WalletExample/>
            </div>

        </div>
    );
}

export default App;
