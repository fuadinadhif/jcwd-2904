function Profile(props) {
  console.log("Ini props:", props);
  return (
    <p style={{ color: "white", fontSize: "24px" }}>
      I am {props.name} and my email address is {props.email}
    </p>
  );
}

export default Profile;
