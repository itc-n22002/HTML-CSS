import Meta from 'components/meta'
import Container from 'components/container'
import Styles from 'styles/page3.module.css'

export default function page3() {
    return (
        <Container>
        <Meta
        pageTitle="HTML+CSS"
        />
        <ul className={Styles.pop_btn}>
    <li>
        <h2><a href="#">Home</a></h2>
    </li>
    <li>
        <h2><a href="#">About</a></h2>
    </li>
    <li>
        <h2><a href="#">Topics</a></h2>
    </li>
    <li>
        <h2><a href="#">Link</a></h2>
    </li>
</ul>
    </Container>
    )
}