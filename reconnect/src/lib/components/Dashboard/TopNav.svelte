<script lang="ts">
    // import { createEventDispatcher } from 'svelte';
    
    export let username: string = '';
    export let profilePic: string | null = null;
    
    // const dispatch = createEventDispatcher();
    function handleClick(event: Event) {
    event.currentTarget?.dispatchEvent(new CustomEvent('profileClick', { bubbles: true }));
  }
  </script>
  
  <nav class="top-nav">
    <div class="logo">
      <h1>ReConnect</h1>
    </div>
    
    <div class="search-bar">
      <input type="text" placeholder="Search friends..." />
      <button class="search-icon">🔍</button>
    </div>
    
    <a href="./Dashboard/pages/Profile.svelte" class="profile-section" on:click={handleClick}>
        <div class="profile-pic">
          {#if profilePic}
            <img src={profilePic} alt={username} />
          {:else}
            <div class="default-avatar">{username?.[0]?.toUpperCase()}</div>
          {/if}
        </div>
        <span class="username">{username}</span>
    </a>
   </nav>
  
  <style>
    .top-nav {
      background-color: #b0601f;
      color: white;
      padding: 1rem 2rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      width: 100%;
    }
  
    .logo h1 {
      color: white;
      font-size: 2rem;
      font-weight: bold;
      margin: 0;
    }
  
    .search-bar {
      display: flex;
      align-items: center;
      background: #f5f5f5;
      border-radius: 25px;
      padding: 0.5rem 1rem;
      width: 40%;
    }
  
    .search-bar input {
      border: none;
      background: none;
      width: 100%;
      font-size: 1.2rem;
      padding: 0.5rem;
    }
  
    .search-bar button {
      background: none;
      border: none;
      cursor: pointer;
      font-size: 1.2rem;
    }
  
    .profile-section {
      display: flex;
      align-items: center;
      gap: 1rem;
      cursor: pointer;
    }
  
    .profile-pic {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      overflow: hidden;
    }
  
    .default-avatar {
      width: 100%;
      height: 100%;
      background: #381b03;
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.5rem;
      font-weight: bold;
    }
  
    .username {
      font-size: 1.2rem;
      font-weight: bold;
      color: #333;
    }
  
    @media (max-width: 768px) {
      .search-bar {
        width: 50%;
      }
  
      .username {
        display: none;
      }
    }
  
    @media (max-width: 480px) {
      .top-nav {
        padding: 1rem;
      }
  
      .search-bar {
        width: 60%;
      }
    }
  </style>