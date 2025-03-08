<script lang="ts">
    let isLoading = true;
    let activeTab = 'friends';
    let friends: any[] = [];
    let suggestedFriends: any[] = [];
    
    // Simulate loading
    setTimeout(() => {
      isLoading = false;
      friends = [
        { id: 1, name: 'Sarah Johnson', interests: ['Reading', 'Gardening'] },
        { id: 2, name: 'Mike Peters', interests: ['Chess', 'Photography'] },
        { id: 3, name: 'Emma Wilson', interests: ['Cooking', 'Music'] }
      ];
      suggestedFriends = [
        { id: 4, name: 'John Smith', interests: ['Walking', 'History'] },
        { id: 5, name: 'Alice Brown', interests: ['Painting', 'Gardening'] },
        { id: 6, name: 'Robert Davis', interests: ['Chess', 'Reading'] },
        { id: 7, name: 'Mary Wilson', interests: ['Cooking', 'Photography'] },
        { id: 8, name: 'James Taylor', interests: ['Music', 'Walking'] },
        { id: 9, name: 'Patricia Moore', interests: ['History', 'Painting'] },
        { id: 10, name: 'Richard Martin', interests: ['Gardening', 'Chess'] }
      ];
    }, 1500);
  </script>
  
  {#if isLoading}
    <div class="loading">
      <div class="spinner"></div>
      <p>Loading your friends...</p>
    </div>
  {:else}
    <div class="friends-page">
      <div class="tabs">
        <button 
          class="tab-button {activeTab === 'friends' ? 'active' : ''}"
          on:click={() => activeTab = 'friends'}
        >
          My Friends
        </button>
        <button 
          class="tab-button {activeTab === 'suggested' ? 'active' : ''}"
          on:click={() => activeTab = 'suggested'}
        >
          Suggested For You
        </button>
      </div>
  
      {#if activeTab === 'friends'}
        <div class="friends-list">
          {#each friends as friend}
            <div class="friend-card">
              <div class="friend-info">
                <div class="friend-avatar">{friend.name[0]}</div>
                <div class="friend-details">
                  <h3>{friend.name}</h3>
                  <p>Interests: {friend.interests.join(', ')}</p>
                </div>
              </div>
              <button class="message-button">Message</button>
            </div>
          {/each}
          }
        </div>
      {:else}
        <div class="suggested-list">
          {#each suggestedFriends as friend}
            <div class="friend-card">
              <div class="friend-info">
                <div class="friend-avatar">{friend.name[0]}</div>
                <div class="friend-details">
                  <h3>{friend.name}</h3>
                  <p>Interests: {friend.interests.join(', ')}</p>
                </div>
              </div>
              <button class="add-friend-button">Add Friend</button>
            </div>
          {/each}
          }
        </div>
      {/if}
      }
    </div>
  {/if}
  }
  
  <style>
    .friends-page {
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
  
    .tabs {
      display: flex;
      gap: 1rem;
      margin-bottom: 2rem;
    }
  
    .tab-button {
      font-size: 1.2rem;
      padding: 1rem 2rem;
      border: none;
      border-radius: 10px;
      background: white;
      color: #666;
      cursor: pointer;
      transition: all 0.3s ease;
    }
  
    .tab-button.active {
      background: #b0601f;
      color: white;
    }
  
    .friend-card {
      background: white;
      padding: 1.5rem;
      border-radius: 15px;
      margin-bottom: 1rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
  
    .friend-info {
      display: flex;
      align-items: center;
      gap: 1.5rem;
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
    }
  
    .friend-details h3 {
      font-size: 1.4rem;
      margin: 0 0 0.5rem 0;
      color: #333;
    }
  
    .friend-details p {
      font-size: 1.1rem;
      color: #666;
      margin: 0;
    }
  
    .message-button, .add-friend-button {
      padding: 0.8rem 1.5rem;
      border: none;
      border-radius: 25px;
      font-size: 1.1rem;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }
  
    .message-button {
      background: #b0601f;
      color: white;
    }
  
    .message-button:hover {
      background: #904913;
    }
  
    .add-friend-button {
      background: #b0601f;
      color: white;
    }
  
    .add-friend-button:hover {
      background: #904913;
    }
  
    @media (max-width: 768px) {
      .friend-card {
        flex-direction: column;
        text-align: center;
        gap: 1rem;
      }
  
      .friend-info {
        flex-direction: column;
        gap: 1rem;
      }
  
      .tabs {
        flex-direction: column;
      }
  
      .tab-button {
        width: 100%;
      }
    }
  </style>