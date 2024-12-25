import React from "react";

const MainComponent=()=>{
    return(
        <main style={style.main}>
            <p>This is the main content of the app. Enjoy browsing!</p>
        </main>
    );
};

const style={
    main:{
        padding: "2rem",
    textAlign: "center",
    color: "purple",
  
    }
};
export default MainComponent