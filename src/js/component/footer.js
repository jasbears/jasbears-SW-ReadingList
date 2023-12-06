import React, { Component } from "react";
import "../../styles/demo.css";

export const Footer = () => (
  <footer className="footer mt-auto py-3 text-center">
    <p>
      Made with <i class="bi bi-hearts"></i> by{" "}
      <a id="mytag" href="https://github.com/jasbears">
        {" "}
        Jaylyn Stample
      </a>
    </p>
  </footer>
);
