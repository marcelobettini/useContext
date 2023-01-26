import React from "react";
import { Header } from "./Header";
import { OtherStuff } from "./OtherStuff";

export const Container = () => {
  return (
    <section className="container line-pad">
      <h2>Container component</h2>
      <pre>Lvl 2: No need for user data</pre>
      <Header />
      <OtherStuff />
    </section>
  );
};
