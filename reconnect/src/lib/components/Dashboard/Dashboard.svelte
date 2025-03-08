<script lang="ts">
    import TopNav from '$lib/components/Dashboard/TopNav.svelte';
    import Sidebar from '$lib/components/Dashboard/Sidebar.svelte';
    import Home from '$lib/components/Dashboard/pages/Home.svelte';
    import Friends from '$lib/components/Dashboard/pages/Friends.svelte';
    import Messages from '$lib/components/Dashboard/pages/Messages.svelte';
    import Profile from '$lib/components/Dashboard/pages/Profile.svelte';
    
    let currentPage = 'home';
    let username = 'John Doe'; // This should come from your auth state
    let profilePic = null; // This should come from your auth state
    
    function handleNavigation(event: CustomEvent<string>) {
      const page = event.detail;
      if (page === 'logout') {
        // Handle logout logic
        return;
      }
      currentPage = page;
    }
    
    function handleProfileClick() {
      currentPage = 'profile';
    }
  </script>
  
  <div class="dashboard">
    <TopNav {username} {profilePic} on:profileClick={handleProfileClick} />
    
    <div class="content-wrapper">
      <Sidebar activePage={currentPage} on:navigate={handleNavigation} />
      
      <main class="main-content">
        {#if currentPage === 'home'}
          <Home />
        {:else if currentPage === 'friends'}
          <Friends />
        {:else if currentPage === 'messages'}
          <Messages />
        {:else if currentPage === 'profile'}
          <Profile {username} {profilePic} />
        {/if}
        }
      </main>
    </div>
  </div>
  
  <style>
    .dashboard {
      min-height: 100vh;
      background-color: #f9f9f9;
    }
  
    .content-wrapper {
      display: flex;
      height: calc(100vh - 80px);
    }
  
    .main-content {
      flex: 1;
      padding: 2rem;
      overflow-y: auto;
    }
  
    @media (max-width: 768px) {
      .main-content {
        padding: 1rem;
      }
    }
  </style>