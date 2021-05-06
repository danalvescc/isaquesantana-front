import styles from '../styles/components/GridImages.module.css';

const arr = [{
    href: 'https://picsum.photos/1000/560',
    title: 'Imagem trabalho 1',
    redirect: '#'
},{
    href: 'https://picsum.photos/1000/560',
    title: 'Imagem trabalho 2',
    redirect: '#'
},{
    href: 'https://picsum.photos/1000/560',
    title: 'Imagem trabalho 3',
    redirect: '#'
},{
    href: 'https://picsum.photos/1000/560',
    title: 'Imagem trabalho 4',
    redirect: '#'
},{
    href: 'https://picsum.photos/1000/560',
    title: 'Imagem trabalho 5',
    redirect: '#'
},{
    href: 'https://picsum.photos/1000/560',
    title: 'Imagem trabalho 6',
    redirect: '#'
},{
    href: 'https://picsum.photos/1000/560',
    title: 'Imagem trabalho 7',
    redirect: '#'
},]

export function GridImages(){
    const renderImages = () =>{
        return arr.map(i => (
            <a href={i.redirect}>
                <div>
                    {i.title}
                </div>
                <img src={i.href} alt={i.title}/>
            </a>
        ))
    }


    return (
        <div className={styles.container}>
            <div className={styles.galery}>
                {renderImages()}
            </div>
        </div>
    )
}