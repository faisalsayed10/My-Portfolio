import React, { useRef, useEffect, useState } from 'react'

const MyImage = 'https://doggo.ninja/IBf0BT.png';

const MyPic = () => {

    const [classVar1, setclassVar1] = useState('myPic1')
    const [classVar2, setclassVar2] = useState('myPic2')
    const [classVar3, setclassVar3] = useState('myPic3')
    const [classVar4, setclassVar4] = useState('myPic4')
    const [classVar5, setclassVar5] = useState('myPic5')

    function handleClick1() {
        setclassVar1('secret')
    }
    
    function handleClick2() {
        setclassVar2('secret')
    }

    function handleClick3() {
        setclassVar3('secret')
    }

    function handleClick4() {
        setclassVar4('secret')
    }

    function handleClick5() {
        setclassVar5('secret')
    }

    return (
        <div className='img-flex'>
            <img onClick={handleClick1} className={classVar1} src={MyImage} alt='My Pic' />
            <img onClick={handleClick2} className={classVar2} src={MyImage} alt='My Pic' />
            <img onClick={handleClick3} className={classVar3} src={MyImage} alt='My Pic' />
            <img onClick={handleClick4} className={classVar4} src={MyImage} alt='My Pic' />
            <img onClick={handleClick5} className={classVar5} src={MyImage} alt='My Pic' />
            <h3 className='secretLink'>6C2W1azD1rBspaoXACK3VxZp5ds8Qw6dkZxcHqQFcD9W2SZ7eTFaGRU</h3>
        </div>
        
    )
}

export default MyPic