<script lang="ts">
    import { createEventDispatcher } from 'svelte';
    
    export let activePage: string = 'home';
    
    const dispatch = createEventDispatcher();
    
    const menuItems = [
      { id: 'home', label: 'Home', icon: '🏠' },
      { id: 'friends', label: 'Friends', icon: '👥' },
      { id: 'messages', label: 'Messages', icon: '💬' },
      { id: 'profile', label: 'Profile', icon: '👤' },
      { id: 'logout', label: 'Logout', icon: '🚪' }
    ];
  </script>
  
  <aside class="sidebar">
    <nav>
      {#each menuItems as item}
        <button
          class="nav-item {activePage === item.id ? 'active' : ''}"
          on:click={() => dispatch('navigate', item.id)}
        >
          <span class="icon">{item.icon}</span>
          <span class="label">{item.label}</span>
        </button>
      {/each}
      }
    </nav>
  </aside>
  
  <style>
    .sidebar {
      background-color: #ffffff;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.07);
      width: 220px;
      padding: 2rem 1rem;
      height: 100%;
      border-right: 1px solid rgba(176, 96, 31, 0.1);
      transition: all 0.3s ease;
      border-radius: 0 0 10px 0;
    }
  
    nav {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }
  
    .nav-item {
      display: flex;
      align-items: center;
      gap: 1rem;
      width: 100%;
      padding: 1rem;
      border: none;
      border-radius: 12px;
      background: none;
      color: #2c3e50;
      font-size: 1.2rem;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
    }
  
    .nav-item:hover {
      background-color: rgba(176, 96, 31, 0.1);
      color: #b0601f;
      transform: translateX(5px);
    }
  
    .nav-item.active {
      background-color: #b0601f;
      color: white;
      transform: none;
    }
  
    .icon {
      font-size: 1.5rem;
      opacity: 0.9;
    }
  
    @media (max-width: 768px) {
      .sidebar {
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        height: auto;
        padding: 0.5rem;
        border-right: none;
        border-top: 1px solid rgba(176, 96, 31, 0.1);
        background-color: rgba(255, 255, 255, 0.95);
        backdrop-filter: blur(10px);
      }
  
      nav {
        flex-direction: row;
        justify-content: space-around;
      }
  
      .nav-item {
        flex-direction: column;
        gap: 0.25rem;
        padding: 0.75rem;
        border-radius: 8px;
      }
  
      .nav-item:hover {
        transform: translateY(-5px);
      }
  
      .label {
        font-size: 0.8rem;
      }
  
      .icon {
        font-size: 1.5rem;
      }
    }
  </style>