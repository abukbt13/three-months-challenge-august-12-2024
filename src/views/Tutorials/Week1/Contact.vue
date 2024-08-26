<script setup>

import Navbar from "@/components/Navbar.vue";
</script>

<template>
   <Navbar />

  <div class="contents">

    <div class="d-flex flex-column">
      <div class="message d-flex justify-content-center">
        <div class="mx-2">
          <h2 class="text-center">Contact Us</h2>
          <p class="text-center">
            Contact us through the following channels.You can also chat with us and we will respond shortly to you
          </p>
        </div>
      </div>
      <div class="contact-contents d-flex flex-column flex-lg-row justify-content-around">
        <div class="contact-links d-flex flex-column justify-content-center align-items-center">

            <div class="address ms-2 d-flex">
              <div style="border-radius: 50%;background: white; width: 2rem;height: 2rem;" class="icon-link">
                <i class="bi bi-heart-fill"></i>
              </div>
              <div class="icon-link d-flex flex-column align-content-start">
                <div class="">
                  <h2>Address</h2>
                  <p>
                    aztiketsales44@gmail.com
                  </p>
                </div>
              </div>

            </div>


            <div class="address ms-2 d-flex">
              <div style="border-radius: 50%;background: white; width: 2rem;height: 2rem;" class="icon-link">
                <i class="bi bi-heart-fill"></i>
              </div>
              <div class="icon-link d-flex flex-column">
               <div class="">
                 <h2>Phone</h2>
                 <p>
                   0728548760
                 </p>
               </div>
              </div>

            </div>
        </div>


        <div class="contact-message mx-2">
          <h2>Send Message</h2>
          <div class="inputBox my-3">
            <input type="text" required>
            <span class="text-uppercase">Full Name</span>
          </div>
          <div class="inputBox my-3">
            <input type="email" required>
            <span class="text-uppercase">Email</span>
          </div>

          <div class="inputBox my-3">
            <input type="number" required>
            <span class="text-uppercase">Phone</span>
          </div>
          <div class="inputBox my-3">
            <textarea name="" id=""  rows="3"></textarea>
            <span class="text-uppercase">Message</span>
          </div>
          <button class="submit" type="submit">Send</button>
        </div>
      </div>
    </div>

  </div>
</template>

<style scoped>
.contact-message input,textarea{
  width: 100%;
  border: none;
  outline: none;
  border-bottom: 1px solid black;
  padding: 5px 0px;
}
.contact-message{
  position: relative;
  margin-top: 20px;
}
.contact-message span {
  position: absolute;
  pointer-events: none;
  font-size: 16px;
  margin: 10px 0px;
  left: 0px;
  transition: 0.5s;
}

.contact-message input:focus ~ span,
.contact-message textarea:focus ~ span,
.contact-message textarea:valid ~ span,
.contact-message input:valid ~ span {
  color: black;
  font-size: 20px;
  transform: translateY(-29px);
}

.submit{
  text-transform: uppercase;
  border: none;
  padding: 10px;
  background: blue;
  color:white;
  width: 7rem;
}
</style>