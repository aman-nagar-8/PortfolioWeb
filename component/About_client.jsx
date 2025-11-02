import React from "react";
import About from "./About";

const About_client = async () => {
  const res = await fetch(`${process.env.PORTFOLIO_BASE_URL}/api/user`, {
  cache: "no-store", // or next: { revalidate: 60 }
});
const data = await res.json();
const user = data.data[0];
  return <About data={user}/>
}

export default About_client
