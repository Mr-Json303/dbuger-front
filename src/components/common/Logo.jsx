import React from 'react'
// import { SvgIcon } from '@mui/material'



export function DbugerLogo(props) {

    // const { theme, height, width, size } = props;
    // const [svgProps, setThemeColor] = React.useState({
    //     exoskeleton: '',
    //     head: '',
    //     width: '',
    //     height: ''
    // })
    const [isLoaded, setIsLoaded] = React.useState(null)

    React.useEffect(() => {
        if (isLoaded === null) {
            setIsLoaded(true)
        }
    },[isLoaded])

    return (<>
        {isLoaded === true &&
            <svg
                style={{ width: 'inherit', height: 'inherit' }}
                // width="158" height="169"
                viewBox="0 0 158 169" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M79 8L101.5 26L127.5 0L136 8L111 34L130 49L144.5 35L153 43L137 59V82H158V94H137V117L153 133L145 142L130.5 127L79 169L27.5 127L13.5 142L5 133L21 117V94H0V82H21V59L5 43L13 35L27.5 49L47 33.5L22 8L30.5 0L56.5 26L79 8ZM33 63H51L73 99V148L69 144.8L33 116V67V63ZM125 63V116L121 119.2L85 148V99L104.49 67.1071L107 63H125ZM79 24L113 51H105.5H45L75 27.1765L79 24ZM93 63L79 86L76.5652 82L67.5 67.1071L65 63H93Z" fill="#0C293D" />
                <path d="M85 98.8929V147.893L121 119.093V67H104.49L85 98.8929Z" fill="#50BD3C" />
                <path d="M33 67V116L69 144.8V104L48 67H33Z" fill="#50BD3C" />
                <path d="M87.5 68H68L77.0652 82.8929L87.5 68Z" fill="#50BD3C" />
                <path d="M75 27L45 50.8235H105.5L75 27Z" fill="#9DDAFD" />
            </svg>}

    </>)
}