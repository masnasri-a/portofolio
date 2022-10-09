import Image from "next/image"
import LogoDark from './assets/logo-dark.png'

export const HeadersComponents = () => {
    return (
        <>
            <div className="d-flex justify-content-between">
                <div className="logo">
                    <Image width={100} height={100} src={LogoDark} />
                </div>
                <div className="d-flex justify-content-center align-items-center text-light">
                    <a className="nav-menu" href="#about">About</a>
                    <a className="nav-menu" href="">•</a>
                    <a className="nav-menu" href="#work">Work</a>
                    <a className="nav-menu" href="">•</a>
                    <a className="nav-menu" href="#tech">Technology</a>
                </div>
                <div className="hire d-flex align-items-center">
                    <a href="#hire">Hire Me</a>
                </div>
            </div>
        </>
    )
}