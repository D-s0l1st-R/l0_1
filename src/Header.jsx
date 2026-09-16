import './header.css'

function Header() {
    return(
        <>
            <section id="header">
                <img src='./src/assets/react.svg' alt='logo' />
                <div id='nav'>
                    <div>О нас</div>
                    <div>Галлерея</div>
                    <div>Контакты</div>
                </div>
            </section>
        </>
    )
}

export default Header