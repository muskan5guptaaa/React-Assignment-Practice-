import React from "react";

const Footer=()=>{
    return(
        <footer style={styles.footer}>
            <p>&copy; 2024 My App. All Rights Reserved.</p>
        </footer>
    )
}

const styles={
    footer:{
        backgroundColor:"#4CAF50",
        color:"white",
        padding:"1rem",
        position:"fixed",
        bottom:0,
        width:"100%",
        textAlign:"center"
    }
}

export default Footer;