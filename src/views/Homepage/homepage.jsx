import About from "../../components/about/about"
import Banner from "../../components/banner/banner"
import Header from "../../components/header/header"
import MyServices from "../../components/my-services/myservices"

function HomePage () {
    return (
        <>
            <Header/>
            <Banner/>
            <About/>
            <MyServices/>

        </>
    )
}

export default HomePage