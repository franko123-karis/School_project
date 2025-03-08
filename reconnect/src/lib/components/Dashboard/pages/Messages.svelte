<script lang="ts">
    let isLoading = true;
    let selectedChat: { id: any; name: any[]; } | null = null;
    let chats: any[] = [];
    
    // Simulate loading
    setTimeout(() => {
      isLoading = false;
      chats = [
        {
          id: 1,
          name: 'Sarah Johnson',
          lastMessage: 'Hello! How are you today?',
          timestamp: '10:30 AM',
          unread: 2
        },
        {
          id: 2,
          name: 'Mike Peters',
          lastMessage: 'Would you like to join our chess club?',
          timestamp: 'Yesterday',
          unread: 0
        },
        {
          id: 3,
          name: 'Emma Wilson',
          lastMessage: 'The garden looks beautiful!',
          timestamp: 'Yesterday',
          unread: 1
        }
      ];
    }, 1500);
  
    function selectChat(chat: { id: any; name: any[]; } | null) {
      selectedChat = chat;
    }
  
    let isMobile = window.innerWidth <= 768;
    
    function handleResize() {
      isMobile = window.innerWidth <= 768;
    }
  </script>
  
  <svelte:window on:resize={handleResize}/>
  
  {#if isLoading}
    <div class="loading">
      <div class="spinner"></div>
      <p>Loading your messages...</p>
    </div>
  {:else}
    <div class="messages-page">
      <div class="chats-list" class:hidden={isMobile && selectedChat}>
        <h2>Messages</h2>
        {#each chats as chat}
        <a href={`#chat-${chat.id}`} 
        class="chat-preview {selectedChat?.id === chat.id ? 'active' : ''}"
        on:click={() => selectChat(chat)}
     >
       <div class="chat-avatar">{chat.name[0]}</div>
       <div class="chat-info">
         <div class="chat-header">
           <h3>{chat.name}</h3>
           <span class="timestamp">{chat.timestamp}</span>
         </div>
         <p class="last-message">{chat.lastMessage}</p>
       </div>
       {#if chat.unread > 0}
         <div class="unread-badge">{chat.unread}</div>
       {/if}
     </a>
     
        {/each}
        }
      </div>
  
      <div class="chat-area" class:hidden={isMobile && !selectedChat}>
        {#if selectedChat}
          <div class="chat-header">
            {#if isMobile}
              <button class="back-button" on:click={() => selectChat(null)}>←</button>
            {/if}
            }
            <div class="chat-avatar">{selectedChat.name[0]}</div>
            <h2>{selectedChat.name}</h2>
          </div>
          <div class="messages">
            <!-- Placeholder for messages -->
            <div class="message-placeholder">
              <p>Start chatting with {selectedChat.name}!</p>
            </div>
          </div>
          <div class="message-input">
            <input type="text" placeholder="Type your message..." />
            <button class="send-button">Send</button>
          </div>
        {:else}
          <div class="no-chat-selected">
            <p>Select a chat to start messaging</p>
          </div>
        {/if}
        }
      </div>
    </div>
  {/if}
  }
  
  <style>
    .messages-page {
      display: flex;
      height: 100%;
      background: white;
      border-radius: 15px;
      overflow: hidden;
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
  
    .chats-list {
      width: 350px;
      border-right: 1px solid #eee;
      overflow-y: auto;
    }
  
    .chats-list h2 {
      padding: 1.5rem;
      margin: 0;
      font-size: 1.8rem;
      color: #333;
    }
  
    .chat-preview {
      display: flex;
      align-items: center;
      padding: 1.5rem;
      cursor: pointer;
      transition: background-color 0.3s ease;
      gap: 1rem;
    }
  
    .chat-preview:hover {
      background-color: #fff5f0;
    }
  
    .chat-preview.active {
      background-color: #fff5f0;
    }
  
    .chat-avatar {
      width: 50px;
      height: 50px;
      background: #b0601f;
      color: white;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.5rem;
    }
  
    .chat-info {
      flex: 1;
    }
  
    .chat-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 0.5rem;
    }
  
    .chat-header h3 {
      margin: 0;
      font-size: 1.2rem;
      color: #333;
    }
  
    .timestamp {
      font-size: 0.9rem;
      color: #666;
    }
  
    .last-message {
      margin: 0;
      color: #666;
      font-size: 1.1rem;
    }
  
    .unread-badge {
      background: #b0601f;
      color: white;
      width: 24px;
      height: 24px;
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.9rem;
    }
  
    .chat-area {
      flex: 1;
      display: flex;
      flex-direction: column;
    }
  
    .chat-header {
      padding: 1.5rem;
      border-bottom: 1px solid #eee;
      display: flex;
      align-items: center;
      gap: 1rem;
    }
  
    .back-button {
      background: none;
      border: none;
      font-size: 1.5rem;
      cursor: pointer;
      padding: 0.5rem;
      color: #333;
    }
  
    .messages {
      flex: 1;
      padding: 1.5rem;
      overflow-y: auto;
    }
  
    .message-placeholder {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      color: #666;
      font-size: 1.2rem;
    }
  
    .message-input {
      padding: 1.5rem;
      border-top: 1px solid #eee;
      display: flex;
      gap: 1rem;
    }
  
    .message-input input {
      flex: 1;
      padding: 1rem;
      border: 1px solid #eee;
      border-radius: 25px;
      font-size: 1.1rem;
    }
  
    .send-button {
      background: #b0601f;
      color: white;
      border: none;
      padding: 0 1.5rem;
      border-radius: 25px;
      font-size: 1.1rem;
      cursor: pointer;
    }
  
    .send-button:hover {
      background: #904913;
    }
  
    .no-chat-selected {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      color: #666;
      font-size: 1.2rem;
    }
  
    .hidden {
      display: none;
    }
  
    @media (max-width: 768px) {
      .chats-list {
        width: 100%;
      }
  
      .chat-area {
        width: 100%;
      }
    }
  </style>