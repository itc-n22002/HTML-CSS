import Meta from 'components/meta'
import Container from 'components/container'
import Styles from 'styles/page4.module.css'

export default function page4() {
    return (
    <Container>
        <Meta
        pageTitle="HTML+CSS"
        />
        <ul className={Styles.nav}>
    <li><a href="/">TOP</a></li>
    <li><a href="/">ABOUT</a></li>
    <li><a href="/">NEWS</a></li>
    <li><a href="/">LINK</a></li>
</ul>
    </Container>
    )
}