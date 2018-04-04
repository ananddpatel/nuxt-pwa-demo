<template>
      <nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
      <div class="container">
        <nuxt-link class="navbar-brand js-scroll-trigger" to="/">Start Bootstrap</nuxt-link>
        <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          Menu
          <i class="fa fa-bars"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav text-uppercase ml-auto">
            <li class="nav-item">
              <nuxt-link class="navbar-brand js-scroll-trigger nav-link" to="/services">Services</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link class="navbar-brand js-scroll-trigger nav-link" to="/portfolio">Portfolio</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link class="navbar-brand js-scroll-trigger nav-link" to="/about">About</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link class="navbar-brand js-scroll-trigger nav-link" to="/team">Team</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link class="navbar-brand js-scroll-trigger nav-link" to="/contact">Contact</nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
</template>
