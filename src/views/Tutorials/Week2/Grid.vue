<script setup>

import Navbar from "@/components/Navbar.vue";
</script>

<template>
  <Navbar />

  <h2>Grid Display</h2>

  <div class="gridcontents">
    <div class="contents">
        <h2>How improve Your Front Design</h2>
        <p>
          To improve your front-end design, focus on maintaining consistent spacing throughout your layout,
          ensuring visual harmony.
          Choose a readable font and establish a clear typographic hierarchy for headers, subheaders, and body text, which helps guide the user’s attention. Stick to a cohesive color scheme with complementary colors and sufficient contrast to enhance both aesthetics and accessibility. Make your design responsive by using flexible grids, scalable images, and media queries to ensure it looks great on all screen sizes. Utilize whitespace effectively to reduce clutter and emphasize key elements, creating a clean and organized look. Style interactive elements like buttons and links with clear visual states (hover, active) to enhance user experience. Incorporate iconography sparingly, using icons to support text and improve navigation without overwhelming the design. Finally, optimize performance by compressing images, minimizing CSS and JS files, and reducing unnecessary animations to ensure faster load times and a smoother user experience.
        </p>
    </div>
    <div class="contents">
        <h2>How improve Your Front Design</h2>
        <p>
          To improve your front-end design, focus on maintaining consistent spacing throughout your layout,
          ensuring visual harmony.
          Choose a readable font and establish a clear typographic hierarchy for headers, subheaders, and body text, which helps guide the user’s attention. Stick to a cohesive color scheme with complementary colors and sufficient contrast to enhance both aesthetics and accessibility. Make your design responsive by using flexible grids, scalable images, and media queries to ensure it looks great on all screen sizes. Utilize whitespace effectively to reduce clutter and emphasize key elements, creating a clean and organized look. Style interactive elements like buttons and links with clear visual states (hover, active) to enhance user experience. Incorporate iconography sparingly, using icons to support text and improve navigation without overwhelming the design. Finally, optimize performance by compressing images, minimizing CSS and JS files, and reducing unnecessary animations to ensure faster load times and a smoother user experience.
        </p>
    </div>
    <div class="contents">
        <h2>How improve Your Front Design</h2>
        <p>
          To improve your front-end design, focus on maintaining consistent spacing throughout your layout,
          ensuring visual harmony.
          Choose a readable font and establish a clear typographic hierarchy for headers, subheaders, and body text, which helps guide the user’s attention. Stick to a cohesive color scheme with complementary colors and sufficient contrast to enhance both aesthetics and accessibility. Make your design responsive by using flexible grids, scalable images, and media queries to ensure it looks great on all screen sizes. Utilize whitespace effectively to reduce clutter and emphasize key elements, creating a clean and organized look. Style interactive elements like buttons and links with clear visual states (hover, active) to enhance user experience. Incorporate iconography sparingly, using icons to support text and improve navigation without overwhelming the design. Finally, optimize performance by compressing images, minimizing CSS and JS files, and reducing unnecessary animations to ensure faster load times and a smoother user experience.
        </p>
    </div>
    <div class="contents">
        <h2>How improve Your Front Design</h2>
        <p>
          To improve your front-end design, focus on maintaining consistent spacing throughout your layout,
          ensuring visual harmony.
          Choose a readable font and establish a clear typographic hierarchy for headers, subheaders, and body text, which helps guide the user’s attention. Stick to a cohesive color scheme with complementary colors and sufficient contrast to enhance both aesthetics and accessibility. Make your design responsive by using flexible grids, scalable images, and media queries to ensure it looks great on all screen sizes. Utilize whitespace effectively to reduce clutter and emphasize key elements, creating a clean and organized look. Style interactive elements like buttons and links with clear visual states (hover, active) to enhance user experience. Incorporate iconography sparingly, using icons to support text and improve navigation without overwhelming the design. Finally, optimize performance by compressing images, minimizing CSS and JS files, and reducing unnecessary animations to ensure faster load times and a smoother user experience.
        </p>
    </div>
    <div class="contents">
        <h2>How improve Your Front Design</h2>
        <p>
          To improve your front-end design, focus on maintaining consistent spacing throughout your layout,
          ensuring visual harmony.
          Choose a readable font and establish a clear typographic hierarchy for headers, subheaders, and body text, which helps guide the user’s attention. Stick to a cohesive color scheme with complementary colors and sufficient contrast to enhance both aesthetics and accessibility. Make your design responsive by using flexible grids, scalable images, and media queries to ensure it looks great on all screen sizes. Utilize whitespace effectively to reduce clutter and emphasize key elements, creating a clean and organized look. Style interactive elements like buttons and links with clear visual states (hover, active) to enhance user experience. Incorporate iconography sparingly, using icons to support text and improve navigation without overwhelming the design. Finally, optimize performance by compressing images, minimizing CSS and JS files, and reducing unnecessary animations to ensure faster load times and a smoother user experience.
        </p>
    </div>
  </div>

</template>

<style scoped>
.contents{
  height: 15rem;
  overflow: scroll;
  border: 2px solid #333;
}
.contents:nth-child(1){
  background: green;
  grid-column-start: 1;
  grid-column-end: 3;
}
.contents:last-child{
  background: green;
  grid-column-start: 2;
  grid-column-end: 4;

  grid-row-start:  2;
}
.gridcontents{
  display: grid;
  margin: 1rem;
  grid-template-columns: repeat(3 ,1fr);
  gap: 1rem;
}
</style>