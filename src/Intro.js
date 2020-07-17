import React, { useRef, useEffect, useState } from 'react';
import './Intro.css';

function debounce(func, wait = 10, immediate = true) {
    var timeout;
    return function () {
        var context = this, args = arguments;
        var later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};

const H1 = (props) => {
    const ref = useRef();

    useEffect(() => {
        let debounced = debounce(checkSlide);
        window.addEventListener('scroll', debounced)

        function checkSlide() {
            // console.log(ref)
            const TextRect = ref.current?.getBoundingClientRect();
            if (TextRect) {
                console.log(ref)
                const slideInAt = (window.scrollY + window.innerHeight) - TextRect.height / 2;
                const textBottom = TextRect.top + TextRect.height;
                const isHalfShown = slideInAt > TextRect.top;
                const isNotScrolledPast = window.scrollY < textBottom;
                if (isHalfShown && isNotScrolledPast) {
                    ref.current.classList.add('active');
                } else {
                    ref.current.classList.remove('active');
                }
            }
        }

        return () => {
            window.removeEventListener('scroll', debounced)
        }
    }, [])

    return <h1 ref={ref} {...props} />
}

const Intro = () => {
    return (
        <div>
            <H1 className='scroll-text special-text1'>Hi There!</H1>
            <H1 className='scroll-text special-text2'>I am Fayd.</H1>
        </div>
    );
}

export default Intro