function Footer() {
    return (
      <footer style={{
        backgroundColor: "#222",
        color: "#fff",
        textAlign: "center",
        padding: "20px",
        marginTop: "50px",
      }}>
        <p>&copy; {new Date().getFullYear()} MovieHub. All rights reserved.</p>
       
      </footer>
    );
  }
  
  export default Footer;
  