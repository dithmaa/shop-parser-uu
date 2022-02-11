const Rating = ({ratingAmount}) => {
    return (
        <svg width="151" height="22" viewBox="0 0 151 22" fill="none" xmlns="http://www.w3.org/2000/svg">

            <path d="M11.4127 0L14.1068 8.2918H22.8254L15.7719 13.4164L18.4661 21.7082L11.4127 16.5836L4.35925 21.7082L7.05342 13.4164L0 8.2918H8.71851L11.4127 0Z" fill="#DADADA"></path>

            <path d="M43.4127 0L46.1068 8.2918H54.8254L47.7719 13.4164L50.4661 21.7082L43.4127 16.5836L36.3593 21.7082L39.0534 13.4164L32 8.2918H40.7185L43.4127 0Z" fill="#DADADA"></path>

            <path d="M78.1068 8.2918L75.4127 0L72.7185 8.2918H64L71.0534 13.4164L68.3593 21.7082L75.4127 16.5836L82.4661 21.7082L79.7719 13.4164L86.8254 8.2918H78.1068Z" fill="#DADADA"></path>

            <path d="M107.413 0L110.107 8.2918H118.825L111.772 13.4164L114.466 21.7082L107.413 16.5836L100.359 21.7082L103.053 13.4164L96 8.2918H104.719L107.413 0Z" fill="#DADADA"></path>

            <path d="M142.107 8.2918L139.413 0L136.719 8.2918H128L135.053 13.4164L132.359 21.7082L139.413 16.5836L146.466 21.7082L143.772 13.4164L150.825 8.2918H142.107Z" fill="#DADADA"></path>

            <mask id="mask0_44045_357106" style={{ "maskType": "alpha" }} maskUnits="userSpaceOnUse" x="0" y="0" width="151" height="22">

                <path d="M11.4127 0L14.1068 8.2918H22.8254L15.7719 13.4164L18.4661 21.7082L11.4127 16.5836L4.35925 21.7082L7.05342 13.4164L0 8.2918H8.71851L11.4127 0Z" fill="#DADADA"></path>

                <path d="M43.4127 0L46.1068 8.2918H54.8254L47.7719 13.4164L50.4661 21.7082L43.4127 16.5836L36.3593 21.7082L39.0534 13.4164L32 8.2918H40.7185L43.4127 0Z" fill="#DADADA"></path>

                <path d="M78.1068 8.2918L75.4127 0L72.7185 8.2918H64L71.0534 13.4164L68.3593 21.7082L75.4127 16.5836L82.4661 21.7082L79.7719 13.4164L86.8254 8.2918H78.1068Z" fill="#DADADA"></path>

                <path d="M107.413 0L110.107 8.2918H118.825L111.772 13.4164L114.466 21.7082L107.413 16.5836L100.359 21.7082L103.053 13.4164L96 8.2918H104.719L107.413 0Z" fill="#DADADA"></path>

                <path d="M142.107 8.2918L139.413 0L136.719 8.2918H128L135.053 13.4164L132.359 21.7082L139.413 16.5836L146.466 21.7082L143.772 13.4164L150.825 8.2918H142.107Z" fill="#DADADA"></path>

            </mask>

            <g mask="url(#mask0_44045_357106)">
                <rect id="t" y="-0.291992" width={ratingAmount + '%'} height="26" fill="#F5C34B"></rect>
            </g>

        </svg>
    )
}

export default Rating;