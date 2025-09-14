<script>
  import SEO from '../../components/SEO.svelte';
  
  export let data;
  
  const { agent, office, contactMethods } = data;
</script>

<SEO
  title="Contact Dr. Jan Duffy - Heritage at Stonebridge Real Estate Expert"
  description="Get in touch with Dr. Jan Duffy, your trusted real estate professional for Heritage at Stonebridge. Call 702-222-1964 for luxury homes in Summerlin, Las Vegas."
  canonical="https://heritagestonebridge.com/contact"
  keywords={['Dr. Jan Duffy', 'Heritage Stonebridge real estate', 'Summerlin homes', 'Las Vegas real estate agent', 'contact real estate professional']}
  openGraph={{
    type: 'website',
    url: 'https://heritagestonebridge.com/contact',
    title: 'Contact Dr. Jan Duffy - Heritage at Stonebridge Expert',
    description: 'Connect with Dr. Jan Duffy for luxury real estate in Heritage at Stonebridge, Summerlin.',
    image: 'https://heritagestonebridge.com/images/agent/jan-duffy-contact.jpg'
  }}
/>

<div class="hero-section text-center">
  <div class="container-max px-4">
    <h1 class="text-5xl font-bold mb-4">
      Contact Dr. Jan Duffy
    </h1>
    <p class="text-xl mb-6">
      Your Trusted Heritage at Stonebridge Real Estate Expert
    </p>
  </div>
</div>

<section class="section-padding">
  <div class="container-content">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
      
      <!-- Contact Information -->
      <div class="space-y-8">
        <div class="heritage-card p-8">
          <div class="text-center mb-6">
            <div class="w-32 h-32 bg-heritage-secondary rounded-full mx-auto mb-4 flex items-center justify-center">
              <span class="text-4xl">👩‍💼</span>
            </div>
            <h2 class="heritage-heading text-2xl mb-2">{agent.name}</h2>
            <p class="text-heritage-primary font-semibold">{agent.title}</p>
            <p class="text-sm text-gray-600">{agent.experience} of Experience</p>
          </div>
          
          <div class="space-y-4">
            <div class="flex items-center space-x-3">
              <span class="text-2xl">📞</span>
              <div>
                <p class="font-semibold">Phone</p>
                <a href="tel:{agent.phone}" class="text-heritage-primary hover:text-heritage-dark">
                  {agent.phone}
                </a>
              </div>
            </div>
            
            <div class="flex items-center space-x-3">
              <span class="text-2xl">✉️</span>
              <div>
                <p class="font-semibold">Email</p>
                <a href="mailto:{agent.email}" class="text-heritage-primary hover:text-heritage-dark">
                  {agent.email}
                </a>
              </div>
            </div>
            
            <div class="flex items-center space-x-3">
              <span class="text-2xl">🏢</span>
              <div>
                <p class="font-semibold">Office</p>
                <p class="text-gray-700">{office.address}</p>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Office Hours -->
        <div class="heritage-card p-6">
          <h3 class="heritage-heading text-xl mb-4">Office Hours</h3>
          <p class="text-gray-700">{office.hours}</p>
        </div>
      </div>
      
      <!-- Contact Form -->
      <div class="heritage-card p-8">
        <h3 class="heritage-heading text-2xl mb-6">Send a Message</h3>
        
        <form class="space-y-6">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label for="firstName" class="block text-sm font-medium text-gray-700 mb-2">
                First Name *
              </label>
              <input 
                type="text" 
                id="firstName" 
                name="firstName" 
                required
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-heritage-primary"
              >
            </div>
            
            <div>
              <label for="lastName" class="block text-sm font-medium text-gray-700 mb-2">
                Last Name *
              </label>
              <input 
                type="text" 
                id="lastName" 
                name="lastName" 
                required
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-heritage-primary"
              >
            </div>
          </div>
          
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700 mb-2">
              Email *
            </label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              required
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-heritage-primary"
            >
          </div>
          
          <div>
            <label for="phone" class="block text-sm font-medium text-gray-700 mb-2">
              Phone
            </label>
            <input 
              type="tel" 
              id="phone" 
              name="phone"
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-heritage-primary"
            >
          </div>
          
          <div>
            <label for="message" class="block text-sm font-medium text-gray-700 mb-2">
              Message *
            </label>
            <textarea 
              id="message" 
              name="message" 
              rows="5" 
              required
              placeholder="Tell me about your real estate needs..."
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-heritage-primary"
            ></textarea>
          </div>
          
          <button 
            type="submit" 
            class="w-full heritage-button text-lg py-3"
          >
            Send Message to Dr. Jan Duffy
          </button>
        </form>
      </div>
    </div>
    
    <!-- Specialties Section -->
    <div class="mt-16">
      <h3 class="heritage-heading text-center mb-8">Dr. Jan Duffy's Specialties</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {#each agent.specialties as specialty}
          <div class="heritage-card p-6 text-center">
            <p class="font-semibold text-heritage-primary">{specialty}</p>
          </div>
        {/each}
      </div>
    </div>
  </div>
</section>

<style>
  @import '../../assets/css/tailwind.css';
</style>
