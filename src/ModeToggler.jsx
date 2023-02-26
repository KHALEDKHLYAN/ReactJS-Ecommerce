function ModeToggler(){
    let darkModeON = false;
    const darkMode = <h1>Dark Mode On</h1>
    const lightMode = <h1>Dark Mode Off</h1>

    const handleClick = () => {
        darkModeON = !darkModeON;
        if (darkModeON == true) {
            console.log("Dark Mode is On")
        } else {
            console.log("Light Mode is on")
        }
    }
    return(
        <div>
            {darkModeON ? darkMode : lightMode}
            <button onClick={handleClick}>
            Right click!!
            </button>
        </div>
    )
}
export default ModeToggler