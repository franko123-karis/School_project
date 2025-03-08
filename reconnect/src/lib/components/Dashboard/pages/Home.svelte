<script lang="ts">
    let isLoading = true;
    let suggestedFriends: any[] = [];
    let recentMessages: any[] = [];
    
    // Simulate loading
    setTimeout(() => {
      isLoading = false;
      suggestedFriends = [
        { id: 1, name: 'Sarah Johnson', interests: ['Reading', 'Gardening'] },
        { id: 2, name: 'Mike Peters', interests: ['Chess', 'Photography'] },
      ];
      recentMessages = [
        { id: 1, from: 'Sarah Johnson', preview: 'Hello! How are you today?' },
        { id: 2, from: 'Mike Peters', preview: 'Would you like to join our...' },
      ];
    }, 1500);
  </script>
  
  {#if isLoading}
    <div class="loading">
      <div class="spinner"></div>
      <p>Loading your personalized dashboard...</p>
    </div>
  {:else}
    <div class="home">
      <section class="welcome">
        <h1>Welcome Back!</h1>
        <div class="wellness-tip">
          <h2>Daily Wellness Tip</h2>
          <p>"Take a 10-minute walk today. It's a great way to boost your mood and energy!"</p>
        </div>
      </section>
  
      <section class="suggested-friends">
        <h2>Suggested Friends</h2>
        <div class="friends-grid">
          {#each suggestedFriends as friend}
            <div class="friend-card">
              <div class="friend-avatar">{friend.name[0]}</div>
              <h3>{friend.name}</h3>
              <p>Interests: {friend.interests.join(', ')}</p>
              <button class="add-friend">Add Friend</button>
            </div>
          {/each}
          }
        </div>
      </section>
  
      <section class="recent-messages">
        <h2>Recent Messages</h2>
        <div class="messages-list">
          {#each recentMessages as message}
            <div class="message-preview">
              <div class="message-avatar">{message.from[0]}</div>
              <div class="message-content">
                <h3>{message.from}</h3>
                <p>{message.preview}</p>
              </div>
            </div>
          {/each}
          }
        </div>
      </section>
    </div>
  {/if}
  }
  
  <style>
    .home {
      max-width: 1200px;
      margin: 0 auto;
    }
  
    .loading {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 50vh;
      font-size: 1.2rem;
      color: #666;
    }
  
    .spinner {
      width: 50px;
      height: 50px;
      border: 5px solid #f3f3f3;
      border-top: 5px solid #b0601f;
      border-radius: 50%;
      animation: spin 1s linear infinite;
      margin-bottom: 1rem;
    }
  
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  
    section {
      margin-bottom: 2rem;
      background: white;
      padding: 2rem;
      border-radius: 15px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
  
    h1 {
      font-size: 2.5rem;
      color: #b0601f;
      margin-bottom: 1rem;
    }
  
    h2 {
      font-size: 2rem;
      color: #333;
      margin-bottom: 1.5rem;
    }
  
    .wellness-tip {
      background: #fff5f0;
      padding: 1.5rem;
      border-radius: 10px;
      margin-top: 1rem;
    }
  
    .wellness-tip p {
      font-size: 1.2rem;
      color: #666;
    }
  
    .friends-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      gap: 1.5rem;
    }
  
    .friend-card {
      padding: 1.5rem;
      border: 1px solid #eee;
      border-radius: 10px;
      text-align: center;
    }
  
    .friend-avatar {
      width: 60px;
      height: 60px;
      background: #b0601f;
      color: white;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.8rem;
      margin: 0 auto 1rem;
    }
  
    .add-friend {
      background: #b0601f;
      color: white;
      border: none;
      padding: 0.8rem 1.5rem;
      border-radius: 25px;
      font-size: 1.1rem;
      cursor: pointer;
      margin-top: 1rem;
    }
  
    .add-friend:hover {
      background: #904913;
    }
  
    .message-preview {
      display: flex;
      align-items: center;
      padding: 1rem;
      border-bottom: 1px solid #eee;
    }
  
    .message-avatar {
      width: 50px;
      height: 50px;
      background: #b0601f;
      color: white;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.5rem;
      margin-right: 1rem;
    }
  
    .message-content h3 {
      font-size: 1.2rem;
      margin: 0;
    }
  
    .message-content p {
      color: #666;
      margin: 0.5rem 0 0;
    }
  
    @media (max-width: 768px) {
      .friends-grid {
        grid-template-columns: 1fr;
      }
  
      h1 {
        font-size: 2rem;
      }
  
      h2 {
        font-size: 1.5rem;
      }
  
      section {
        padding: 1.5rem;
      }
    }
  </style>