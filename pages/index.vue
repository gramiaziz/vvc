<script setup>
import { ref } from 'vue'
import '@fortawesome/fontawesome-free/css/all.css';
const loading = ref(false)
</script>

<template>
    <div class="bg-gray-100 text-gray-900">
  <section id="home" >
    <div class="min-h-screen bg-[#072929] flex items-start justify-center text-white pt-24">
      <div class="text-center mt-12">
        <h1 class="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-[#2dffcc] animate-fade-in transition-all duration-500 ease-in-out hover:text-white">
          Seamless <br />
          Collaboration <br />
          for Remote Teams
        </h1>
        <p class="mt-4 text-lg font-medium text-slate-400">
          Empower your remote team with tools that simplify communication and enhance productivity.
        </p>
        <button class="mt-6 py-3 px-8 bg-[#2dffcc] text-black rounded-lg text-lg font-semibold hover:bg-[#20ccff] transition duration-300 ease-in-out transform hover:scale-105 animate-fade-in">
          Get Started
        </button>
            </div>
          </div>
        </section>

      <section id="features" class="py-16 bg-[#f9f9f9]">
        <div class="container mx-auto text-center">
          <h2 class="text-4xl font-extrabold text-[#072929] mb-6">
            Seamlessly Integrate with Your Favorite Tools
          </h2>
          <p class="text-lg text-gray-700 font-semibold leading-relaxed italic mb-12">
            Connect your virtual office with the tools your team already uses.<br> From cloud storage to project management, we support integrations with a variety of platforms<br> to keep everything in sync.
          </p>
          <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 px-2">
            <div class="bg-[#f9f9f9] shadow-md rounded-lg p-4 flex flex-col items-center w-full max-w-xs mx-auto transform transition-transform duration-300 hover:scale-105">
              <i class="fab fa-google-drive text-6xl text-[#34A853] mb-4"></i>
            </div>
            <div class="bg-[#f9f9f9] shadow-md rounded-lg p-4 flex flex-col items-center w-full max-w-xs mx-auto transform transition-transform duration-300 hover:scale-105">
              <i class="fab fa-dropbox text-6xl text-[#0061FF] mb-4"></i>
            </div>
            <div class="bg-[#f9f9f9] shadow-md rounded-lg p-4 flex flex-col items-center w-full max-w-xs mx-auto transform transition-transform duration-300 hover:scale-105">
              <i class="fab fa-slack text-6xl text-[#611f69] mb-4"></i>
            </div>
            <div class="bg-[#f9f9f9] shadow-md rounded-lg p-4 flex flex-col items-center w-full max-w-xs mx-auto transform transition-transform duration-300 hover:scale-105">
              <i class="fab fa-trello text-6xl text-[#0079BF] mb-4"></i>
            </div>
            <div class="bg-[#f9f9f9] shadow-md rounded-lg p-4 flex flex-col items-center w-full max-w-xs mx-auto transform transition-transform duration-300 hover:scale-105">
              <i class="fab fa-jira text-6xl text-[#0052CC] mb-4"></i>
            </div>
            <div class="bg-[#f9f9f9] shadow-md rounded-lg p-4 flex flex-col items-center w-full max-w-xs mx-auto transform transition-transform duration-300 hover:scale-105">
              <i class="fab fa-github text-6xl text-[#181717] mb-4"></i>
            </div>
          </div>
        </div>
      </section>


<!--how it works-->
<section class="py-16 bg-[#f4f4f4]">
  <div class="container mx-auto text-center">
    <h2 class="text-4xl font-extrabold text-[#072929] mb-6">
      How It Works
        </h2>
        <p class="text-lg text-gray-700 font-semibold leading-relaxed italic mb-12">
      Get started in minutes with an intuitive setup. Here's how you can integrate and use the platform to collaborate with your remote team.
        </p>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
      <div class="flex flex-col items-center">
        <div class="w-24 h-24 bg-[#2dffcc] rounded-full flex items-center justify-center mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 18v-6h2l3 4-3 4h-2v-6H8v6H6l-3-4 3-4h2V6h8v6h2l3 4-3 4h-2z"/>
          </svg>
        </div>
        
        <h3 class="text-2xl font-semibold text-[#072929] mb-2">Sign Up</h3>
        <p class="text-sm text-gray-700 font-medium leading-relaxed">Create an account and set up your profile. It's quick and easy, no technical expertise required!</p>
      </div>
      <div class="flex flex-col items-center">
        <div class="w-24 h-24 bg-[#2dffcc] rounded-full flex items-center justify-center mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
        </div>
        <h3 class="text-2xl font-semibold text-[#072929] mb-2">Create Rooms</h3>
        <p class="text-sm text-gray-700 font-medium leading-relaxed">Set up virtual rooms for your teams or projects. You can customize each room with different tools and features.</p>
      </div>
      <div class="flex flex-col items-center">
        <div class="w-24 h-24 bg-[#2dffcc] rounded-full flex items-center justify-center mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3l7 7-7 7M13 3l7 7-7 7"/>
          </svg>
        </div>
        <h3 class="text-2xl font-semibold text-[#072929] mb-2">Start Collaborating</h3>
        <p class="text-sm text-gray-700 font-medium leading-relaxed">Invite your team to join the room and start collaborating. Share documents, manage tasks, and chat in real time.</p>
      </div>
        </div>
        <button class="mt-8 py-3 px-6 bg-[#2dffcc] text-[#072929] rounded-lg text-lg font-semibold hover:bg-[#20ccff] transition duration-300 ease-in-out transform hover:scale-105">
      Get Started Now
        </button>
  </div>
</section>
<!--testimonies-->
<section id="Testimonials" class="py-16 bg-[#f9f9f9]">
  <div class="container mx-auto text-center">
    <h2 class="text-4xl font-extrabold text-[#072929] mb-6">
      What Our Users Are Saying
    </h2>
    <p class="text-lg text-gray-700 font-semibold leading-relaxed italic mb-12">
      See how our platform has helped remote teams work better together. Here are some testimonials from our happy customers.
    </p>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">

      <div class="bg-white p-6 rounded-lg shadow-lg  transform transition-transform duration-300 hover:scale-105">
        <div class="flex justify-center mb-4">
          <img src="/images/p2.png" alt="User 1" class="w-16 h-16 rounded-full object-cover"/>
        </div>
        <p class="text-sm text-gray-700 font-medium leading-relaxed italic mb-4">
          "The platform has made our collaboration seamless. The virtual rooms and task boards are just what we needed to stay organized and focused."
        </p>
        <h3 class="text-xl font-semibold text-[#072929]">Jane Doe</h3>
        <p class="text-md font-medium leading-relaxed italic text-[#072929]">Marketing Manager, XYZ Corp</p>
      </div>

      <div class="bg-white p-6 rounded-lg shadow-lg  transform transition-transform duration-300 hover:scale-105">
        <div class="flex justify-center mb-4">
          <img src="/images/p3.png" alt="User 2" class="w-16 h-16 rounded-full object-cover"/>
        </div>
        <p class="text-sm text-gray-700 font-medium leading-relaxed italic mb-4">
          "Our team is spread across the globe, and this platform has brought us together like never before. We love the ease of communication and collaboration."
        </p>
        <h3 class="text-xl font-semibold text-[#072929]">John Smith</h3>
        <p class="text-md font-medium leading-relaxed italic text-[#072929]">Product Designer, ABC Ltd.</p>
      </div>

      <div class="bg-white p-6 rounded-lg shadow-lg  transform transition-transform duration-300 hover:scale-105">
        <div class="flex justify-center mb-4">
          <img src="/images/p1.png" alt="User 3" class="w-16 h-16 rounded-full object-cover"/>
        </div>
        <p class="text-sm text-gray-700 font-medium leading-relaxed italic mb-4">
          "With everything in one place—from video calls to file sharing—it’s easy for us to stay on top of our projects. Highly recommended!"
        </p>
        <h3 class="text-xl font-semibold text-[#072929]">Emily White</h3>
        <p class="text-md font-medium leading-relaxed italic text-[#072929]">Lead Developer, Tech Innovations</p>
      </div>
    </div>
  </div>
</section>

<!--pricing-->
<section id="Pricing" class="py-16 bg-[#f9f9f9]">
    <div class="container mx-auto text-center">
      <h2 class="text-4xl font-extrabold text-[#072929] mb-6">
        Choose Your Plan
      </h2>
      <p class="text-lg text-gray-700 font-semibold leading-relaxed italic mb-12">
        We offer flexible pricing plans to suit teams of all sizes. Choose the plan that's right for you.
      </p>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        <div class="bg-white shadow-md rounded-lg p-6 text-center">
          <h3 class="text-2xl font-semibold text-[#072929] mb-4">Free Plan</h3>
          <p class="text-sm text-gray-700 font-medium leading-relaxed mb-6">Perfect for small teams or trying it out</p>
          <div class="text-xl font-bold text-[#072929] mb-6">$0/month</div>
          <ul class="mb-6 text-left text-sm text-gray-700 font-medium leading-relaxed">
            <li>1 GB storage</li>
            <li>Limited integrations</li>
            <li>Email support</li>
          </ul>
          <button class="px-6 py-3 bg-[#2dffcc] text-black rounded-lg text-lg font-semibold hover:bg-[#20ccff] transition duration-300 ease-in-out transform hover:scale-105">
            Get Started
          </button>
        </div>


        <div class="bg-[#072929] text-white shadow-md rounded-lg p-6 text-center">
          <h3 class="text-2xl font-semibold mb-4">Pro Plan</h3>
          <p class="mb-6">For growing teams that need more features</p>
          <div class="text-xl font-bold mb-6">$15/month</div>
          <ul class="mb-6 text-left">
            <li>10 GB storage</li>
            <li>Unlimited integrations</li>
            <li>Priority support</li>
            <li>Advanced analytics</li>
          </ul>
          <button class="px-6 py-3 bg-[#2dffcc] text-black rounded-lg text-lg font-semibold hover:bg-[#20ccff] transition duration-300 ease-in-out transform hover:scale-105">
            Get Started
          </button>
        </div>

        <div class="bg-white shadow-md rounded-lg p-6 text-center">
          <h3 class="text-2xl font-semibold text-[#072929] mb-4">Enterprise Plan</h3>
          <p class="text-sm text-gray-700 font-medium leading-relaxed mb-6">For large organizations with advanced needs</p>
          <div class="text-xl font-bold text-[#072929] mb-6">$45/month</div>
          <ul class="mb-6 text-left text-sm text-gray-700 font-medium leading-relaxed">
            <li>Unlimited storage</li>
            <li>Custom integrations</li>
            <li>24/7 support</li>
            <li>Dedicated account manager</li>
          </ul>
          <button class="px-6 py-3 bg-[#2dffcc] text-black rounded-lg text-lg font-semibold hover:bg-[#20ccff] transition duration-300 ease-in-out transform hover:scale-105">
            Get Started
          </button>
        </div>
      </div>
    </div>
  </section>

  <!--callforaction-->
  <section class="py-16 bg-[#072929] text-white text-center">
    <div class="container mx-auto">
      <h2 class="text-4xl sm:text-5xl font-extrabold mb-6">
        Ready to Take Your Team's Collaboration to the Next Level?
      </h2>
      <p class="text-lg sm:text-xl mb-8">
        Start using our platform today. Seamlessly collaborate, manage tasks, and integrate your favorite tools—all in one place.
      </p>
      <div class="flex justify-center gap-6">

        <button class="px-8 py-3 bg-[#2dffcc] text-black rounded-lg text-lg font-semibold hover:bg-[#20ccff] transition duration-300 ease-in-out transform hover:scale-105">
          Start Free Trial
        </button>
 
        <button class="px-8 py-3 bg-transparent border-2 border-white text-white rounded-lg text-lg font-semibold hover:bg-[#2dffcc] hover:text-black transition duration-300 ease-in-out transform hover:scale-105">
          Schedule a Demo
        </button>
      </div>
    </div>
  </section>
  <!--footer-->
  <footer class="py-8 bg-[#072929] text-white">
    <div class="container mx-auto text-center">
   
      <div class="mb-6">
        <a href="#" class="text-white hover:text-[#2dffcc] mx-4 transition duration-300 ease-in-out">
          <i class="fab fa-facebook-f"></i>
        </a>
        <a href="#" class="text-white hover:text-[#2dffcc] mx-4 transition duration-300 ease-in-out">
          <i class="fab fa-twitter"></i>
        </a>
        <a href="#" class="text-white hover:text-[#2dffcc] mx-4 transition duration-300 ease-in-out">
          <i class="fab fa-linkedin-in"></i>
        </a>
        <a href="#" class="text-white hover:text-[#2dffcc] mx-4 transition duration-300 ease-in-out">
          <i class="fab fa-instagram"></i>
        </a>
      </div>


      <div class="text-sm mb-4">
        <a  class="text-white hover:text-[#2dffcc] mx-3">Privacy Policy</a>
        <a  class="text-white hover:text-[#2dffcc] mx-3">Terms of Service</a>
      </div>


      <p class="text-sm text-[#888]">
        &copy; 2025 VW. All rights reserved.
      </p>
    </div>
  </footer>
</div>
</template>

<style scoped>
@keyframes fade-in {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 1s ease-out;
}
</style>
