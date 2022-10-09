import { FaFacebook, FaInstagram, FaTelegram, FaTwitter, FaWhatsapp } from 'react-icons/fa';

export const Socmed = (props: any) => {
    let logo;
    if (props.title == "Facebook") {
        logo = (
            <a href="https://web.facebook.com/Nasricakarevo/">
                <FaFacebook size={"30"} />
            </a>
        )
    }
    else if (props.title == "Twitter") {
        logo = (
            <a href="https://twitter.com/alienpdev">
                <FaTwitter size={"30"} />
            </a>
        )
    }
    else if (props.title == "Instagram") {
        logo = (
            <a href="https://www.instagram.com/nasriadzlani/">
                <FaInstagram size={"30"} />
            </a>
        )
    }
    else if (props.title == "Whatsapp") {
        logo = (
            <a href="https://wa.me/+6282228893284">
                <FaWhatsapp size={"30"} />
            </a>
        )
    }
    else if (props.title == "Telegram") {
        logo = (
            <a href="https://t.me/nanassssa">
                <FaTelegram size={"30"} />
            </a>
        )
    }
    return (
        <>
            <div className="social-media">
                {logo}
            </div>
        </>
    )
}