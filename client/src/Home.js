
function Home() {

    return (
        <div className="home">
            <h3>Song Rater About :</h3>
            <p>Song rater is an application that can be used to rate and comment on some of your favorite songs. Leave ratings and see other listeners ratings, as well as songs average listener rating! </p>
            <h4> Getting started : </h4>
            <ul>
                <li>Login or Sign up in the top right corner</li>
                <li>Once logged in you can browse songs you've rated on the Listener Songs tab</li>
                <li>Browse all songs and their ratings on the Songs tab, new Songs are added externally</li>
                <li>Under each song listeners can create, delete, or edit Ratings</li>
                <li>Listeners can only edit or delete their own ratings, and each listener can only rate a song once</li>
                <li>When done browsing, go to the logout tab and click Logout</li>
                <li>To return to the home page click the Song Rater icon on the top left</li>
            </ul>
        </div>
    )
}

export default Home;