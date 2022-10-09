import Image from 'next/image';
import {SiSolidity, SiEthereum, SiNextdotjs, SiElastic, SiMongodb, SiReact, SiLaravel, SiMysql, SiPostgresql, SiRedis, SiRust, SiPython, SiJava, SiJavascript, SiTypescript } from 'react-icons/si';
import Solana from './assets/solana.png'

export const Tech = (props: any) => {
    let images;
    if (props.title == "NextJS") {
        images = <SiNextdotjs color='black' />
    }
    else if (props.title == "Elasticsearch") {
        images = <SiElastic color='black' />
    }
    else if (props.title == "Mongo DB") {
        images = <SiMongodb color='black' />
    }
    else if (props.title == "ReactJS") {
        images = <SiReact color='black' />
    }
    else if (props.title == "Laravel") {
        images = <SiLaravel color='black' />
    }
    else if (props.title == "MySQL") {
        images = <SiMysql color='black' />
    }
    else if (props.title == "PostgresSQL") {
        images = <SiPostgresql color='black' />
    }
    else if (props.title == "Redis") {
        images = <SiRedis color='black' />
    }
    else if (props.title == "Ethereum") {
        images = <SiEthereum color='black' />
    }
    else if (props.title == "Solidity") {
        images = <SiSolidity color='black' />
    }
    else if (props.title == "Rust") {
        images = <SiRust color='black' />
    }
    else if (props.title == "Python") {
        images = <SiPython color='black' />
    }
    else if (props.title == "Java") {
        images = <SiJava color='black' />
    }
    else if (props.title == "Javascript") {
        images = <SiJavascript color='black' />
    }
    else if (props.title == "Typescript") {
        images = <SiTypescript color='black' />
    }
    else if (props.title == "Solana") {
        images = <Image width={60} height={60} src={Solana} />
    }

    return (
        <>
            <div className="body-card">
                <div className="images d-flex justify-content-center">
                    {images}
                </div>
                <span className='title-tech d-flex justify-content-center'>{props.title}</span>
            </div>
        </>
    )
}